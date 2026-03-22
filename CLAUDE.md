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
