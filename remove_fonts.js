const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!dirFile.includes('node_modules') && !dirFile.includes('.next') && !dirFile.includes('.git')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.css') || dirFile.endsWith('.js') || dirFile.endsWith('.jsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const dirs = ['./app', './components'];
let files = [];
dirs.forEach(d => {
  if (fs.existsSync(d)) files = files.concat(walkSync(d));
});

let count = 0;
files.forEach(file => {
  if (file.includes('Header') || file.includes('Footer') || file.includes('globals.css')) return;

  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/.*font-family:\s*var\(--font-.*\).*\n?/g, '');
  newContent = newContent.replace(/fontFamily:\s*['"`]var\(--font-.*['"`],?/g, '');

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    count++;
    console.log(`Updated ${file}`);
  }
});

console.log(`Finished updating ${count} files.`);
