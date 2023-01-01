---
title: 'STEINS;GATE 0：無限遠點的牽牛星'
date: 2022-12-31 00:30:00
keywords: 'SG0, AI, 石头门, 燃, 悬疑'
banner_img: ''
index_img: '../image/SG0/index.webp'
tags:
   - 秋叶原
   - 科学
   - 中二
   - 悬疑
   - 剧情
categories:
   - [全年龄]
   - [游戏公司, 5pb.]
abbrlink: 10021
author: 'Patchouli Knowledge'
excerpt: '世界是可以欺騙的，去欺騙世界吧'
---

`作者: Patchouli Knowledge`

<style>
.heimu {
    display: inline-block;
    background-color: #25252533;
    color: transparent;
    text-shadow: none;
    border-radius: 8px;
    padding: 4px 8px;
    transition: all ease .2s;
}
.heimu:hover, .heimu:active,
.heimu:hover .heimu, .heimu:active .heimu {
    color: white !important;
}
.heimu:hover a, a:hover .heimu,
.heimu:active a, a:active .heimu {
    color: lightblue !important;
}
.heimu:hover .new, .heimu .new:hover, .new:hover .heimu,
.heimu:active .new, .heimu .new:active, .new:active .heimu {
    color: #BA0000 !important;
}
</style>



<p class="text-center" style="font-size: 200%">
  <span style="color:red;"   >該作為 SG 正統續作，以下内容將會對 SG 完全劇透</span><br>
  <span style="color:red;"   >請務必通關 SG 后再閲讀該文/游玩該作</span><br>
</p>

![](../image/SG0/post.jpg)

| 資訊一覽     |                  |
|:--------:|:---------------- |
| **開發商**  | 5pb.&Nitro+ |
| **遊戲時長** | 40 H          |
| **類型**   | 中二 劇情 穿越 科學 AI     |
| **難度**   | 一般            |
| **分級**   | 全年齡             |

## 故事梗概

該作為繼承了前作“β世界綫”的結局，即真由理存活，紅莉栖死亡的世界。而我們的狂氣的科學家倫太郎也不再中二，陷入深深的自責，一蹶不振。

![](../image/SG0/01.webp)
機緣巧合下參加了助手的教授和學姐開辦的講座，並相互認識，在教授熱情的邀請下，成爲了 AI 助手“Amadeus”的測試員

![](../image/SG0/02.webp)
從最壞的結局出發，現在事情又有了新的發展，等待著倫太郎的是希望，抑或是……
## 人物介紹（前作人物不再介紹

<style>
  .charname {
    font-size: 150%;
  }
  .namearea hr {
    margin: 1.5rem 0;
  }
  .sp-character img, .img-shade {
    filter: drop-shadow(0 0 6px #000c);
  }
  .sp-character {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);

    /*-webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    
    background-color: var(--chara-card-color);*/
    
    background-color: transparent;
    background-image: var(--this-bg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }
  .sp-character .char-overlay {
    background-color: var(--chara-card-color);
    min-height: 450px;
    background-image: var(--right-bg);
    background-repeat: no-repeat;
    background-position: top 0px right calc(0px);
    background-size: 300px;

    margin: 0;
    padding: 0;
  }
  :root { /* 配色 */
    --chara-card-color: #ffffffcf;
  }
  [data-user-color-scheme='dark'] {
    --chara-card-color: #1a1a1aa6;
  }
  @media screen and (max-width: 800px) {
    .namearea hr {
      margin: 1rem 0;
    }
    .pc-left {
      -webkit-backdrop-filter: blur(3px);
      backdrop-filter: blur(3px);
      
      background: var(--chara-card-color);
      transition: opacity 0.3s;
    }
    .pc-left.touch {
      opacity: 0.1;
    }
    .sp-character {
     /*background: unset;*/
      /*-webkit-backdrop-filter: unset;
    backdrop-filter: unset;*/
    }
    .sp-character .char-overlay {
      min-height: unset;
      background-size: contain;
      background-position: top 0px right 0px;
    }
    :root { /* 配色 */
      --chara-card-color: #ffffff87;
    }
    [data-user-color-scheme='dark'] {
      --chara-card-color: #1a1a1aa6;
    }
  }
</style>

{% template sp-character name no yomi uid html %}
<div class={`row sp-character ${uid}`} style={`--this-bg: url(../image/SG0/chars/bk.webp)`}>
  <div class="col-12 char-overlay row" style={`--right-bg: url(../image/SG0/chars/${no}.png)`}>
    <div class="pc-left col-12 col-md-8">
      <div class="namearea col-12 pt-2">
        <div class="charname font-serif font-weight-bold font-italic">
          {name}
        </div>
        <div class="yomi font-italic">
          {yomi}
        </div>
        <hr />
      </div>
      <div class="infoarea col-12" html={html}>
      </div>  
    </div>
  </div>  
</div>
{% endtemplate %}

<sp-character no=0 name="LabMem No.009:比屋定 真帆" yomi="CV: 矢作 紗友裏" uid="a">
  <p>
    紅莉栖的研究室前輩。<br>
  </p>
  <p>
    身高僅有140cm，嬌小的身材常被人誤認爲是小學生，本人也對此十分在意。<br>
  </p>
  <p>
    做事很精明幹練，有些嫉妒自己的後輩紅莉栖的才華，但也非常喜歡她，對其死無法釋懷。
  </p>
  <p>
    活在紅莉栖的陰影之下，其實也是天才。
  </p>
</sp-character>
<br>

<sp-character no=1 name="LabMem No.010:椎名 篝" yomi="CV: 潘 惠美" uid="a">
  <p>
    長相酷似紅莉栖的少女（唯一的區別大概是胸部和瞳色<br>
  </p>	
  <p>
    失去了所有記憶，但和真由理很是親近。<br>
  </p>
</sp-character>
<br>

<sp-character no=2 name="LabMem No.011:阿万音 由季" yomi="CV: 田村 由香里" uid="a">
  <p>
    真由理 COS 社團的同好，即將畢業的大四學生。<br>
  </p>
  <p>
    人美心善，積極向上，給人非常强的親和力，連同性都覺得十分美麗。<br>
  </p>
  <p>
    無論哪條世界綫最後都會和桶子在一起並生下鈴音，堪稱最强的世界綫收束。
  </p>
</sp-character>
<br>


## 遊戲 OP & TV OP

動畫來自被牆的油管和 Steam，請翻牆

{% steam_player 256711577 %}

<br>

<style>
  #y2b {
    box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
    border-radius: 10px;
    aspect-ratio: 16 / 9;
    /*height: 100%;*/
    width: 100%;
    background-color: transparent;
    background-image: url('../image/mona-loading.webp');
    background-size: 700px;
    background-repeat: no-repeat;
    background-position: center
  }
