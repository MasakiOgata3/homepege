const fs = require('fs');

// .envファイルから手動でAPIキーを読み込み
const envContent = fs.readFileSync('.env', 'utf8');
const apiKeyMatch = envContent.match(/OPENAI_API_KEY=(.+)/);
const apiKey = apiKeyMatch ? apiKeyMatch[1].trim() : null;

if (!apiKey) {
  console.error('APIキーが見つかりません');
  process.exit(1);
}

const prompt = 'Clean, simple black and white illustration showing collaboration between a male person and AI. A man working at a computer with AI symbols (gears, circuits, or abstract AI representations) around him, suggesting partnership and cooperation. Minimalist line art style similar to modern tech illustrations. Black lines on white background only, no colors, no shading, very clean and professional.';

fetch('https://api.openai.com/v1/images/generations', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + apiKey,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'dall-e-3',
    prompt: prompt,
    n: 1,
    size: '1792x1024',
    quality: 'standard'
  })
})
.then(response => response.json())
.then(data => {
  if (data.error) {
    console.error('エラー:', data.error);
    return Promise.reject(data.error);
  }
  
  const imageUrl = data.data[0].url;
  console.log('画像生成成功:', imageUrl);
  
  // 画像をダウンロード
  return fetch(imageUrl)
    .then(response => response.arrayBuffer())
    .then(buffer => {
      const filename = 'ai-collaboration.png';
      const filepath = './generated-images/' + filename;
      
      fs.writeFileSync(filepath, Buffer.from(buffer));
      console.log('画像保存完了:', filepath);
      
      // 情報ファイルを更新
      let imagesInfo = [];
      try {
        imagesInfo = JSON.parse(fs.readFileSync('./generated-images-info.json', 'utf8'));
      } catch (e) {
        console.log('新しい情報ファイルを作成します');
      }
      
      // 新しい画像情報を追加（IDを8に設定）
      const newImageInfo = {
        id: 8,
        url: imageUrl,
        localPath: filepath,
        filename: filename
      };
      
      // 配列が5個を超える場合は古いものを削除
      if (imagesInfo.length >= 5) {
        const oldImage = imagesInfo.shift();
        try {
          fs.unlinkSync(oldImage.localPath);
          console.log('古い画像を削除:', oldImage.filename);
        } catch (e) {
          console.log('古い画像の削除に失敗:', e.message);
        }
      }
      
      imagesInfo.push(newImageInfo);
      fs.writeFileSync('./generated-images-info.json', JSON.stringify(imagesInfo, null, 2));
      console.log('画像情報ファイル更新完了');
    });
})
.catch(error => {
  console.error('エラーが発生しました:', error);
});