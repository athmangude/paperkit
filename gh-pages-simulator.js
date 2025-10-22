const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8080;
const DIST_DIR = path.join(__dirname, 'dist');

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

function serveFile(res, filePath, statusCode = 200) {
  const ext = path.extname(filePath);
  const contentType = getMimeType(filePath);
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('File not found');
      return;
    }
    
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.end(data);
  });
}

function handleRequest(req, res) {
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;
  
  // Remove leading slash
  if (pathname.startsWith('/')) {
    pathname = pathname.substring(1);
  }
  
  // Handle base path /protokit-ui/
  if (pathname.startsWith('protokit-ui/')) {
    pathname = pathname.substring('protokit-ui/'.length);
  }
  
  // If pathname is empty, serve index.html
  if (pathname === '' || pathname === '/') {
    const indexPath = path.join(DIST_DIR, 'index.html');
    serveFile(res, indexPath);
    return;
  }
  
  // Try to serve the requested file
  const requestedFile = path.join(DIST_DIR, pathname);
  const requestedFileWithHtml = path.join(DIST_DIR, pathname + '.html');
  
  // Check if file exists
  fs.access(requestedFile, fs.constants.F_OK, (err) => {
    if (!err) {
      // File exists, serve it
      serveFile(res, requestedFile);
    } else {
      // File doesn't exist, check if it's a directory
      fs.access(requestedFileWithHtml, fs.constants.F_OK, (err2) => {
        if (!err2) {
          // Directory with index.html exists
          serveFile(res, requestedFileWithHtml);
        } else {
          // File doesn't exist, serve 404.html (GitHub Pages behavior)
          const notFoundFile = path.join(DIST_DIR, '404.html');
          fs.access(notFoundFile, fs.constants.F_OK, (err3) => {
            if (!err3) {
              serveFile(res, notFoundFile, 404);
            } else {
              res.writeHead(404, { 'Content-Type': 'text/html' });
              res.end('404 Not Found');
            }
          });
        }
      });
    }
  });
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`GitHub Pages Simulator running at http://localhost:${PORT}/protokit-ui/`);
  console.log('This mimics GitHub Pages behavior for testing 404.html');
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
