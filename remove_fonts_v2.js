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
    // Exclude these files
    if (file.includes('Header') || file.includes('Footer') || file.includes('globals.css')) return;
    // Also exclude app/page.module.css since it was successfully modified by multi_replace
    if (file === 'app/page.module.css') return;

    let content = fs.readFileSync(file, 'utf8');
    const originalLength = content.length;

    // Replace line containing `font-family: var(--font-...`
    // We use [\s\S] or simple multi-line matching
    let lines = content.split('\n');
    let newLines = lines.filter(line => !line.includes('var(--font-'));

    let newContent = newLines.join('\n');

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        count++;
        console.log(`Updated ${file}: removed ${lines.length - newLines.length} lines`);
    }
});

console.log(`Finished updating ${count} files.`);
