# Node.jsの最新バージョンを使用
FROM node:latest

# アプリケーションのディレクトリを作成
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# モジュールをインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# ホットリロード用のポートを公開
EXPOSE 3000

# Reactアプリケーションの起動
CMD ["npm", "start"]
