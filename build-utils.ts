import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Build utility to create physical files for each route
export function createRouteFiles() {
  const distDir = 'dist';
  const protokitDir = join(distDir, 'protokit-ui');
  
  // Create the protokit-ui directory if it doesn't exist
  if (!existsSync(protokitDir)) {
    mkdirSync(protokitDir, { recursive: true });
  }
  
  // Copy route files to the protokit-ui directory
  const routeFiles = ['index.html', 'showcase.html', 'documentation.html', 'about.html'];
  
  routeFiles.forEach(file => {
    const sourcePath = join(distDir, file);
    const destPath = join(protokitDir, file);
    
    if (existsSync(sourcePath)) {
      copyFileSync(sourcePath, destPath);
      console.log(`✅ Copied ${file} to protokit-ui directory`);
    } else {
      console.warn(`⚠️  File ${file} not found in dist directory`);
    }
  });
  
  console.log('🎉 Route files created successfully!');
}