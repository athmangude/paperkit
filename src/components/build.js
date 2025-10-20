const fs = require('fs');
const path = require('path');

// Simple build script to copy components and create a basic package
const srcDir = __dirname;
const distDir = path.join(__dirname, 'dist');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy all component files
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

// Copy components
copyDirectory(path.join(srcDir, 'button'), path.join(distDir, 'button'));
copyDirectory(path.join(srcDir, 'icon-button'), path.join(distDir, 'icon-button'));
copyDirectory(path.join(srcDir, 'input'), path.join(distDir, 'input'));
copyDirectory(path.join(srcDir, 'textarea'), path.join(distDir, 'textarea'));
copyDirectory(path.join(srcDir, 'checkbox'), path.join(distDir, 'checkbox'));
copyDirectory(path.join(srcDir, 'radio'), path.join(distDir, 'radio'));
copyDirectory(path.join(srcDir, 'toggle'), path.join(distDir, 'toggle'));
copyDirectory(path.join(srcDir, 'slider'), path.join(distDir, 'slider'));
copyDirectory(path.join(srcDir, 'date-picker'), path.join(distDir, 'date-picker'));
copyDirectory(path.join(srcDir, 'progress-bar'), path.join(distDir, 'progress-bar'));
copyDirectory(path.join(srcDir, 'badge'), path.join(distDir, 'badge'));
copyDirectory(path.join(srcDir, 'tag'), path.join(distDir, 'tag'));
copyDirectory(path.join(srcDir, 'divider'), path.join(distDir, 'divider'));
copyDirectory(path.join(srcDir, 'card'), path.join(distDir, 'card'));
copyDirectory(path.join(srcDir, 'modal'), path.join(distDir, 'modal'));
copyDirectory(path.join(srcDir, 'notification'), path.join(distDir, 'notification'));
copyDirectory(path.join(srcDir, 'tooltip'), path.join(distDir, 'tooltip'));
copyDirectory(path.join(srcDir, 'tabs'), path.join(distDir, 'tabs'));
copyDirectory(path.join(srcDir, 'accordion'), path.join(distDir, 'accordion'));
copyDirectory(path.join(srcDir, 'list'), path.join(distDir, 'list'));
copyDirectory(path.join(srcDir, 'pagination'), path.join(distDir, 'pagination'));
copyDirectory(path.join(srcDir, 'table'), path.join(distDir, 'table'));
copyDirectory(path.join(srcDir, 'typography'), path.join(distDir, 'typography'));
copyDirectory(path.join(srcDir, 'header'), path.join(distDir, 'header'));
copyDirectory(path.join(srcDir, 'hero'), path.join(distDir, 'hero'));
copyDirectory(path.join(srcDir, 'navigation-bar'), path.join(distDir, 'navigation-bar'));
copyDirectory(path.join(srcDir, 'menu'), path.join(distDir, 'menu'));
copyDirectory(path.join(srcDir, 'dropdown-menu'), path.join(distDir, 'dropdown-menu'));
copyDirectory(path.join(srcDir, 'select'), path.join(distDir, 'select'));

// Copy main files
fs.copyFileSync(path.join(srcDir, 'index.ts'), path.join(distDir, 'index.ts'));
fs.copyFileSync(path.join(srcDir, 'types.ts'), path.join(distDir, 'types.ts'));

// Copy CSS files
const cssFiles = fs.readdirSync(srcDir).filter(file => file.endsWith('.css'));
cssFiles.forEach(file => {
  fs.copyFileSync(path.join(srcDir, file), path.join(distDir, file));
});

console.log('Components copied to dist/');
