/*
    Simple music page for Galgamer
    by Kiriha@galgamer.eu.org
*/
let mPlayer;// = document.getElementById('mPlayer');
let mDetailsTitle = document.getElementById('text-title');
let mDetailsArtist = document.getElementById('text-artist');
let mDetailsDesc = document.getElementById('text-details');

let neteaseGo = document.getElementById('neteaseGo');
let qqGo = document.getElementById('qqGo');
let kugouGo = document.getElementById('kugouGo');
let mPlaylist = document.getElementById('playlist');
let shareInfo = document.getElementById('shareInfo');

let allMusic = [];
let nowPlaying = 0;
let playerEl;

let doNotNavigate = false;

const beforeUnloadListener = (e) => {
    if (playerEl.played) {
        e.preventDefault();
        e.returnValue = '正在播放中，確認退出嗎？';
    }
};

async function main(){
    //showBetaAlert();
    
    allMusic = await getAllMusic();
    
    initPlayer();
    buildPlaylist();
    setupBtn();
    setTimeout(setUpBg, 1000);
    // Find ID from URL
    let id = parseInt(getIdByUrl());
    if(id >= 0 && id < allMusic.length){
        doNotNavigate = true;
        switchTo(reverseL(getIdByUrl()), true);
    }else{
        addState(nowPlaying);
    }
    
}

function setUpBg(){
    //plog('Setting up classlist.');
    let bgMask = document.createElement('div');
    bgMask.id = 'bgMask';
    document.body.appendChild(bgMask);
    document.querySelector('body').classList.add('playerpatch');
    document.querySelector('#banner').classList.add('playerpatch');
    document.querySelector('#board').classList.add('playerpatch');
    document.querySelector('.full-bg-img > .mask').classList.add('playerpatch');
}

function reverseL(index){
    return allMusic.length - 1 - index;
}

function showBetaAlert(){
    makeAlert(
        'success',
        '<h4 class="alert-heading">Beta 版</h4>' + 
        '<p class="mb-0">收錄了已有的 Galgame 樂曲</p>',
        false
    );
}

async function getAllMusic(){
    // reverse the order, lastest first.
    let result = await fetch('/music/music.json?1204')
                        .then(resp => resp.json())
                        .then(data => data)
    plog('Playlist items: ' + result.length);
    return result.reverse();
}

