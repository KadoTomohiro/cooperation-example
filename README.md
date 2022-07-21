# CooperationExample

別システムからの情報連携検証

## 起動
```
npm run start
```

```
npm run serve:api
```

```
npm run serve:sender
```

## 手順

### 自システム内での操作

1. [http://localhost:4200](http://localhost:4200)にアクセス
2. 「新規契約登録」クリック
3. フォームを入力して「登録」

### 他システムからの操作

1. [http://localhost:3000](http://localhost:3000)にアクセス
2. 「代理店名」を入力
3. 「Submit」クリック
4. 新規ウインドウでフォームを入力して「登録」

