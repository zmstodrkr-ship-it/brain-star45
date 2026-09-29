import fs from 'node:fs';
const html=fs.readFileSync(new URL('../shorts/index.html',import.meta.url),'utf8');
for(const s of ['STAR45 Shorts','만들기','콘텐츠','분석','성과','설정','Meta AI','추가 결제','TikTok','FreeCut']) if(!html.includes(s)) throw new Error(`missing ${s}`);
if(!html.includes('@media')) throw new Error('responsive CSS missing');
if(!html.includes('localStorage')) throw new Error('settings persistence missing');
console.log('STAR45 Shorts smoke PASS');
