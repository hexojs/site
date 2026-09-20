# 暗号通貨とブロックチェーン (Crypto & Blockchain)

日本語で暗号通貨とブロックチェーンの基礎を解説する、ノーコード生成サイトのソースコード一式です。
[Higgsfield](https://higgsfield.ai) のウェブサイトビルダーで作成し、Cloudflare Workers 上にホスティングしています。

- **公開URL**: https://crypto-blockchain.higgsfield.app
- **マーケットプレイス掲載**: https://higgsfield.ai/supercomputer/apps/0b4241b9-94ba-49c1-b97e-f41fe623a8c0/view

## このリポジトリに含まれるもの

`app/` 以下に、実際に手を入れたソースファイルのみを収録しています。

- `design-brief.md` — デザインブリーフ（コンセプト、配色、タイポグラフィ、セクション構成、CTA一覧）
- `src/routes/index.tsx` — ページ本体（ナビ、ヒーローのパララックス演出、6つのコンテンツセクション）
- `src/routes/__root.tsx` — ページの `<head>`（OGP・favicon・manifest 等）を組み立てるルートルート
- `src/styles.css` — サイト独自のデザイントークンとコンポーネントCSS（ファイル末尾に追記した部分が本サイト固有）
- `src/app-meta.json` — OGP用タイトル・説明文・画像パス
- `src/lib/site-theme.ts` / `src/scroll-scrub-scenes.ts` — 補助ファイル
- `public/site.webmanifest`, `public/favicon.ico` など — 一部のアイコン類
- `package.json`, `app.manifest.json`, `wrangler.jsonc` — ビルド設定（参考用）

## このリポジトリに含まれていないもの（意図的な除外）

このプロジェクトは Higgsfield 固有のビルド基盤（`app/packages/` 配下、約3.1MBのベンダー済みUIキット一式）に依存しており、それらは Higgsfield 側のテンプレート資産であるためここには含めていません。したがって**このリポジトリ単体ではビルド・デプロイできません**。あくまでサイトのソース内容を記録・共有するためのコピーです。

生成した画像アセット（ヒーロー画像、アイコン、OG/カバー画像など）も、転送時のデータ破損リスクを避けるため、いくつかの小さなfaviconファイルを除いてここには含めていません。実ファイルは常にライブサイトから取得できます:

| アセット | 公開URL |
|---|---|
| ロゴ（ナビ用） | https://crypto-blockchain.higgsfield.app/assets/brand/monogram-96.png |
| ヒーロー主題（切り抜き） | https://crypto-blockchain.higgsfield.app/assets/hero/hero-subject.png |
| ヒーロー背景プレート | https://crypto-blockchain.higgsfield.app/assets/hero/plate-back.jpg |
| ヒーロー中間プレート | https://crypto-blockchain.higgsfield.app/assets/hero/plate-mid.jpg |
| ブロックチェーン図解 | https://crypto-blockchain.higgsfield.app/assets/sections/diagram.jpg |
| 暗号通貨セクション画像 | https://crypto-blockchain.higgsfield.app/assets/sections/crypto.jpg |
| 装飾テクスチャ | https://crypto-blockchain.higgsfield.app/assets/texture/icon-motif.jpg |
| OG画像 | https://crypto-blockchain.higgsfield.app/assets/meta/og.png |
| マーケットプレイス用カバー | https://crypto-blockchain.higgsfield.app/assets/meta/cover.png |
| アプリアイコン各種 | https://crypto-blockchain.higgsfield.app/icons/icon-192.png ほか |

## サイトの構成

1. ヒーロー（パララックス演出、コイン/チェーンのビジュアル）
2. ブロックチェーンとは
3. 暗号通貨とは
4. 3つの原理（分散化・暗号技術・合意形成）
5. 活用事例（送金・資産・NFT・DeFi）
6. 安全に使うために
7. フッター/CTA

配色はネイビー（`#10142B`）とアンティークゴールド（`#D9B76B`）、書体は Noto Sans JP + IBM Plex Mono。
アニメーション演出（スクロールで動画が再生される「スクロールスクラブ」型）は、動画生成に有料プランが必要だったため非採用とし、代わりに静止画レイヤーによるパララックス演出を採用しています（詳細は `design-brief.md` を参照）。

## 免責事項

本サイトは教育目的の情報提供であり、投資助言ではありません。
