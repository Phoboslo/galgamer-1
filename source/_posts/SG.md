---
title: 'STEINS;GATE：一切都是命運石之門的選擇！'
date: 2022-12-10 00:30:00
keywords: 'SG, 神作, 石头门, 燃, 悬疑'
banner_img: ''
index_img: '../image/SG/index.webp'
tags:
   - 秋叶原
   - 科学
   - 中二
   - 悬疑
   - 剧情
categories:
   - [全年龄]
   - [游戏公司, 5pb.]
abbrlink: 10020
author: 'Patchouli Knowledge'
excerpt: '居然能追查到這裏，果然你也是“機關”的人嗎！？'
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



<div class="charname font-serif font-weight-bold font-italic">
「我が名は鳳凰院凶真。狂気のマッドサイエンティストにして、世界の支配構造を破壊する男。失敗など、ありえん」
<br>
「El．Psy．Kongroo！」
<br>
「特に、意味は無い」
</div>

![](../image/SG/post.jpg)

| 資訊一覽     |                  |
|:--------:|:---------------- |
| **開發商**  | 5pb.&Nitro+ |
| **遊戲時長** | 100 H          |
| **類型**   | 中二 劇情 穿越 科學 燃     |
| **難度**   | 較高            |
| **分級**   | 全年齡             |

## 故事梗概

當代大學生典範，整日無所事事的東京電機大學大學生***岡部 倫太郎***和他的朋友***橋田 至一***，再拉上自己的青梅竹馬***稚名 真由理***在一家二手顯像管工房的樓上成立了“未來發明研究所”，每日的活動目標就是發明奇奇怪怪的東西以賺錢。
2010年7月28日，爲了混學分和打發時間的岡部和橋田去聼講座，在那遇到了年僅18嵗就隨便發 paper 的天才少女***牧瀨紅莉栖***並爭吵了起來，但令岡部奇怪的是，幾個小時前他剛在其他地方看到這個紅髮少女倒在血泊當中，更離譜的是，這一切在橋田一周前收到的短信上都寫的清清楚楚。
![](../image/SG/01.webp)
經過查驗后，岡部發現他們在無意間發明了可以向過去發送短信的“時間機器”！就這樣，時間綫開始變動……
![](../image/SG/02.webp)

## 人物介紹

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
    background-size: 500px;

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
      background-size: 150px;
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
<div class={`row sp-character ${uid}`} style={`--this-bg: url(../image/SG/chars/bk.webp)`}>
  <div class="col-12 char-overlay row" style={`--right-bg: url(../image/SG/chars/${no}.png)`}>
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

<sp-character no=0 name="LabMem No.001:岡部 倫太郎" yomi="CV: 宮野 真守" uid="a">
  <p>
    本作男主，都上大學了還中二到無可救藥，可以説是 ACG 最著名的中二病角色。<br>
  </p>
    每天就穿個白大褂，不修邊幅，看起來邋邋遢遢的，再加上時不時的中二語錄，不是熟人鬼才想靠近。<br>
  </p>
  <p>
    雖然看起來瘋瘋癲癲，但做事意外的正經，而且爲了同伴無論犧牲自己多少次都義不容辭。
  </p>
  <p>
    平時就喜歡喝Dr.Pepper和提出一些天馬行空的點子和桶子研究。
  </p>
</sp-character>
<br>

<sp-character no=1 name="LabMem No.002:稚名 真由理" yomi="CV: 花澤 香菜" uid="a">
  <p>
    岡部的青梅竹馬，口頭禪是“嘟嘟嚕”，16嵗，JK。<br>
  </p>	
    濃眉大眼，説話不緊不慢，平時在女僕咖啡廳打工，沒事就在研究所吃喝玩樂陪著岡部，是個愛吃不胖的天然少女。<br>
  </p>
  <p>
    雖然對技術方面一竅不通，但直覺很準總能一下看出問題所在，當主角團陷入消沉時也想活躍氣氛但總是收效甚微。
  </p>
  <p>
    最喜歡的就是岡部、炸鷄塊和雷Net的吉祥物烏帕。
  </p>
</sp-character>
<br>

<sp-character no=2 name="LabMem No.003:橋田 至" yomi="CV: 関 智一" uid="a">
  <p>
    岡部的高中兼大學同學，標准的肥宅。<br>
  </p>
    發言輕浮且充滿著各種讓人聽不懂的2ch用語，時不時還會忽悠女角色們說色色的臺詞，因此經常被助手罵，可以對著任何他覺得萌的事物原地發情，口味非常的廣。<br>
  </p>
  <p>
    同時還是超級駭客，可以説是主角團最强大腿，從黑機關服務器獲取資料到時光機器研發，基本都是他在 C ，計算機才能堪稱逆天。
  </p>
  <p>
    喜歡巨乳。
  </p>
</sp-character>
<br>

<sp-character no=3 name="LabMem No.004:牧瀨 紅莉栖" yomi="CV: 今井 麻美" uid="a">
  <p>
    11嵗就前往海外留學，跳級進入美國的維克多·康德利亞大學的天才少女，18嵗就可以在《science》上發paper的級別。<br>
  </p> 
	在秋葉原上關於時間旅行的講座上被岡部懟后相識，並被岡部各種騷話忽悠進了研究所，一起研究時光機器。<br>
  </p>
  <p>
    十分堅持理論并且爭强好勝，經常說一大堆聼不懂的理論出來，但同時也對未知領域充滿了好奇，很容易就被岡部煽動並開始研究，并且極度傲嬌（後期就只剩嬌了）。
  </p>
  <p>
	和岡部一樣喜歡喝Dr.Pepper，受其影響也逐漸中二，表面正經背地裏也是個死宅和網絡鍵盤俠，
  </p>
