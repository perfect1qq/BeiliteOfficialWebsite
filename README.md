# Wuhan Beilite Official Clone

React + Vite + i18n rebuild of the BLT corporate website style.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The project uses no Tailwind. All styles are in `src/styles/global.css`, with bilingual content in `src/locales`.


## 留言接口

留言表单默认会向 `VITE_LEAD_API_URL` 发送 `POST` 请求。未配置时，会先暂存到本地，便于你后续接入后台通知接口。
