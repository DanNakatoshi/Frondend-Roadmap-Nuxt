import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("storeData", () => {
  const menu1 = ref({
    title: "はじめに",
    item: [
      {
        title: "動機の確認",
        isDone: false,
      },
      {
        title: "目標を設定",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu2 = ref({
    title: "インターネット",
    item: [
      {
        title: "インターネットの仕組み",
        isDone: false,
      },
      {
        title: "HTTPってなに？",
        isDone: false,
      },
      {
        title: "ブラウザの仕組み",
        isDone: false,
      },
      {
        title: "DNSの仕組み",
        isDone: false,
      },
      {
        title: "ドメインってなに？",
        isDone: false,
      },
      {
        title: "ホスティングとは",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu3 = ref({
    title: "HTML",
    item: [
      {
        title: "HTMLの基礎",
        isDone: false,
      },
      {
        title: "セマンティックHTMLを書く",
        isDone: false,
      },
      {
        title: "フォームとバリデーション（チェック）",
        isDone: false,
      },
      {
        title: "セマンティックHTMLを書く",
        isDone: false,
      },
      {
        title: "慣例と良い書き方を学ぶ",
        isDone: false,
      },
      {
        title: "ウェブアクセシビリティ（情報バリアフリー）",
        isDone: false,
      },
      {
        title: "SEOの基礎",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu4 = ref({
    title: "CSS",
    item: [
      {
        title: "CSSの基礎",
        isDone: false,
      },
      {
        title: "レイアウトを作る",
        isDone: false,
      },
      {
        title: "レスポンシブとメディアクエリ",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu5 = ref({
    title: "JavaScript",
    item: [
      {
        title: "基本の構文（シンタックス）",
        isDone: false,
      },
      {
        title: "DOM操作",
        isDone: false,
      },
      {
        title: "Fetch API / Ajax",
        isDone: false,
      },
      {
        title: "ES6とモジュールの使い方",
        isDone: false,
      },
      {
        title: "JSの特性（ホイスティング、スコープなど）",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu6 = ref({
    title: "バージョンコントロール",
    item: [
      {
        title: "Gitの使い方",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu7 = ref({
    title: "リポジトリのホスティング",
    item: [
      {
        title: "GitHub",
        isDone: false,
      },
      {
        title: "GitLab",
        isDone: false,
      },
      {
        title: "Bitbucket",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu8 = ref({
    title: "ウェブセキュリティ",
    item: [
      {
        title: "HTTPS",
        isDone: false,
      },
      {
        title: "コンテントセキュリティポリシー",
        isDone: false,
      },
      {
        title: "CORS",
        isDone: false,
      },
      {
        title: "OWASP",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu9 = ref({
    title: "パッケージマネジメントシステム",
    item: [
      {
        title: "npm",
        isDone: false,
      },
      {
        title: "yarn",
        isDone: false,
      },
      {
        title: "pnpm",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu10 = ref({
    title: "CSSプリプロセッサー",
    item: [
      {
        title: "Sass",
        isDone: false,
      },
      {
        title: "PostCSS",
        isDone: false,
      },
      {
        title: "おまけ：BEM（CSSの構造）",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu11 = ref({
    title: "ビルドツール",
    item: [
      {
        title: "Linterとフォーマッター",
        isDone: false,
      },
      {
        title: "タスクランナー",
        isDone: false,
      },
      {
        title: "モジュールバンドラー",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu12 = ref({
    title: "フレームワーク",
    item: [
      {
        title: "React",
        isDone: false,
      },
      {
        title: "Angular",
        isDone: false,
      },
      {
        title: "Vue.js",
        isDone: false,
      },
      {
        title: "Svelte",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu13 = ref({
    title: "モダンCSSとCSSフレームワーク",
    item: [
      {
        title: "Styled Components",
        isDone: false,
      },
      {
        title: "CSSモジュール",
        isDone: false,
      },
      {
        title: "Bootstrap",
        isDone: false,
      },
      {
        title: "Tailwind",
        isDone: false,
      },
      {
        title: "Chakra UI",
        isDone: false,
      },
      {
        title: "Material UI",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu14 = ref({
    title: "テスティング",
    item: [
      {
        title: "Jest",
        isDone: false,
      },
      {
        title: "Reactのテスティングライブラリ",
        isDone: false,
      },
      {
        title: "Cypress",
        isDone: false,
      },
      {
        title: "Playwright",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu15 = ref({
    title: "ユーザー認証",
    item: [
      {
        title: "Basic認証",
        isDone: false,
      },
      {
        title: "セッション認証",
        isDone: false,
      },
      {
        title: "トークン認証",
        isDone: false,
      },
      {
        title: "JWT認証",
        isDone: false,
      },
      {
        title: "OAuth",
        isDone: false,
      },
      {
        title: "SSO",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu16 = ref({
    title: "ウェブコンポーネンツ",
    item: [
      {
        title: "HTMLテンプレート",
        isDone: false,
      },
      {
        title: "カスタムエレメント",
        isDone: false,
      },
      {
        title: "シャドウDOM",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu17 = ref({
    title: "タイプチェック",
    item: [
      {
        title: "TypeScript",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu18 = ref({
    title: "プログレッシブウェブアプリ",
    item: [
      {
        title: "ストレージ",
        isDone: false,
      },
      {
        title: "ウェブソケット",
        isDone: false,
      },
      {
        title: "Server Sent Events(SSE)",
        isDone: false,
      },
      {
        title: "PRPL Pattern",
        isDone: false,
      },
      {
        title: "RAIL Model",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu19 = ref({
    title: "サーバーサイドレンダリング",
    item: [
      {
        title: "Next.js(React)",
        isDone: false,
      },
      {
        title: "Remix(React)",
        isDone: false,
      },
      {
        title: "Universal(Angular)",
        isDone: false,
      },
      {
        title: "Vue.js(Nuxt.js)",
        isDone: false,
      },
      {
        title: "Svelte Kit(Svelte)",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu20 = ref({
    title: "静的サイトジェネレーター",
    item: [
      {
        title: "Eleventy",
        isDone: false,
      },
      {
        title: "Astro",
        isDone: false,
      },
      {
        title: "Next.js",
        isDone: false,
      },
      {
        title: "Gatsby",
        isDone: false,
      },
      {
        title: "Vuepress",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu21 = ref({
    title: "GraphQL",
    item: [
      {
        title: "Apollo",
        isDone: false,
      },
      {
        title: "Relay Modern",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu22 = ref({
    title: "モバイルアプリ",
    item: [
      {
        title: "React Native",
        isDone: false,
      },
      {
        title: "Flutter",
        isDone: false,
      },
      {
        title: "Ionic",
        isDone: false,
      },
      {
        title: "NativeScript",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu23 = ref({
    title: "デスクトップアプリ",
    item: [
      {
        title: "Electron",
        isDone: false,
      },
      {
        title: "Tauri",
        isDone: false,
      },
      {
        title: "Flutter",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu24 = ref({
    title: "ボーナース",
    item: [
      {
        title: "UI / UXの知識",
        isDone: false,
      },
      {
        title: "デザインシステム",
        isDone: false,
      },
      {
        title: "3D、アニメーション",
        isDone: false,
      },
      {
        title: "webアセンブリ",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  const menu25 = ref({
    title: "続く",
    item: [
      {
        title: "新しいテクノロジーを学ぶ",
        isDone: false,
      },
      {
        title: "JavaScriptをマスターする",
        isDone: false,
      },
      {
        title: "ウェブデザインをマスターする",
        isDone: false,
      },
      {
        title: "バックエンドを学ぶ",
        isDone: false,
      },
    ],
    isAllDone: false,
  });

  return {
    menu1,
    menu2,
    menu3,
    menu4,
    menu5,
    menu6,
    menu7,
    menu8,
    menu9,
    menu10,
    menu11,
    menu12,
    menu13,
    menu14,
    menu15,
    menu16,
    menu17,
    menu18,
    menu19,
    menu20,
    menu21,
    menu22,
    menu23,
    menu24,
    menu25,
  };
});