function getIdByUrl(){
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function addState(new_id){
    let stateObj = { id: new_id };
    window.history.pushState(stateObj, "id:" + new_id,
                                window.location.origin + window.location.pathname + 
                                '?id=' + reverseL(new_id));
}

window.onpopstate = function(e){
    if(e.state){
        moveTo = e.state.id;
        doNotNavigate = true;
        //document.title = e.state.pageTitle;
        switchTo(moveTo);
    }
};

function initPlayer(){
    mPlayer = document.createElement('div');
    mPlayer.id = 'mPlayer';
    mPlayer.classList.add('fixed-bottom', 
     'col-sm-12', 'col-md-8', 'col-lg-6', 'col-xl-4',
     'mb-2', 'mx-auto', 'col');
    document.querySelector('main').appendChild(mPlayer);

    playerEl = new cplayer({
        element: mPlayer,
        playlist: allMusic,
        big: true,
        width: '100%',
        volume: 0.5,
        showPlaylistButton: 'false',
        dropDownMenuMode: 'none'
    })
    playerEl.on('openaudio', function(ev){
        updatePage(this.nowplaypoint, true);
    });

    // 增加 正在播放中的關閉頁面確認
    window.addEventListener('beforeunload', beforeUnloadListener);
    // custom player CSS
    let playerCSS = document.getElementById('PlayerCSS');
    playerCSS.parentElement.removeChild(playerCSS);
    document.body.appendChild(playerCSS);
}

function setupBtn(){
    neteaseGo.addEventListener('click', function(ev){
        let neteaseid = allMusic[nowPlaying].netease;
        if(neteaseid){
            insertToast('success', '正在調用網易雲', 3000);
            // 暫停退出確認
            window.removeEventListener('beforeunload', beforeUnloadListener);
            window.location = "orpheus://song/" + neteaseid;
            window.addEventListener('beforeunload', beforeUnloadListener);
        }else{
            insertToast('danger', '網疑雲沒有這首歌', 3000);
        }
    })
    //qqmusic://qq.com/media/playSonglist?p=
    //{"song":[{"type":"0","songmid":"001BOsky3gtuas"}],"action":"play"}
    qqGo.addEventListener('click', function(ev){
        let qqid = allMusic[nowPlaying].qq;
        if(qqid){
            let obj = {
                "song":[
                    {
                        "type": "0",
                        "songmid": qqid
                    }
                ],
                "action": "play"
            }
            let params = JSON.stringify(obj);
            insertToast('success', '正在調用 QQ 音樂', 3000);
            // 暫停退出確認
            window.removeEventListener('beforeunload', beforeUnloadListener);
            window.location = "qqmusic://qq.com/media/playSonglist?p=" + encodeURIComponent(params);
            window.addEventListener('beforeunload', beforeUnloadListener);
        }else{
            insertToast('danger', 'QQ 音樂沒有這首歌', 3000);
        }
    })
    kugouGo.addEventListener('click', function(ev){
        insertToast('danger', '無法打開酷狗音樂', 3000);
    })
    document.getElementById('shareBtn').removeEventListener('click', shareHandler);
    document.getElementById('shareBtn').addEventListener('click', function(_){
        insertToast('success', '正在調用 Telegram', 3000);
        let link = window.location.origin + '/api/music/' + reverseL(nowPlaying);
        
        let title = document.querySelectorAll('meta[property="og:title"]')[0].content;
        let url = title;
        let desc = '🔗️' + link;
        //nielog(url);
        //nielog(desc);
        url = encodeURIComponent(url);
        desc = encodeURIComponent(desc);
        
        // 暫停退出確認
        window.removeEventListener('beforeunload', beforeUnloadListener);
        
        // TG call
        window.location = 'tg://msg_url?url=' + url + '&text=' + desc;
        
        window.addEventListener('beforeunload', beforeUnloadListener);
    })
    let onetimeplaybtn = document.createElement('a');
    onetimeplaybtn.classList.add("play-btn");
    onetimeplaybtn.addEventListener('click', playAndRemoveOneTimePlay)
    let div = document.getElementById("onetimeplay");
    div.appendChild(onetimeplaybtn);
}

function playAndRemoveOneTimePlay(){
    playerEl.play();
    let div = document.getElementById("onetimeplay");
    removeFadeOut(div, 135);
}

function makePlaylistItem(index){
    /*
<li class="media my-3 mx-1 col-lg-auto col-md-12">
  <a href="javascript:;"><img class="align-self-center mr-3 rounded-lg"
      width="100px" alt="さくら雫"
      src="..."></a>
  <div class="media-body">
    <a href="javascript:;">
      <h5 class="mt-1 mb-2 font-weight-bold">...</h5>
    </a>
    <p class="my-1 align-self-center">...</p>
  </div>
</li>
    */

    let mediaEl = document.createElement('li');
    mediaEl.setAttribute('class', 'media my-3 mx-1 col-lg-auto col-md-12');

    mediaEl.innerHTML = `
<div class="media-frame row align-content-center mr-3">
    <div class="media-poster mr-3 d-flex">
        <img class="align-self-center rounded-lg"
        width="100px"
        alt="${allMusic[index].name}"
        src="${allMusic[index].poster}">
    </div>
    <div class="media-body">
        <a href="javascript:;">
            <h5 class="mt-1 mb-2 font-weight-bold">${allMusic[index].name}</h5>
        </a>
        <p class="my-1 align-self-center">${ allMusic[index].details}</p>
    </div>
</div>
    `
    //mediaEl.addEventListener('click',() => switchTo(index));
    mediaEl.querySelector('.media-poster').addEventListener('click',() => switchTo(index));
    mediaEl.querySelector('h5').addEventListener('click',() => switchTo(index));
    return mediaEl;
}


function buildPlaylist(){
    for (let i = 0; i < allMusic.length; i++){
        let listItem = makePlaylistItem(i);
        mPlaylist.appendChild(listItem);
    }
}

function setDetailsCard(){
    mDetailsDesc.innerHTML = allMusic[nowPlaying].details;
    mDetailsArtist.innerText = '🎤️' + allMusic[nowPlaying].artist;
    mDetailsTitle.innerText = allMusic[nowPlaying].name;
    document.documentElement.style.setProperty('--right-bg', `url('${allMusic[nowPlaying].poster}')`);
}

function switchTo(index, notPlay){
    if (nowPlaying === index){
        playerEl.play();
        return;
    };
    playerEl.to(index);
    if(!notPlay)playerEl.play();
}

function updatePage(index){
    nowPlaying = index;
    setDetailsCard();
    let title = document.querySelectorAll('meta[property="og:title"]')[0];
    title.content = allMusic[index].name + ' - ' + allMusic[index].artist;
    document.title = allMusic[index].name + ' - ' + allMusic[index].artist;
    insertToast('info', 
    `Now Playing: <br>
    <strong><em>${allMusic[index].name}</em></strong>
    <br>
    comes from the game:<br>
    <strong><em>${allMusic[index].game}</em></strong>
    `, 
    4000);
    document.documentElement.style.setProperty('--bg-url', `url('${allMusic[index].poster}')`);
    if(doNotNavigate){
        doNotNavigate = false;
    }else{
        addState(index);
    }
}

function plog(text) {
    let currentdate = new Date(); 
    let datetime = "[" +  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds() + "] ";
    console.log('[Player]' + datetime + text);
}

main();