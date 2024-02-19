const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, '..', 'docs');
const cnameFile = path.join(buildDir, 'CNAME');

fs.copyFileSync(
  path.join(buildDir, 'index.html'),
  path.join(buildDir, '404.html')
);

if (!fs.existsSync(cnameFile)) {
  fs.writeFileSync(cnameFile, 'www.beautify-json.com');
}
