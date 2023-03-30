---
title: OpenDrawing Project 主頁
tags:
  - OpenDrawing
  - 绘画
excerpt: 歡迎來到美少女製造計劃 OpenDrawing Project
date: 2023-03-01 00:30:00
banner_img_height: 90
---

<style>
  :root {
    --my-bg-url: url('');
  }
  body {
    background-image: var(--my-bg-url);
    background-repeat: no-repeat ;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
  #banner {
    background: unset!important
  }
  @media screen and (max-width: 767px) { /* 手機版佈局 */
    /* body {
      background-image: unset;
      background-repeat: unset ;
      background-position: unset;
      background-size: unset;
    } */
  }
  .page-header span {
    background-color: rgba(0,0,0,0.5);
    padding: 10px;
    border-radius: 5px;
  }
  .page-header .mt-1 span.post-meta {
    /* 隱藏嚇人的字數統計 */
    display: none;
  }
  .full-bg-img > .mask {
    background-color: rgba(0,0,0,0) !important;
  }
  :root {
    --color-mode: 'light';
    --body-bg-color: #bbe7ec;
    --board-bg-color: rgba(255,255,255,0.88);
    --text-color: #3c4858;
    --sec-text-color: #718096;
    --post-text-color: #2c3e50;
    --post-heading-color: #1a202c;
    --post-link-color: #0366d6;
    --link-hover-color: #30a9de;
    --link-hover-bg-color: #f8f9fa;
    --navbar-bg-color: #3a8fb7;
    --navbar-text-color: #fff;
    --book-info-bg-color: #fff;
  }
  [data-user-color-scheme='dark'] {
    --body-bg-color: #182841;
    --board-bg-color: rgba(7, 0, 0, 0.85);
    --text-color: #c4c6c9;
    --sec-text-color: #a7a9ad;
    --post-text-color: #c4c6c9;
    --post-heading-color: #c4c6c9;
    --post-link-color: #1589e9;
    --link-hover-color: #30a9de;
    --link-hover-bg-color: #364151;
    --navbar-bg-color: #3a8fb7;
    --navbar-text-color: #d0d0d0;
    --book-info-bg-color: #2b2b3e;
  }
   .book-info {
    box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
    border-radius: 12px;
    background-color: var(--book-info-bg-color); 
  }
  .book-cover img {
    border-radius: 6px;
  }
  .book-cover .image-caption {
    margin: .75rem auto .75rem;
  }
  .markdown-body {
    overflow-x: visible;
  }
</style>

<img class="d-none" src='images/index/tg-preview.jpg' />

<div class="alert alert-warning font-weight-bold" role="alert">
  一切的一切都緣起於一位叫做 sora 的群友和一款叫做「你畫我猜」的神必遊戲。<br>
  <a href="tg://resolve?domain=Galgamer&post=479902">🔗查看 sora 事蹟</a>
</div>

<div class="alert alert-info" role="alert">
  <span class="font-weight-bold font-italic alert-heading" style="font-size: 125%;">我們需要你的幫助！</span>
  <br>
  請向我們分享你的繪畫經驗和推薦的書籍！
</div>

請熱愛美少女的你一起來體驗美少女插畫的樂趣！

