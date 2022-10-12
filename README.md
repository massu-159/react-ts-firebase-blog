# react-ts-firebase-blog
アウトプットとして、reactを使ったブログを作成。

TypeScriptによる型定義。

(firestore、Auth)firebaseを利用。

urlはこちら
https://github.com/massu-159/react-ts-firebase-blog


## 目次
1. 環境構築
2. アプリケーションの仕様
3. 環境変数

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install

または

yarn
```

### 1-2. アプリケーション実行

```
npm run dev

または

yarn dev
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- ブログ記事
  - ブログ記事一覧表示
  - ブログ記事作成処理
  - ブログ記事削除処理
- Google認証(firebase)
  - ログイン(ログアウト)

### 2-2. 構成技術
- react : "^18.2.0"
- react-dom : "^18.2.0"
- react-router-dom": "^6.4.1"
- firebase : "^9.10.0"
- typescript : "^4.8.4"

## 3. 環境変数
.env.localファイルに環境変数を設定。
```
REACT_APP_apikey=xxxxxxxxxxxx
REACT_APP_authDomain=xxxxxxxxxxxx
REACT_APP_projectId=xxxxxxxxxxxx
REACT_APP_strageBucket=xxxxxxxxxxxx
REACT_APP_messageingSenderId=xxxxxxxxxxxx
REACT_APP_appId=xxxxxxxxxxxx
```