</style>
<iframe id='y2b' loading="lazy" src="https://www.youtube-nocookie.com/embed/9CUbbXTVZdw" title="YouTube video player" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>

## 簡評


<div class="row align-items-center">
  <p class="col" style="font-size:200%;">優點：</p>
  <img class="align-right ml-auto bg-transparent" width="200px" src="../image/Atri/yes.webp" alt=""></img>
</div>

 * 根據廣播劇和小説補全了 SG 的許多大坑，在玩家都知道結局是怎樣的情況下依然將懸疑感做得很好。
 * 很好的繼承了 SG 的高質量音樂和畫風，並適當降低了通關難度。
 * “僞科學”(口胡)上的處理依然十分優秀，在前作世界綫的基礎上增添了 AI 等。
 
<div class="row align-items-center">
  <p class="col" style="font-size:200%;">缺點：</p>
  <img class="align-right ml-auto bg-transparent" width="200px" src="../image/Atri/no.webp" alt=""></img>
</div>

 * 部分情節節奏過度有些快，前作部分角色邊緣化，内容略顯單薄（畢竟文本量大約只有前作的一半
 * 有些情節有 bug ，但都是爲了不吃前作的書。

前作過於耀眼，導致這部續作自然會被部分人評價爲狗尾續貂。從一部 ADV 的角度來説該作絕對是優秀水準的，但誰讓它叫 SG0 呢。通關 SG 后該作是絕對不可以錯過的，但請不要用 SG 的水準去要求，稍稍降低一點點期待，SG0也能帶給你大滿足。（這裏不得不提一嘴動畫組真的盡心盡力，SG0 的 TV 依然是超神發揮，完全不輸 SG 的 TV。）

| 評分        |      |
|:---------:|:----- |
| **人設**    | 9/10 |
| **立繪 & CG** | 10/10 |
| **劇情**    | 8/10 |
| **音樂**    | 10/10 |
| **綜合**    | 9/10 |



## CG鑑賞

![](../image/SG0/03.webp)

![](../image/SG0/04.webp)

![](../image/SG0/05.webp)

![](../image/SG0/06.webp)

![](../image/SG0/07.webp)

![](../image/SG0/08.webp)

![](../image/SG0/09.webp)

![](../image/SG0/10.webp)

## 遊戲資源

{% steam_widget 825630 %}

![有愛強烈推薦入正，每次促銷都會打折，有中文，不會吧不會吧還有阿宅沒買石頭門嗎](../image/SG0/steam.webp)

盜版： {% telegram_channel 9020 RhineLibrary %}


<style>
body {
    background: url('../image/SG0/back.webp') no-repeat fixed center;
    background-size: cover;
}
#banner {
    background: url('')!important;
    background-color: transparent!important;
}
#toc {
     background-color: rgba(0,0,0,0.5);
     padding: 20px 10px 20px 20px;
     border-radius: 10px;
}
.mask.flex-center {
	background-color: transparent!important;
}
</style>
<script>
  document.addEventListener("DOMContentLoaded", function(){
    let pclefts = document.querySelectorAll('.pc-left');
    pclefts.forEach((el) => {
      el.addEventListener('touchstart', function(){
        el.classList.add('touch');
      })
      el.addEventListener('touchend', function(){
        el.classList.remove('touch');
      })
    });
    //setTimeout(() => document.documentElement.setAttribute('data-user-color-scheme', 'light'), 1000)
  })
</script>