## Contents

  * [🧭 Quick Start](#Quick-Start)
    * [🛠️ 準備工作](#準備工作)
    * [🔰 繪畫入門](#繪畫入門)
    * [💻 使用繪畫軟件](#使用繪畫軟件)
    * [🧠 繪畫基礎知識](#繪畫基礎知識)
    * [✏️ 漫畫美少女繪製技術](#漫畫美少女繪製技術)
    * [👗 高級美少女繪製技術](#高級美少女繪製技術)
    * [🎨 上色技術](#上色技術)
    * [🤯 硬核作畫技術](#硬核作畫技術)
    * [🏞️ 背景繪製技術](#插畫背景繪製技術)

  * [🛰️ 插畫繪製流程](#插畫-Workflow)
  * [⌨️ 程序員的怪癖](#像寫程序一樣作畫)

## Quick Start

好的！現在你有了一個新任務：繪製一張美少女的插畫。但是你可能會覺得自己不會畫畫或者沒有美術素養/藝術細菌，覺得繪製插畫是一個高不可攀的任務。

但是事實並非如此，因爲我們的目的不是和推特上面的畫師們內卷或者成爲頂級插畫家，我們身爲 Galgame 玩家，目的也只是體驗一下親手製造出自己最喜歡的美少女的快樂。因此我們將會介紹一些基礎知識來幫助你快速走上作畫的道路。

<div class="alert alert-warning" role="alert">
  <span class="font-weight-bold font-italic alert-heading" style="font-size: 125%;">請注意！</span>
  <br>
  1. 如果你的目標是成爲職業插畫家，那麼本網站的內容不適合你。
  <br>
  2. 和其他所有的藝術學科一樣，繪畫需要腳踏實地地練習，無法速成。
  <br>
  3. 要把你的作品發給群友看。
</div>

但是這又怎麼樣？我們是以插畫爲樂的人，最重要的是開心。

準備好加入 OpenDrawing Project 了嗎？那麼就請來看看我們準備的學習資料罷。

### 準備工作

OpenDrawing Project 是一個開源項目，因此我們在電腦上作畫。使用電腦作畫相比紙張作畫的優點在於：

 * 便於修改
 * 便於濫用科技
 * 開源

因此你需要準備能在電腦上作畫的設備。

首先是電腦，你需要一臺能運行 Photoshop 的電腦，至少 16G 內存，顯示器不求頂尖級別，至少色彩不能拉跨。如果你覺得你的電腦顯示器相比你的手機屏幕的顏色明顯黯淡很多，那麼不行，，，

然後你需要一塊數位板。由於數位板上的每一個點都和電腦屏幕上的位置一一對應，所以數位板尺寸不能太小，否則就會遇到難以操作線條的窘境。接近 A4 紙大小的尺寸是合適的。其次數位板附帶的筆尖需要是硬筆，不可以是伸縮的彈簧筆尖，購買的時候請注意！

我的數位板是 Wacom CTL-672，牠雖然滿足上述兩點要求，但是牠是一坨答辯。

### 繪畫入門

<div class="alert alert-warning" role="alert">
  <span class="font-weight-bold font-italic alert-heading" style="font-size: 125%;">請注意！</span>
  <br>
  1. 這裏的電子版書籍全部收集於 Z-library，僅供學習之用，請支持正版。
  <br>
  2. 這裏的書籍一本中文的都沒有！因爲找不到，，，所以讀者需要具備一定的英語和日語閱讀能力。
  <br>
  3. 你可以在你的當地書城購買類似的書籍。
</div>


這本書介紹了繪畫的一些基礎知識和需要注意的方面。


<book-info no=1 title="Keys to Drawing" author="Bert Dodson" uid="ktd" cover="images/index/KeysToDrawing-Cover.webp">
  <p>
    一本繪畫入門書，零基礎可學。裏面講述了一些繪畫的基本技術，作畫時候應當養成的好習慣以及一些常見畫法等等。
  </p>
  <p>
    不需要全部看完，你只需要看到第四章（光影的畫法）即可！裏面的每一章都有一些簡單的作畫練習，你可以畫也可以不畫。這本書的目的是讓你對作畫技術有一個最基本的了解。
  </p>
  <p>
    只有英文版，但是我覺得不算難懂。<br>
    下載地址：{% telegram_channel 1053 %}
  </p>
</book-info>


就這？就這！此時講太多理論無用，看完這個就已經可以開始畫畫了。
先從臨摹別人的畫開始，比如說找一些結構簡單的黑白漫畫然後臨摹，畫上那麼十張二十張，建立好捕捉形狀的能力，，，

當你需要更複雜的畫法和更精深的知識的時候再往下看。


### 使用繪畫軟件

選擇一個繪畫軟件來學習。

|             | **Photoshop** | **SAI 2** | **Clip Studio Paint** | **Krita** | **GIMP** |
| :--------- | :------------- |:--------- |:---------------------|:--------- |:--------- |
| **功能**    |     頂級       |    畫畫夠用 |      很強            |   還行    |   還行   |
| **使用手感** |    還行       |    很爽    |      有點卡           | 依託答辯   |  依託答辯 |
| **畫筆引擎** |   依託答辯     |   很強      |     還行             |  還行     | 依託答辯  |
| **性能**     |     還行      |      很強   |         依託答辯     |   還行     |   還行    |
| **操作系統** |   Windows🍎   |   Windows   |    Windows🍎       | Windows🍎🐧 | Windows🍎🐧|
| **總評**     |   依託答辯         依託答辯   |    依託答辯         | 依託答辯    | 依託答辯  |
| **最低價格** |  $7.5/月      |    $40     |         $37         | 免費       |    免費   |
| **推薦？**   |      還行     |    還行     |     還行            |   還行     | 開源拖拉機 |

我的建議是：
硬核 PS 玩家當然就去用 PS，等你被畫筆引擎噁心到了再換其他的也不遲。
其他玩家去用盜版 SAI 2 或者 Krita。CSP 由於性能過於強大不建議任何人使用，不過拿來佈置 3D 模型還是不錯的。


針對 Photoshop，我們有一個神必培訓班的教學視頻：

<details>
  <summary>➡️點此展開</summary>
  <video controls preload="metadata" width='100%'>
    <source src="https://dl.galgamer.eu.org/20%E5%B9%B4%E6%97%A5%E7%B3%BB%E4%BA%8C%E6%AC%A1%E5%85%83%E6%8F%92%E7%94%BB%E7%8F%AD/20%E5%B9%B4%E6%97%A5%E7%B3%BB%E6%8F%92%E7%94%BB%E8%AE%AD%E7%BB%83%E8%90%A5%E3%80%90%E5%9F%BA%E7%A1%80%E8%AF%BE%E3%80%91/1.%E9%80%8F%E8%A7%86/1.%E6%89%BE%E5%88%B0%E8%A7%86%E5%B9%B3%E7%BA%BF%E5%92%8C%E6%B6%88%E5%A4%B1%E7%82%B9/1-1%20PS%E7%BB%98%E7%94%BB%E5%B8%B8%E7%94%A8%E5%8A%9F%E8%83%BD%E5%AD%A6%E4%B9%A0.mp4" type="video/mp4" />
    <p> To view this video please enable JavaScript</p>
    </video>
</details>

<br>

### 繪畫基礎知識

下面是透視的畫法。雖然學習這個並不緊迫，但是稍微了解之後能讓你免於觸犯一些視角安排上的低級錯誤，因此列於基礎知識的分類。

<book-info no=2 title="The Art of Perspective" author="Phil Metzger" uid="pers" cover="images/index/Perspective-Cover.webp">
  <p>
    本書介紹了透視的畫法，具有相當工程製圖的味道，是在繪製 3D 空間的時候的必備知識。
  </p>
  <p>
    雖然繪製美少女不一定會立馬用到這些知識，但是牠裏面還是教授了如何通過相當簡單的配色來營造空間感，我覺得相當有趣。<br>
    有兩百頁，但是大多都是圖，可以花上那麼兩個小時快快掃完，會大有裨益。
  </p>
  <p>
    只有英文版，但是我覺得非常好懂。<br>
    下載地址：{% telegram_channel 1055 %}
  </p>
</book-info>

### 漫畫美少女繪製技術

畫畫就是不停地 Copy，Copy！！下面介紹幾本魔法書供你 Copy！

<book-info no=3 title="360°どんな角度もカンペキマスター！ マンガキャラデッサン入門" author="藤井英俊" uid="360d" cover="images/index/360-Cover.webp">
  <p>
    這本書是漫畫角色作畫的速查手冊，內容包括了從人物的人體姿勢，到各個部位、衣服的畫法，同時提供了模特的照片，這本書我看得非常多。
  </p>
  <p>
    各種部位都分別提供了非常多的範例，你總能在裏面找到你想畫的東西，<br>
    並且都各自標註了注意事項，是非常好的作畫參考。
  </p>
  <p>
    只有日文版，文字不多，基本上都是插圖，一般人也能看懂。<br>
    下載地址：{% telegram_channel 1058 %}
  </p>
</book-info>

<book-info no=4 title="メルヘンでかわいい女の子の衣装デザインカタログ" author="佐倉おりこ" uid="kawai" cover="images/index/Clothes1-Cover.webp">
  <p>
    美少女服裝的速查手冊，內容包括了各種日常常見衣服和各種幻想系的奇妙衣服的畫法，另外還有各種飾品的畫法。
  </p>
  <p>
    找到你喜歡的 Copy 就完事了。<br>
    不過我覺得畫衣服最快最準的方法還是對着實物畫。
  </p>
  <p>
    只有日文版，文字不多，基本上都是插圖，一般人也能看懂。<br>
    下載地址：{% telegram_channel 1061 %}
  </p>
</book-info>

<book-info no=5 title="How to Create Manga Drawing Clothing and Accessories" author="Studio Hard Deluxe" uid="mangacl" cover="images/index/MangaClothes-Cover.webp">
  <p>
    服裝的速查手冊，內容主要是日常服裝的作畫參考，另外着重講解了令人頭痛的衣服褶皺和陰影，也提供了繪製衣服的一般方法。
  </p>
  <p>
    群友提供，我只簡單看了一下，但是我覺得<br>
    找到你喜歡的 Copy 就完事了。
  </p>
  <p>
    只有英文版。<br>
    下載地址：{% telegram_channel 1060 %}
  </p>
</book-info>

### 高級美少女繪製技術

讓我們的美少女更加 fancy！

<book-info no=6 title="かがやく瞳の描き方" author="玄光社" uid="hitomi" cover="images/index/hitomi-Cover.webp">
  <p>
    美少女的眼睛作畫最佳 Practice。
  </p>
  <p>
    群友提供，實在是一本好書，我經常看。<br>
    首先眼睛的作畫並不複雜也沒有煩人的光影計算，而且稍微按照裏面的教程畫一下就能得到非常美麗的美少女眼睛，絕對值得一試。
  </p>
  <p>
    只有日文版。<br>
    下載地址：{% telegram_channel 1059 %}
  </p>
</book-info>

<book-info no=12 title="ParyiParyiが全力で教える「髪」の描き方 ヘアスタイルにこだわる作画流儀" author="ParyiParyi" uid="kami" cover="images/index/kami-Cover.webp">
  <p>
    美少女的頭髮作畫百科全書。
  </p>
  <p>
    頭髮的作畫令我非常頭痛，因爲牠具有特殊的物理和光影效果，很難拿捏。而且無法拿照片直接 Copy，因爲二次元的頭髮具有一套抽象畫法。<br>
    這本書詳細介紹了頭髮的各種特性以及不同髮型和演出效果的畫法，同時介紹了上色方法。
  </p>
  <p>
    只有日文版。<br>
    書籍和附帶筆刷下載地址：{% telegram_channel 1066 %}
  </p>
</book-info>

<book-info no=7 title="ファンタジー衣装の描き方" author="もくり" uid="fantasy" cover="images/index/fantasy-Cover.webp">
  <p>
    大的來了，是幻想系美少女服裝的作畫指南。
  </p>
  <p>
    群友提供，非常高級。但是我的技術只能支撐我畫最簡單的衣服，這種實在是畫不來。<br>
    時間多的可以試一下。
  </p>
  <p>
    只有日文版。<br>
    下載地址：{% telegram_channel 1062 %}
  </p>
</book-info>

### 上色技術

學習專業畫師的上色工作流。

<book-info no=8 title="とことん解説 キャラクターの「塗り」入門教室" author="乃樹坂 くしお" uid="coloring1" cover="images/index/coloring-Cover.webp">
  <p>
    上色入門教程，講得非常詳細，只要跟着跑一遍就能畫出 GNU 意義上能跑的上色。
  </p>
  <p>
    提供的步驟遵循了一般畫師的工作流程，先上底色，然後是陰影和高光，多跟着做幾次大腦中就會有概念，非常有趣。<br>
    只需要看完前兩種上色方法，第三種可以直接跳過。
  </p>
  <p>
    只有日文版。<br>
    下載地址：{% telegram_channel 1056 %}
  </p>
</book-info>

<book-info no=9 title="mignonがしっかり教える「肌塗り」の秘訣 おなかに見惚れる作画流儀。" author="mignon" uid="skin" cover="images/index/skin-Cover.webp">
  <p>
    膚色上色教程。一開始的作畫用不到這麼高級的技術，因爲需要人體繪畫知識的配合。
  </p>
  <p>
    但是牠裏面的第一章介紹了 Galgame 業界常用的立繪上色手段「遮罩上色」的方法，<br>
    因此第一章非常值得一看。
  </p>
  <p>
    只有日文版。<br>
    下載地址：{% telegram_channel 1057 %}
  </p>
</book-info>

除了教材之外，還有兩個很有用的資料。

第一個是 Galgame 公司 MOONSTONE 公開的遊戲立繪的 PSD 文件，如圖。

<p>
  <img src="images/index/moonstone-psd.webp" alt="みさき立ち絵">
</p>

建議親自分析一下這個 PSD 的結構，弄清楚每一個圖層的作用，就可以極大地加深對 Galgame 立繪上色手法的了解。
下載：{% telegram_channel 1052 %}

第二個是著名插畫家 torino 的 fanbox 上的文章。


<img class="img-fluid bg-transparent" src="images/index/torino-fanbox.webp" alt="torino fanbox" />


上面還有 PSD 文件，如果你想要一窺大師的作畫世界，那麼捐贈 500 塊錢解鎖這些資料絕對是物超所值。出於對大師的尊重我無法公開這些資料，但是之後有機會可能會分享一篇使用 torino style 上色的博客文章。

劇透一下：我有研究過 PSD，torino 的手法實在是過於高級，沒有兩百年作畫經驗是達不到這種水準的。喜歡 torino 畫風的可以採取別的 approach 也能夠畫出相近的風格（確信）

### 硬核作畫技術

任何一種藝術都離不開勤懇的練習，包括繪畫，因此放一本素描的教材。

<book-info no=10 title="The Natural Way to Draw" author="Nicolaides" uid="natural" cover="images/index/natural-Cover.webp">
  <p>
    素描和速寫教程。
  </p>
  <p>
    專業畫師和每一個美術生的必經之路，但是 OpenDrawing 小鬼可以先不用考慮。<br>
    當然如果你有興趣的話。
  </p>
  <p>
    下載地址：{% telegram_channel 1054 %}
  </p>
</book-info>

### 插畫背景繪製技術

畫完美少女就該畫背景辣！但是背景也不是那麼好欺負的。除了上面提到的透視畫法教材之外，這裏再放一本插畫用背景教程。

<book-info no=11 title="ステップアップ式 SAI×Photoshopで描く 背景レッスン" author="garnet" uid="PSbackg" cover="images/index/bglesson-Cover.webp">
  <p>
    使用 SAI 和 PS 進行背景繪製的教材，可以拿來認真學，也可以拿來 Copy。
  </p>
  <p>
    本書內包含了多個插畫背景案例，詳細介紹了從頭到尾的繪製流程。
    作爲基礎知識，牠還簡單介紹了透視的原理和軟件的操作方法。
  </p>
  <p>
    電子版只有日文版，但是牠好像是有中文翻譯版的，群友手上就有一本。
    下載地址：{% telegram_channel 1065 %}
  </p>
</book-info>

## 插畫 Workflow

本來想介紹繪製一張插畫的完整流程的，但是看了看我畫得 想想還是簡單講兩句算了。

**一般插畫師的工作流程：**

 * 確定題材和 idea
 * 通過照片，模特或者 3D 模型起一個草稿，然後不斷修改到自己滿意
 * 對草稿上色，確定大概顏色
 * 對着草稿勾線
 * 上色。此過程可長可短。
 * 畫背景和給背景上色，此過程可長可短。
 * 做最終處理（套濾鏡等）

當然這也只是一般論，每個人的喜好可能都不一樣。

**torino 的工作流程：**

 * 確定題材和 idea
 * 通過大面積的色塊來起稿，稍微改改直到覺得差不多得了
 * 細化各種色塊，然後在需要的地方勾線
 * 一邊重複第三步一邊施加魔法，直到畫完
 * 做最終處理（加特效等）

**寫這個網頁的人的工作流程：**

 * 確定題材和 idea
 * 通過照片，模特或者 3D 模型起一個草稿，這個過程基本是亂畫一通
 * 完蛋，不會畫了，趕緊翻書或者上網抄襲別人的設計
 * 重複上述操作直到畫完

## 像寫程序一樣作畫

身爲技術人員多少都會染上一些職業病。沒有註釋 + 亂糟糟的圖層，不同部分不解耦合的畫一看是不是會血壓飆升？
當畫技跟不上的時候是不是就會想濫用科技？
如何繪製可維護的插畫？

這一小節將介紹一些編程習慣。大師繞道。

1. 熟悉你的美少女集成開發環境（指 Photoshop）。開發的時候連環境都不知道怎麼操作是非常致命的。

2. 將每個身體部位分開在不同的文件夾中作畫。

3. 使用 填充圖層/mask 上色，一次只調一個顏色。這會將你的顏色儲存在變量裏面方便後續隨時修改。
👆🏻這個是解耦合的思想，所以厚塗就是全部都耦合在一起，修改只能繼續覆蓋，我不喜歡強耦合（也不會）。

4. 拿不準的時候用快照功能做版本控制。

5. 多使用非破壞性編輯和智能對象（僅限 Photoshop），儘量完整封裝你的歷史操作。

6. 逆向別人的畫，猜測牠們的畫面結構。

## 寫在最後

在最後我想說的是如何查找資料。當需要某一方面的知識的時候，推薦的知識來源是：

書籍和教科書 > 維基百科 > 網上來歷不明的博客文章

這是因爲寫書的人一般會寫得更加認真和詳細，讀者也更容易讀懂。而博客文章一般都比較隨便（比如說你正在看的這個網頁），也不一定具有可操作性。
所以你正在看的這個來歷不明的網頁並不教作畫技術（我也不會），而是直接推薦群友們指定的好書。

Happy Open Drawing！


{% template book-info title no author cover uid html %}
<div class={`row my-4 book-info ${uid}`}>
  <div class="title-author col-12 my-1 pb-2">
    <div class="col font-weight-bold book-title font-serif pt-2" style="font-size: 125%;">
      {title}
    </div>
    <div class="col">
        作者：
      <span class="font-italic book-author">
         {author}
      </span>
    </div>
    <hr style="margin: 3px"/>
  </div>
  
  <div class="cover-desc row my-0 mx-1 justify-content-center">
    <div class="book-cover col-11 col-lg-5 my-1">
      <img class="img-fluid" src={cover} alt={title}/>
    </div>
    <div class="book-desc col 12 col-lg-7 my-1" html={html}>
    </div>
  </div>
</div>
{% endtemplate %}


<script>
  //document.documentElement.setAttribute('data-user-color-scheme', 'dark');
  document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("article").classList.add("mx-auto", "markdown-body");
  })
  let urls = [
  'images/index/bg-1.webp',
  'images/index/bg-2.webp',
];
let url = urls[Math.floor(Math.random() * urls.length)];
document.documentElement.style.setProperty('--my-bg-url', "url('" + url + "')");
</script>