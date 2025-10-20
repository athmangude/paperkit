const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Build script for npm package
const srcDir = __dirname;
const distDir = path.join(__dirname, 'dist');

// Clean and create dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy all component files (TypeScript source)
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy all components
const components = [
  'button', 'icon-button', 'input', 'textarea', 'checkbox', 'radio', 'toggle',
  'slider', 'date-picker', 'progress-bar', 'badge', 'tag', 'divider', 'card',
  'modal', 'notification', 'tooltip', 'tabs', 'accordion', 'list', 'pagination',
  'table', 'typography', 'header', 'hero', 'navigation-bar', 'menu',
  'dropdown-menu', 'select'
];

components.forEach(component => {
  const srcPath = path.join(srcDir, component);
  if (fs.existsSync(srcPath)) {
    copyDirectory(srcPath, path.join(distDir, component));
  }
});

// Copy main files
fs.copyFileSync(path.join(srcDir, 'index.ts'), path.join(distDir, 'index.ts'));
fs.copyFileSync(path.join(srcDir, 'types.ts'), path.join(distDir, 'types.ts'));

// Copy CSS files
const cssFiles = fs.readdirSync(srcDir).filter(file => file.endsWith('.css'));
cssFiles.forEach(file => {
  fs.copyFileSync(path.join(srcDir, file), path.join(distDir, file));
});

// Compile TypeScript to JavaScript
console.log('Compiling TypeScript...');
try {
  execSync('npx tsc --project tsconfig.json', { stdio: 'inherit', cwd: srcDir });
  console.log('TypeScript compilation completed');
} catch (error) {
  console.error('TypeScript compilation failed:', error.message);
  process.exit(1);
}

console.log('Build completed successfully!');
