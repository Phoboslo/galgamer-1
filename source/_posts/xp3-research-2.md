---
title: 'Uncover XP3 後篇：XP3 封包中的的壓縮和加密技術'
date: 2000-6-10 00:30:00
keywords: 'XP3, 吉里吉里, 解包, Archive File'
banner_img: '../image/xp3-research-2/banner.webp'
index_img: '../image/xp3-research-2/cover.jpg'
tags:
  - UncoverXP3
  - 技術報告
abbrlink: 20022
author: 'Galgamer Core'
excerpt: '讓我們再深入一些．這次我們研究的是帶有壓縮和加密的 XP3 封包．'
---

<style>
  :root {
    --my-bg-url: url('');
  }
  body {
    background-image: var(--my-bg-url);
    background-repeat: no-repeat ;
    background-position: left 0px top 75px;
    background-size: 50% auto;
  }
  @media screen and (max-width: 767px) { /* 手機版佈局 */
    body {
      background-image: unset;
      background-repeat: unset ;
      background-position: unset;
      background-size: unset;
    }
  }
  .page-header  {
    background-color: rgba(0,0,0,0.5);
    padding: 3px;
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
  --body-bg-color: #a5dee4;
  --board-bg-color: rgba(255,255,255,0.8);
  --text-color: #3c4858;
  --sec-text-color: #718096;
  --post-text-color: #2c3e50;
  --post-heading-color: #1a202c;
  --post-link-color: #0366d6;
  --link-hover-color: #30a9de;
  --link-hover-bg-color: #f8f9fa;
  --navbar-bg-color: #3a8fb7;
  --navbar-text-color: #fff;
}
[data-user-color-scheme='dark'] {
  --body-bg-color: #2c4058;
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
}
</style>

<div class="alert alert-success" role="alert">
<b>Contributor：</b><br>
<b>首席研究者：</b>不願意透露姓名的正經大學電腦系畢業前途光明的美少女<br>
<b>助手：</b>辣妹系黑屁<br>
<b>技術顧問：</b>偶像百合美少女
</div>


| 資訊一覽     |                 |
| :----------- | :------------------------------------ |
| **遊戲引擎** | Kirikiri Z      |

本文是 Uncover XP3 系列的第二篇．如果你是第一次閱讀這個系列，建議先去看看 Uncover XP3 前篇．我們在那邊詳細介紹了 Kirikiri 引擎的 XP3 封包的文件結構，會對你理解本文有幫助．

## 前言

在前篇中，我們詳細介紹了 XP3 文件的內部格式．牠包含了一個文件頭，一個索引區域和一個文件數據區域，這些項目之間由指針連結，因此從文件頭開始，順着指針就可以到達文件的各個部分．

![Cover](../image/xp3-research-2/cover.jpg)

在這篇文章中，我們將進一步深入研究 XP3 文件．於是接下來各章的內容安排如下．

第七章將介紹 XP3 內部的文件壓縮方式和索引壓縮方式；
第八章將首先介紹一些簡單的密碼學基礎知識，然後詳細介紹 Kirikiri 引擎的加解密方式，和牠的插件的代碼實現，最後給出該加密系統的整體概觀；
第九章將使用逆向工程的方法對現實世界的 Kirikiri 遊戲的加密進行簡單分析．但是由於時間倉促，留下了許多懸而未決的問題，這些問題將一併列出．

## Chapter 7. 從非壓縮格式到壓縮格式

在前篇中我們主要對沒有壓縮的 XP3 封包格式進行了分析，本章則將詳細分析 XP3 文件中使用的壓縮方式．

本章的作者是電腦系美少女．

### 7.1 緒論

之前我們說道，XP3 包含的每一個文件都有一個對應的索引項來儲存該文件的 Metadata．現在重新將該索引項的結構總結如下圖所示．

![Fig 7.1.1 索引項各個字段](../image/xp3-research-2/7-1-1-index-entry.webp)



### 7.2 文件內容的壓縮

### 7.3 索引區域的壓縮

### 7.4 小結


## Chapter 8. Kirikiri 加密系統

### 8.1 緒論

### 8.2 密碼學背景

### 8.3 加解密插件的實現

### 8.4 Kirikiri 引擎的文件讀取邏輯

### 8.5 解密系統的全景圖

### 8.6 小結


## Chapter 9. 現實世界中的逆向工程分析

### 9.1 再回顧：解密部分邏輯中的數據結構

### 9.2 基於 Kirikiri 2 的解密插件的簡單分析

### 9.3 基於 Kirikiri Z 的嵌入式解密

### 9.4 尚未解決的問題


## 總結
