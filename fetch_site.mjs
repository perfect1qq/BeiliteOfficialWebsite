import http from 'http';
import fs from 'fs';

http.get('http://www.bltvip.com/', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => {
    // 抓取所有的 CSS 链接
    const cssFileMatch = data.match(/href="([^"]+\.css)"/g);
    console.log('Found CSS links:', cssFileMatch);
    if(cssFileMatch) {
      cssFileMatch.forEach(linkStr => {
        let link = linkStr.split('"')[1];
        if(!link.startsWith('http')) {
          link = 'http://www.bltvip.com/' + link.replace(/^\//, '');
        }
        console.log('Downloading', link);
        http.get(link, (cRes) => {
          let cssContent = '';
          cRes.on('data', c => cssContent += c);
          cRes.on('end', () => {
             const filename = link.split('/').pop().split('?')[0];
             fs.writeFileSync('temp_' + filename, cssContent);
             console.log('Saved', filename);
          });
        });
      });
    }
  });
});
