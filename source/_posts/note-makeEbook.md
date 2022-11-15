---
title: 'Blog Note 7：破解 EPUB 源碼，製作豎排電子書，提高文學素養'
date: 2000-10-31 00:30:00
keywords: 'e-book, epub'
banner_img: ''
index_img: '../image/note-makeEbook/index.jpg'
tags:
  - 笔记
abbrlink: 20018
author: 桐羽
excerpt: '不是日文、豎排、往左翻頁、用襯線字體和中英文之間有空格的電子書我都不看的😁'
---

`作者：桐羽`

不是日文、豎排、往左翻頁、用襯線字體和中英文之間有空格的電子書我都不看的😁

![](../image/note-makeEbook/index.jpg)

## 0. 背景

俺是一個沒事就會看廁紙的人，看廁紙的歷史可以追溯到十年甚至是九年前的刀劍神域時期，當時電視動畫正在熱播並且以下省略一萬字，於是一不小心的俺就把十幾卷的刀劍神域廁紙在 Kindle 上看完了（印象中還是輕之國度的翻譯版本）。所以說閱讀廁紙也是俺諤次元活動的一大部分。

然而讀書人多少都是有點怪癖的，比如說俺在開始閱讀日文的廁紙之後，就發現如果廁紙不豎排並且裝訂右側，則不文學，比如說下面這本俺買的二手新海誠廁紙：

![](../image/note-makeEbook/kumonomukou.webp)

這些豎排文字看着看着就覺得自己變得文學了起來，並且若俺用神力把這本書左右拉開成一長條，那俺閱讀時候的目光就可以直接從最右邊暢通無阻地看到最左邊，舒服。

有同學可能就會問了，要是我用神力把橫排的書垂直上下拉開成一長條，不就可以一眼從上看到下了嗎？這位同學俺請你出去。

然而有一天俺看到了一本神力扯不開的書：

![你猜猜正確的閱讀順序是什麼？](../image/note-makeEbook/himeiten.webp)

西尾維新還是太抽象了，而且這種情況不會出現在 Kindle 上，電子書纔是俺們的討論範圍。
那麼要是俺拿到了一本電子書，並且覺得不太滿意，應該怎麼處理呢？這就是本文的重點了，即如何魔改 EPUB 電子書。

## 1. 提高文學素養

我隨便掏出兩本電子書

一本是 小説 天気の子 (角川文庫) - 新海 誠.epub

{% gallery tenki %}
../image/note-makeEbook/tenki/00.webp
../image/note-makeEbook/tenki/01.webp
../image/note-makeEbook/tenki/02.webp
{% endgallery %}

可以看到牠是豎排佈局，排版整齊，就像俺一樣文學素養很高，

另外一本是 Sword Art Online 009 Alicization Beginning - 川原礫.epub

{% gallery sao09 %}
../image/note-makeEbook/sao09/00.webp
../image/note-makeEbook/sao09/01.webp
../image/note-makeEbook/sao09/02.webp
../image/note-makeEbook/sao09/03.webp
../image/note-makeEbook/sao09/04.webp
{% endgallery %}