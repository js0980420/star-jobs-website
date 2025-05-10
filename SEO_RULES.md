# 星啟點國際娛樂網站 SEO 通用規則

## 1. 基本 Meta 標籤
- `<title>`：每頁唯一且具描述性
- `<meta name="description">`：每頁唯一，簡明描述頁面內容，建議 120-160 字
- `<meta name="viewport" content="width=device-width, initial-scale=1">`：響應式設計必備
- `<meta name="robots" content="index, follow">`：允許搜尋引擎索引
- `<meta name="author" content="星啟點國際娛樂">`：標註作者

## 2. Open Graph（og）標籤（社群分享）
- `<meta property="og:title">`：分享標題
- `<meta property="og:description">`：分享描述
- `<meta property="og:image">`：分享圖片（建議1200x630px，jpg/png/webp）
- `<meta property="og:url">`：頁面網址
- `<meta property="og:type" content="website">`：網站類型
- `<meta property="og:site_name">`：網站名稱

## 3. Twitter Card 標籤
- `<meta name="twitter:card" content="summary_large_image">`
- `<meta name="twitter:title">`
- `<meta name="twitter:description">`
- `<meta name="twitter:image">`

## 4. Canonical 標籤
- `<link rel="canonical" href="https://你的網站/">`：避免重複內容

## 5. 結構化資料（schema.org）
- 使用 Organization 與 Website 型別，標註 name、url、logo、sameAs（社群連結）、contactPoint（聯絡資訊）
- 範例：
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://你的網站/",
  "name": "星啟點國際娛樂",
  "publisher": {
    "@type": "Organization",
    "name": "星啟點國際娛樂",
    "logo": {
      "@type": "ImageObject",
      "url": "https://你的網站/logo.png"
    }
  }
}
```

## 6. Logo 顯示於 Google 搜尋結果
- logo 圖片需公開、正方形（建議112x112px以上）、透明背景
- 於 Google Search Console 設定品牌標誌
- 結構化資料需正確標註 logo

## 7. robots.txt
- 允許 Googlebot 抓取：
```
User-agent: *
Allow: /
```

## 8. sitemap.xml
- 於網站根目錄提供 sitemap.xml，並提交至 Google Search Console

## 9. 其他建議
- 圖片加上 lazyload、alt 屬性
- 內容定期更新，保持高品質
- 網站速度優化（壓縮圖片、精簡 JS/CSS）
- 行動裝置友善設計

---
如需範例程式碼或進階設定，請參考官方文件或聯絡網站維護人員。 


## 10. 不建議
- `<meta name="keywords">` 標籤對現代 SEO 幾乎沒有幫助，Google 已不再參考 meta keywords，建議不必特別設定。
