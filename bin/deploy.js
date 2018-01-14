const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const { execSync } = require('child_process');

const publishPath = path.resolve(__dirname, '..', 'lib');

rimraf.sync(publishPath);

execSync(`node ${path.resolve(__dirname, 'build-all.js')}`);

fs.copyFileSync(
  path.resolve(__dirname, '..', 'package.json'),
  path.resolve(publishPath, 'package.json'),
);

fs.copyFileSync(
  path.resolve(__dirname, '..', 'README.md'),
  path.resolve(publishPath, 'README.md'),
);

execSync('npm publish', {
  cwd: publishPath,
});
