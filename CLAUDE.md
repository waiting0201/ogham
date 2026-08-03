# Ogham 歐甘樹文 - Angular 21 Project

## Project Overview
歐甘樹文占卜抽卡應用，從 ASP.NET MVC 5 遷移至 Angular 21。
使用者點擊「抽取」後隨機顯示 21 張歐甘卡片中的一張。

## Tech Stack
- Angular 21 (standalone components, CSR only, no SSR)
- Bootstrap 5 (CSS only, no JS bundle, no jQuery)
- TypeScript ~5.9

## Project Structure
```
public/img/          # 靜態圖片 (01.PNG-21.PNG, logo.jpg, logo_light.PNG)
src/
  index.html         # html.h-100 + body dark theme classes
  styles.css         # 全域樣式 (cover.css + Site.css 合併)
  app/
    app.ts           # Root component (RouterOutlet)
    app.html         # <main> wrapper + <router-outlet>
    app.css          # :host flex 置中佈局
    app.routes.ts    # / → Home, /result → Result
    home/            # 首頁：logo + 抽取按鈕
    result/          # 結果頁：隨機卡片 + 重新抽取按鈕
```

## Commands
- `ng serve` — 開發伺服器 (http://localhost:4200)
- `ng build` — 產出至 dist/ogham
- `npm run preview` — 建置後用 wrangler dev 在本機模擬 Cloudflare 環境
- `npm run deploy` — 建置後部署到 Cloudflare Workers

## Deployment
部署至 **Cloudflare Workers（Static Assets）**，設定檔為 wrangler.jsonc。
- 純靜態部署：沒有 `main` script，全部由 Cloudflare Asset Worker 直接服務
- `assets.directory` = `dist/ogham/browser`（Angular application builder 的輸出）
- `not_found_handling: "single-page-application"` — 未命中的路徑回傳 index.html，支撐 Angular client-side routing
- CI：.github/workflows/deploy-cloudflare.yml，push 到 master 自動建置並用 cloudflare/wrangler-action@v4 部署
- 需要的 GitHub secrets：`CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ACCOUNT_ID`

## Conventions
- 使用 standalone components，不使用 NgModules
- 全域樣式放 src/styles.css，元件樣式用各自的 .css
- Bootstrap 透過 angular.json styles 陣列引入，不用 CDN
- 靜態資源放 public/ 目錄，路徑直接以根目錄引用 (如 `img/logo.jpg`)
- UI 文字使用繁體中文
- 深色主題：body 使用 Bootstrap `text-bg-dark` + 自訂 text-shadow/box-shadow
- RWD 置中佈局：:host flex 置中 + cover-container 限制最大寬度 42em

## Reference
- 原始 ASP.NET MVC 5 專案：D:\websystems\og
- 線上參考：https://ogham.azurewebsites.net/
