// Test script to verify the components package works
const fs = require('fs');
const path = require('path');

console.log('Testing components package...');

// Check if dist directory exists
const distDir = path.join(__dirname, 'src/components/dist');
if (!fs.existsSync(distDir)) {
  console.error('❌ dist directory not found');
  process.exit(1);
}

// Check if main files exist
const requiredFiles = [
  'index.ts',
  'types.ts',
  'button/Button.tsx',
  'button/index.ts',
  'card/Card.tsx',
  'card/index.ts'
];

let allFilesExist = true;
for (const file of requiredFiles) {
  const filePath = path.join(distDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing file: ${file}`);
    allFilesExist = false;
  } else {
    console.log(`✅ Found: ${file}`);
  }
}

if (allFilesExist) {
  console.log('✅ All required files found!');
  console.log('✅ Components package is ready for publishing!');
} else {
  console.error('❌ Some files are missing');
  process.exit(1);
}
