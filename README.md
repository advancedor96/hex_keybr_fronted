# 21天英打鍛鍊武道大會

## Demo
<https://advancedor96.github.io/hex_keybr_fronted/>

### 啟動專案
```
npm run serve
```
### 畫面分3部分
1. 選擇關注自己後，自己的每日打字速度折線圖會顯示。若偵測到今天還沒練打字，會顯示提醒。選了自己後，會使用 localStorage 記錄最近一次選擇的。
2. 進步排行榜，預設顯示前10筆，但可以全部展開(共300人)
3. 所有人的統計圖表，每一天顯示有多少人填表登記。

### 使用技術：
Vuetify框架、dayjs

#### 開發筆記:
js建立陣列 with 21個0值：
`let a = Array(21).fill(0)`