</sp-character>
<br>

<sp-character no=4 name="LabMem No.005:桐生 萌郁" yomi="CV: 后藤 沙绪里" uid="a">
  <p>
    一家小報紙的編輯，爲了取材而尋找傳説中的PC“IBN5100”與岡部結識。<br>
  </p>
    十分抗拒與別人交流，幾乎不説話，即使和人面對面也要通過手機短信的方式與人溝通，打字速度非常快，被岡部稱之爲“閃光的指壓師”，但短信的語句卻十分的開朗與其外在形成了鮮明的反差。<br>
  </p>
  <p>
    手機就是她的命根子，很喜歡寫作。
  </p>
</sp-character>
<br>

<sp-character no=5 name="LabMem No.006:漆原 琉華" yomi="CV: 小林 優" uid="a">
  <p>
    秋葉原柳林神社當家的兒子，但被父親當女兒養了。<br>、
  </p>
    畫女硬説男系列，極度缺乏自信，很容易臉紅嬌羞，沒有主見別人説啥就是啥。<br>
  </p>
  <p>
    岡部爲了讓他自信起來，收其作爲自己的徒弟，每日教他奇怪的劍術和說各種中二語錄。
  </p>
  <p>
    喜歡岡部，也因此對岡部的要求和“教誨”也全部無條件接受。
  </p>
</sp-character>
<br>

<sp-character no=6 name="LabMem No.007:秋葉 留未穗" yomi="CV: 桃井 晴子" uid="a">
  <p>
    在秋葉原女僕咖啡廳打工的貓兒少女，是真由理的同事，常有名為菲利斯，很少使用真名。<br>
  </p>
  <p>
    比岡部還要中二和電波，是唯一一個會和岡部一起發癲的人，十分堅持自己的貓娘人設，深諳宅文化，在秋葉原十分有人氣。
  </p>
  <p>
    堪比讀心的察言觀色能力，玩弄人心的小惡魔。
  </p>
</sp-character>
<br>

<sp-character no=7 name="LabMem No.008:阿萬音 鈴羽" yomi="CV: 田村 由香裏" uid="a">
  <p>
    在研究所樓下打工的元氣少女，還兼職了許多工作因此被岡部稱爲“打工戰士”。<br>
  </p>
  <p>
    雖然很少談及自己但很關心他人，做事雖然有點粗心，但在某些時候卻十分的利索，似乎很擅長戰鬥和野外生存。
  </p>
  <p>
    非常喜歡自行車，用自己的打工工資買了輛很貴的自行車，每天不是工作就是在保養自己的自行車。
  </p>
</sp-character>
<br>

## 遊戲 OP & TV OP

動畫來自被牆的油管和steam，請翻牆

{% steam_player 256662886 %}

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
<iframe id='y2b' loading="lazy" src="https://www.youtube-nocookie.com/embed/SBQprWeOx8g" title="YouTube video player" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>

## 簡評


<div class="row align-items-center">
  <p class="col" style="font-size:200%;">優點：</p>
  <img class="align-right ml-auto bg-transparent" width="200px" src="../image/Atri/yes.webp" alt=""></img>
</div>

 * 劇情、人設、音樂都是 ADV 天花板的存在，看了動畫慕名而來的你絕對不會失望。
 * 倫太郎堪稱所有中二少年的夢想&終極追求，看起來像是龍傲天，但完整玩下來就只有 respect。
 * 十分適合新手推，畫風不算萌系就算被看到也不會社死，但難度較高請適當參考攻略。
 * 個人綫有許多動畫中所沒有的細節，讓配角們更加生動有血色。（打工戰士綫筆者非常喜歡）
 
<div class="row align-items-center">
  <p class="col" style="font-size:200%;">缺點：</p>
  <img class="align-right ml-auto bg-transparent" width="200px" src="../image/Atri/no.webp" alt=""></img>
</div>

 * 硬要説就是前期有點小無聊需要鋪墊，配上整體灰暗的界面色調，可能有點勸退，不過畢竟該作名聲如此大，這點還是可以忍耐的，但對於 ADV 的常規文本量來説只是小 case 。（這點放在 TV 中足足長達八集，依然無法抵擋其好評如潮）

有關石頭門的安利chui介紹bao文章已經多如牛毛，筆者拙劣的文筆根本不夠格（絕對不是擺爛，是該作玩過的人太多了質量有多頂都有目共睹），所以也不必多説什麽，直接拉到底看下載鏈接吧。 XD

| 評分        |      |
|:---------:|:----- |
| **人設**    | 10/10 |
| **立繪 & CG** | 10/10 |
| **劇情**    | 10/10 |
| **音樂**    | 10/10 |
| **綜合**    | 10/10 |



## CG鑑賞

![](../image/SG/04.webp)

![](../image/SG/05.webp)

![](../image/SG/06.webp)

![](../image/SG/07.webp)

![](../image/SG/08.webp)

![](../image/SG/09.webp)

![](../image/SG/10.webp)

![](../image/SG/11.webp)

![](../image/SG/12.webp)

![](../image/SG/13.webp)

![](../image/SG/14.webp)

![](../image/SG/15.webp)

![](../image/SG/16.webp)

## 遊戲資源

{% steam_widget 412830 %}

![有愛強烈推薦入正，每次促銷都會打折，有中文，不會吧不會吧還有阿宅沒買石頭門嗎](../image/SG/steam.webp)

盜版： {% telegram_channel 9020 RhineLibrary %}


<style>
body {
    background: url('../image/SG/back.webp') no-repeat fixed center;
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
window.addEventListener('DOMContentLoaded', function() {

});
</script>
