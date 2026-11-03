import fs from 'node:fs';
import path from 'node:path';

fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('index.html', path.join('dist', 'index.html'));
fs.cpSync('src', path.join('dist', 'src'), { recursive: true });
if (fs.existsSync('public')) {
  for (const entry of fs.readdirSync('public', { withFileTypes: true })) {
    const source = path.join('public', entry.name);
    const destination = path.join('dist', entry.name);
    fs.cpSync(source, destination, { recursive: true });
  }
}
console.log('Production files generated in dist/');