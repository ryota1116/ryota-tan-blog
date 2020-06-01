---
title: 「アタシのことスキ？」-「はい」と答えるまで永遠に質問を繰り返す恐怖のredoメソッド
author: 船先 亮汰@りょうたたん
date: 2019-04-30
hero: ./images/hero.jpg
excerpt: With the growing community interest in Gatsby, we hope to create more resources that make it easier for anyone to grasp the power of this incredible tool.
---

個人的に気に入ったRubyのメソッドを見つけた。

それは`redo`メソッドというもの。

これは繰り返し処理を再度やり直したいときに使えるもので、今行っている繰り返し処理の最初に戻れるとのこと。

言葉だけだと分かりにくいので具体例を説明すると
redoを使うと「あなたは私を助けてくれますよね？」という問いかけに「はい」「いいえ」で答えられるとして、
「はい」と答えるまで何度も同じ質問を繰り返す、といったことができるみたい。

このメソッドを初めて知ったとき
これ、ドラクエで村人の質問に対して「いいえ」を選択したら、永遠に同じ質問繰り返されたやつや！
と感じた、

以下に「アタシのことスキ？」という質問に「はい」と答えるまで
永遠に「アタシのことスキ？」と質問されるメンヘラ例文を載せておきます。

```ruby
me = ['アタシ']
=> ["アタシ"]
irb(main):007:0> me.each do |me|
irb(main):008:1* print "#{me}のことスキ？ =>"
irb(main):009:1> answer = ['はい', 'いいえ'].sample
irb(main):010:1> puts answer
irb(main):011:1> redo unless answer == 'はい'
irb(main):012:1> end
アタシのことスキ？ =>いいえ
アタシのことスキ？ =>いいえ
アタシのことスキ？ =>いいえ
アタシのことスキ？ =>はい
=> ["アタシ"]
```