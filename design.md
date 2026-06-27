# SEA旅行候補LP HTML設計doc

## ファイル構成

```
html/
├── design.md                        ← この設計doc
├── index.html                       ← 候補一覧トップページ
├── vietnam-danang-hoian.html        ← ベトナム / ダナン・ホイアン（移植済み→リネーム）
├── thailand-bangkok-ayutthaya.html  ← タイ / バンコク・アユタヤ
├── cambodia-siemreap.html           ← カンボジア / シェムリアップ・アンコールワット
├── vietnam-hochiminh.html           ← ベトナム / ホーチミン・メコンデルタ
├── indonesia-lombok.html            ← インドネシア / ロンボク島・ギリ島
└── indonesia-bali.html              ← インドネシア / バリ島
```

## GitHub Pages URL一覧

| ページ | URL |
|---|---|
| トップ（一覧） | https://gtellmeagain-png.github.io/sea-travel/ |
| ベトナム / ダナン・ホイアン | https://gtellmeagain-png.github.io/sea-travel/vietnam-danang-hoian.html |
| タイ / バンコク・アユタヤ | https://gtellmeagain-png.github.io/sea-travel/thailand-bangkok-ayutthaya.html |
| カンボジア / シェムリアップ | https://gtellmeagain-png.github.io/sea-travel/cambodia-siemreap.html |
| ベトナム / ホーチミン | https://gtellmeagain-png.github.io/sea-travel/vietnam-hochiminh.html |
| インドネシア / ロンボク島 | https://gtellmeagain-png.github.io/sea-travel/indonesia-lombok.html |
| インドネシア / バリ島 | https://gtellmeagain-png.github.io/sea-travel/indonesia-bali.html |

---

## デザインルール

- **国旗絵文字（🇻🇳 🇰🇭 など）は使わない** — ヒーロータイトル・ページ`<title>`ともに不使用
- ページタイトル表記例：「ベトナム / ダナン・ホイアン」
- セクション見出しの絵文字（🏖️ 🛕 🏄 など）はそのまま使用してよい
- 読みやすさ重視・華美にしない
- スマホ対応（レスポンシブ）必須

---

## 共通CSS

全LPページに以下のstyleタグをそのままコピーして使う。
ヒーローの `background-image` URL だけ各ページで差し替える。

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif; background: #f9f9f8; color: #1a1a1a; line-height: 1.7; font-size: 15px; }

/* ヒーロー */
.hero {
  background-image: url('XXX_HERO_IMAGE_URL_XXX');
  background-size: cover; background-position: center;
  height: 320px; display: flex; align-items: flex-end;
  padding: 24px 32px;
}
.hero-title {
  background: rgba(0,0,0,0.55); color: #fff;
  padding: 12px 20px; border-radius: 8px;
  font-size: 24px; font-weight: bold;
}

/* レイアウト */
.container { max-width: 860px; margin: 0 auto; padding: 32px 20px; }

