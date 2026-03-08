const fs = require('fs');
const path = require('path');

// Copy wricom-logo.png as favicon.ico fallback
// This is a simple approach - for production you might want a proper .ico file
const logoPath = path.join(__dirname, 'public', 'wricom-logo.png');
const faviconPath = path.join(__dirname, 'public', 'favicon.ico');

if (fs.existsSync(logoPath)) {
  fs.copyFileSync(logoPath, faviconPath);
  console.log('✅ favicon.ico generated from wricom-logo.png');
} else {
  console.error('❌ wricom-logo.png not found');
}
