import fs from 'node:fs';
const html=fs.readFileSync(new URL('../academy/index.html',import.meta.url),'utf8');
for(const s of [
  'STAR45 Revenue Academy','수익모델','국가시장','채널·배포처','연결·셋팅',
  'Google Ads 승인센터','자동화 숏츠앱 만들기','참조자료 라이브러리','수익 대시보드',
  'Google AdSense','Google AdMob','YouTube Shorts','TikTok','Instagram Reels',
  'Facebook Reels','Threads','LINE VOOM','Lemon8','NDnUEJ212ws','jqRo_giIRAY','mpMo2GIynHw',
  'PT 모드','GLOBAL GAP FINDER','localStorage'
]) if(!html.includes(s)) throw new Error('missing '+s);
if(!html.includes('@media')) throw new Error('responsive CSS missing');
console.log('STAR45 Revenue Academy smoke PASS');