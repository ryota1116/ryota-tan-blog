---
title: Vue
author: 船先 亮汰@りょうたたん
date: 2019-06-04
hero: ./images/vue.jpg
excerpt: With the growing community interest in Gatsby, we hope to create more resources that make it easier for anyone to grasp the power of this incredible tool.
---

### バインディングとは


- v-on ディレクティブ

```js
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
  
<div id="app">
  <span>{{ count }}</span>
  <button @click="increment">+</button>
</div>
  
<script>
  new Vue({
    el: '#app',
    	data: {
          count: 0
        },
    	methods: {
          increment: function() {
            this.count++
          }
        }
  })
</script>
```

#### v-model ディレクティブ
双方向バインディングができる
ユーザーが入力したプレビュー側の内容が、モジュールの値を変更できる

v-modelは、v-bindとv-onを一つの処理にまとめたもの
※初期設定はコンポーネント側で行う