/* 目次 */
.toc { background: #eef4ff; border-left: 4px solid #4a90d9; padding: 16px 20px; border-radius: 6px; margin-bottom: 32px; }
.toc h3 { font-size: 14px; margin-bottom: 8px; color: #4a90d9; }
.toc ol { padding-left: 20px; }
.toc li { margin: 4px 0; }
.toc a { color: #4a90d9; text-decoration: none; font-size: 14px; }
.toc a:hover { text-decoration: underline; }

/* キャッチコピー */
.catch { background: #fff; border-left: 4px solid #e8a000; padding: 14px 18px; border-radius: 6px; margin-bottom: 16px; font-size: 15px; }
.catch p { margin: 4px 0; }

/* 基本情報バッジ */
.badges { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
.badge { background: #fff; border: 1px solid #ddd; padding: 6px 12px; border-radius: 20px; font-size: 13px; font-weight: bold; }

/* セクション */
section { margin-bottom: 48px; }
h2 { font-size: 20px; font-weight: bold; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #e0e0e0; }

/* メリデメ */
.merit-demerit { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media (max-width: 600px) { .merit-demerit { grid-template-columns: 1fr; } }
.merit, .demerit { background: #fff; border-radius: 8px; padding: 16px 20px; border: 1px solid #e0e0e0; }
.merit h3 { color: #2e7d32; margin-bottom: 8px; }
.demerit h3 { color: #c62828; margin-bottom: 8px; }
.merit ul, .demerit ul { padding-left: 18px; }
.merit li, .demerit li { margin: 4px 0; font-size: 14px; }

/* 位置関係 */
.location-box { background: #fff8e1; border: 1px solid #ffe082; border-radius: 8px; padding: 16px 20px; font-size: 14px; line-height: 2; }
.location-box a { color: #e67e00; }

/* セクション画像（幅広） */
.section-img { width: 100%; max-height: 320px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; }

/* 箇条書き */
.text-list { padding-left: 20px; margin: 8px 0 12px; }
.text-list li { margin: 6px 0; }

/* 3カラムタイル */
.tiles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 16px; }
@media (max-width: 640px) { .tiles { grid-template-columns: 1fr 1fr; } }
@media (max-width: 400px) { .tiles { grid-template-columns: 1fr; } }

.tile { background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0; }
.tile img { width: 100%; height: 140px; object-fit: cover; display: block; }
.tile-body { padding: 10px 12px; }
.tile-body strong { display: block; font-size: 13px; margin-bottom: 4px; }
.tile-body p { font-size: 12px; color: #555; margin-bottom: 6px; line-height: 1.5; }
.tile-body a { font-size: 12px; color: #4a90d9; text-decoration: none; }
.tile-body a:hover { text-decoration: underline; }

/* 2カラムタイル */
.tiles-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 500px) { .tiles-2 { grid-template-columns: 1fr; } }

/* 食事リスト */
.food-list { list-style: none; padding: 0; }
.food-list li { background: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 10px 14px; margin-bottom: 8px; font-size: 14px; }
.food-list a { color: #4a90d9; font-size: 12px; margin-left: 8px; }

/* 宿泊 */
.stay-option { background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 14px 18px; margin-bottom: 12px; }
.stay-option strong { font-size: 15px; }
.stay-option .price { color: #888; font-size: 13px; margin-top: 4px; }
.stay-img { width: 100%; max-height: 220px; object-fit: cover; border-radius: 6px; margin-top: 10px; }

/* 区切り線 */
hr { border: none; border-top: 1px solid #e0e0e0; margin: 32px 0; }

/* 画像を見る → */
.img-link { font-size: 12px; color: #4a90d9; text-decoration: none; }
.img-link:hover { text-decoration: underline; }
```

---

## セクション構成（全ページ共通）

| # | セクション | HTMLクラス/要素 | 備考 |
|---|---|---|---|
| 1 | ヒーロー画像 | `.hero` + `.hero-title` | カバー画像URL差し替え |
| 2 | キャッチコピー | `.catch` | 各都市を1〜2行で |
| 3 | 基本情報バッジ | `.badges` + `.badge` | アクセス/泊数/気候/費用感 |
| 4 | 目次 | `.toc` | `<ol>`でセクションリンク |
| 5 | メリット・デメリット | `.merit-demerit` | 2カラム |
| 6 | 位置関係 | `.location-box` | Google Mapsリンク付き |
| 7 | エリア紹介 | `section-img` + `.text-list` | 画像＋箇条書き |
| 8 | 観光スポット/見どころ | `.tiles`（3カラム） | 複数行OK |
| 9 | アクティビティ | `.tiles`（3カラム） | |
| 10 | 夜の過ごし方 | `.tiles`（3カラム） | |
| 11 | カフェ・グルメスポット | `.tiles`（3カラム） | |
| 12 | 食事 | `.food-list` | 箇条書き＋画像リンク |
| 13 | 宿泊のおすすめ | `.stay-option` | 写真付き |
| 14 | その他エリア紹介 | `section-img` + `.text-list` | 任意（ホイアン旧市街など） |
| 15 | ビーチ | `.tiles-2`（2カラム） | ビーチなし地域は省略 |

---

## HTMLテンプレート（雛形）

```html
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>XXX_COUNTRY / XXX_REGION</title>
<style>
/* ↑ 共通CSSをそのままここに貼る。.heroのbackground-imageだけ差し替え */
</style>
</head>
<body>

<div class="hero">
  <div class="hero-title">XXX_COUNTRY / XXX_REGION</div>
</div>

<div class="container">

  <div class="catch">
    <p><strong>XXX_CITY1</strong> → XXX_CATCH1</p>
    <p><strong>XXX_CITY2</strong> → XXX_CATCH2</p>
  </div>

  <div class="badges">
    <span class="badge">✈️ XXX_ACCESS</span>
    <span class="badge">🌙 XXX_NIGHTS</span>
    <span class="badge">☀️ XXX_CLIMATE</span>
    <span class="badge">💰 XXX_BUDGET</span>
  </div>

  <div class="toc">
    <h3>📌 目次</h3>
    <ol>
      <li><a href="#merit">メリット・デメリット</a></li>
      <li><a href="#location">位置関係</a></li>
      <!-- 各ページのセクションに合わせて追加 -->
    </ol>
  </div>

  <section id="merit">
    <h2>✅ メリット・デメリット</h2>
    <div class="merit-demerit">
      <div class="merit">
        <h3>👍 メリット</h3>
        <ul>
          <li>XXX</li>
        </ul>
      </div>
      <div class="demerit">
        <h3>👎 デメリット</h3>
        <ul>
          <li>XXX</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="location">
    <h2>🗺️ 位置関係</h2>
    <div class="location-box">
      XXX_LOCATION_TEXT<br>
      <a href="XXX_GOOGLE_MAPS_URL" target="_blank">🗺️ Google Maps で位置を確認する →</a>
    </div>
  </section>

  <!-- エリア紹介 -->
  <section id="XXX_AREA">
    <h2>XXX_AREA_TITLE</h2>
    <img class="section-img" src="XXX_IMG_URL" alt="XXX">
    <ul class="text-list">
      <li>XXX</li>
    </ul>
    <a class="img-link" href="XXX_SEARCH_URL" target="_blank">画像を見る →</a>
  </section>

  <!-- 観光スポット -->
  <section id="spots">
    <h2>🛕 観光スポット / 見どころ</h2>
    <div class="tiles">
      <div class="tile">
        <img src="XXX" alt="XXX">
        <div class="tile-body">
          <strong>XXX_NAME</strong>
          <p>XXX_DESC</p>
          <a class="img-link" href="XXX_SEARCH" target="_blank">画像を見る →</a>
        </div>
      </div>
      <!-- 3枚1行。行数は自由 -->
    </div>
  </section>

  <!-- アクティビティ・夜・カフェ → 同じ .tiles 構造 -->

  <section id="food">
    <h2>🍽️ 食事</h2>
    <ul class="food-list">
      <li>XXX_EMOJI <strong>XXX_NAME</strong> — XXX_DESC <a class="img-link" href="XXX" target="_blank">画像を見る →</a></li>
    </ul>
  </section>

  <section id="stay">
    <h2>🏨 宿泊のおすすめ</h2>
    <div class="stay-option">
      <strong>XXX_TYPE → XXX_AREA</strong>
      <p style="font-size:13px; margin-top:4px;">XXX_DESC</p>
      <img class="stay-img" src="XXX_IMG" alt="XXX">
      <p class="price">相場：XXX</p>
    </div>
  </section>

  <!-- ビーチあり地域のみ -->
  <section id="beach">
    <h2>🏖️ ビーチ</h2>
    <div class="tiles-2">
      <div class="tile">
        <img src="XXX" alt="XXX">
        <div class="tile-body">
          <strong>XXX</strong>
          <p>XXX</p>
          <a class="img-link" href="XXX" target="_blank">画像を見る →</a>
        </div>
      </div>
    </div>
  </section>

</div>
</body>
</html>
```

---

## 各ページ移植チェックリスト

LP1ページを移植するたびに以下を確認：

- [ ] Notionページをfetchして全セクション内容を取得
- [ ] ヒーロー画像（カバー）URLを確認
- [ ] テンプレートをコピーして内容を流し込む
- [ ] 国旗絵文字（🇻🇳 など）が入っていないか確認
- [ ] タイル画像が3列になっているか確認（4列にならないよう注意）
- [ ] `<title>` タグに国旗絵文字が入っていないか確認
- [ ] index.htmlの候補カードにリンクを追加
- [ ] GitHubにアップロード
- [ ] 公開URLで表示確認

---

## index.html 構成

候補地を1枚ずつカードで並べる。カード内容：
- 国名 / 地域名（大きめテキスト）
- 気候（8月）
- アクセス（日本からの所要時間）
- 費用感
- 「詳細を見る →」ボタン（各LPへのリンク）

カードはcandidates.mdの情報をベースに記載。
