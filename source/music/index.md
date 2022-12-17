---
title: Galgame 金曲
date: 2021-09-30 21:37:54
tags:
  - Galgame乐曲收录
excerpt: '这里收录了文章中出现过的 Galgame 乐曲'
banner_img: '/image/music/banner.jpg'
---

<img src='/image/music/banner.jpg' width=0px alt="placeholder"/>

{% raw %}

<style>
#detailsCard {
  padding: 0;
}
#detailsCard, #playlist img {
  box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
}
body {
  transition: background-image 0.8s ease-in-out;
}
body.playerpatch {
    background: var(--bg-url) no-repeat fixed;
    background-position: right 50% top 20%;
    background-size: cover;
    /*-webkit-font-smoothing: unset;*/
}
#banner.playerpatch {
    background: url('')!important;
    background-color: transparent!important;
}
#board.playerpatch {
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-color: var(--board-bg-color2);
}
.full-bg-img > .mask.playerpatch {
  background-color: rgba(0,0,0,0) !important;
}
:root {
  --board-bg-color2: rgba(255,255,255,0.75);
  --bg-url: url('');
  --chara-card-color: #f7f7f7ff;
  --chara-card-color-trans: #ffffff00;
  --right-bg: url('');
}
[data-user-color-scheme='dark'] {
  --board-bg-color2: rgba(0,0,0,0.75);
  --chara-card-color: #353535ff;
  --chara-card-color-trans: #35353500;
  /* --bg-url: url('../image/Natsunoiro/bg-d.webp') */
}
#bgMask {
  width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(5px);
    z-index: -99;
}
.charname {
  font-size: 150%;
}
.namearea hr {
  margin: 1rem 0;
}
.sp-character img, .img-shade {
  filter: drop-shadow(0 0 6px #000c);
}
.sp-character {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);

  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  
  background-color: var(--chara-card-color);
  position: relative;
  /* background-color: transparent;
  background-image: var(--this-bg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */

}
.sp-character .char-overlay {
  background-color: var(--chara-card-color);
  height: 300px;
  background-image: linear-gradient(to right, var(--chara-card-color) calc(100% - 290px), var(--chara-card-color-trans) calc(100% - 175px)), var(--right-bg);
  background-repeat: no-repeat, no-repeat;
  background-position: bottom 0px right 0px;
  background-size: contain;
  transition: background-image 0.8s ease-in-out;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 767px) {
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
    /*min-height: 250px;*/
    background-image: var(--right-bg);
    background-size: cover;
    background-position: bottom 0px right 0px; 
  }
  :root { /* 配色 */
    --chara-card-color: #ffffff87;
  }
  [data-user-color-scheme='dark'] {
    --chara-card-color: #1a1a1aa6;
  }
}

.play-btn {
  width: 45px;
  height: 45px;
  background: #ffffffdd;
  border-radius: 50%;
  position: relative;
  display: block;
  margin: 15px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.6);
}

/* triangle */
.play-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateX(-40%) translateY(-50%);
  transform: translateX(-40%) translateY(-50%);
  transform-origin: center center;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 13px solid #f44336;
  z-index: 100;
  -webkit-transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
#onetimeplay {
  position: absolute;
  top: 222px;
  left: 7px;
}
</style>



<div class="container">
    
  <div class='row sp-character'>
    <div class="col-12 char-overlay row">
      <div class="pc-left col-12 col-md-8">
        <div class="namearea col-12 pt-2">
          <div id='text-title' class="charname font-serif font-weight-bold">
            <!-- title -->
            Loading...
          </div>
          <div id='text-artist' class="yomi">
            <!-- artist -->
          </div>
          <hr />
        </div>
        <div id="text-details" class="infoarea col-12">
          <!-- details -->
        </div>  
        <div id="onetimeplay">
          
        </div>
      </div>
    </div>  
  </div>

  <div class="row">
      <div class="dropdown col-sm md-auto align-self-start my-3 d-none">
        <button type="button" class="my-1 btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true">
          收藏到...
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" id="neteaseGo">網疑雲</a>
          <a class="dropdown-item" id="qqGo">QQ 音樂</a>
          <a class="dropdown-item" id="kugouGo">酷狗</a>
        </div>
        
      </div>
  </div>
  <div class="my-1">
      <ul class="row list-unstyled" id="playlist">

      </ul>
  </div>
</div>



<script src="/js/cplayer.min.js"></script>
<script defer src="/js/music_page.js?1205"></script>

<style id="PlayerCSS">
  .cp-mainbody .cp-poster {
    display: none;
  }
</style>
<script>
  TOAST_LOC = 'top';
</script>

{% endraw %}
