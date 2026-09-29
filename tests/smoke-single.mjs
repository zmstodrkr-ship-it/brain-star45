import fs from 'node:fs';
const html=fs.readFileSync(new URL('../shorts/index.html',import.meta.url),'utf8');
for(const s of [
  'STAR45 Shorts','만들기','콘텐츠','편집','분석','성과','설정',
  'Meta AI','추가결제 0원 우선','TikTok','FreeCut / WebAV',
  'FIRST RUN SETUP','s45setupDone','s45projects','FORMULA KNOWLEDGE',
  '실제 성과만 학습','가짜 수치 미표시','무료 로컬 편집 도우미',
  '프로젝트 JSON 내보내기','JSON 가져오기','applyLocalEdit','inferDuration','WAITING_RENDER_ADAPTER'
]) if(!html.includes(s)) throw new Error(`missing ${s}`);
if(!html.includes('@media')) throw new Error('responsive CSS missing');
if(!html.includes('localStorage')) throw new Error('settings persistence missing');
if(!html.includes('makeProject')) throw new Error('project creation missing');
if(!html.includes('renderEditor')) throw new Error('editor workflow missing');
if(!html.includes('실제 인증·권한 검사에 성공한 기능만')) throw new Error('verified connection wording missing');
console.log('STAR45 Shorts v0.3 smoke PASS');
