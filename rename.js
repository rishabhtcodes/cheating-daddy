const fs = require('fs');
const path = require('path');

const replacements = [
    { from: /Devil AI/g, to: 'Cheating Daddy' },
    { from: /DevilAI/g, to: 'CheatingDaddy' },
    { from: /devilAI/g, to: 'cheatingDaddy' },
    { from: /devilai(?!\.com)/gi, to: 'cheatingdaddy' }, 
    { from: /devil-ai/gi, to: 'cheating-daddy' },
    { from: /devil ai/gi, to: 'cheating daddy' }
];

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        let fullPath = path.join(dir, file);
        
        // Exclusions
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('dist') || file === 'rename.js') {
            continue;
        }

        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else {
            const ext = path.extname(file);
            if (['.js', '.html', '.json', '.md', '.css'].includes(ext)) {
                let content = fs.readFileSync(fullPath, 'utf8');
                let newContent = content;
                
                for (const r of replacements) {
                    newContent = newContent.replace(r.from, r.to);
                }
                
                if (content !== newContent) {
                    fs.writeFileSync(fullPath, newContent, 'utf8');
                    console.log('Updated content in:', fullPath);
                }
            }
        }
        
        // Rename file if it contains DevilAI
        if (file.includes('DevilAI')) {
            const newFile = file.replace(/DevilAI/g, 'CheatingDaddy');
            const newFullPath = path.join(dir, newFile);
            fs.renameSync(fullPath, newFullPath);
            console.log('Renamed file:', fullPath, '->', newFullPath);
        }
    }
}

replaceInDir(__dirname);
