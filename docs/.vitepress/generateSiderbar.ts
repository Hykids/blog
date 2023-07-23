import * as fs from 'fs';
import * as path from 'path';

function getMarkdownFiles(dir: string): string[] {
  const files = fs.readdirSync(dir);
  return files.filter(file => path.extname(file) === '.md');
}

const docsDir = path.join(__dirname, 'docs');
const mdFiles = getMarkdownFiles(docsDir);

const sidebarConfig = mdFiles.map(filename => {
  const name = path.basename(filename, '.md');
  return {
    text: name,
    link: `/docs/${name}`
  };
});

export default sidebarConfig;
