
let player = new Array();
function initPlayer(){
    player[0] = new cplayer({
        element: document.getElementById('player0'),
        playlist:  [
            {
                poster: 'https://s3static-zone0.galgamer.eu.org/audio-2d35/senmomo/cover.jpg',
                name: 'ゆかし香り',
                artist: 'Active Planets',
              src: 'https://s3static-zone0.galgamer.eu.org/audio-2d35/senmomo/%E3%82%86%E3%81%8B%E3%81%97%E9%A6%99%E3%82%8A.mp3',
             
            }
          ]
    });
    player[1] = new cplayer({
        element: document.getElementById('player1'),
        playlist: [
          {
            poster: 'https://s3static-zone0.galgamer.eu.org/audio-2d35/senmomo/cover.jpg',
              name: '風見鶏',
              artist: 'Active Planets',
            src: 'https://s3static-zone0.galgamer.eu.org/audio-2d35/senmomo/%E9%A2%A8%E8%A6%8B%E9%B6%8F.mp3',
          }
        ]
      });
      player[2] = new cplayer({
        element: document.getElementById('player2'),
        playlist: [
          {
            poster: 'https://s3static-zone0.galgamer.eu.org/audio-2d35/senmomo/cover.jpg',
              name: '君がため',
              artist: 'Active Planets',
            src: 'https://s3static-zone0.galgamer.eu.org/audio-2d35/senmomo/%E5%90%9B%E3%81%8C%E3%81%9F%E3%82%81.mp3',
          }
        ]
      });
      player[3] = new cplayer({
        element: document.getElementById('player3'),
        playlist: [
          {
            poster: 'https://s3static-zone0.galgamer.eu.org/audio-2d35/senmomo/cover.jpg',
              name: 'まことの華',
              artist: 'Active Planets',
            src: 'https://s3static-zone0.galgamer.eu.org/audio-2d35/senmomo/%E3%81%BE%E3%81%93%E3%81%A8%E3%81%AE%E8%8F%AF.mp3',
          }
        ]
      });
      player[4] = new cplayer({
        element: document.getElementById('player4'),
        playlist: [
          {
            poster: 'https://s3static-zone0.galgamer.eu.org/audio-2d35/senmomo/cover.jpg',
              name: '月夜に舞う恋の花',
              artist: 'ういにゃす',
            src: 'https://s3static-zone0.galgamer.eu.org/audio-2d35/senmomo/%E6%9C%88%E5%A4%9C%E3%81%AB%E8%88%9E%E3%81%86%E6%81%8B%E3%81%AE%E8%8A%B1.mp3',
          }
        ]
      });
      player[5] = new cplayer({
        element: document.getElementById('player5'),
        playlist: [
          {
            poster: '../image/Senmomo/music/cover.webp',
              name: '悠遠抄',
              artist: 'Airots',
            src: 'https://s3static-zone0.galgamer.eu.org/audio-2d35/senmomo/%E6%82%A0%E9%81%A0%E6%8A%84.mp3',
          }
        ]
      });

    for(var p=0;p<6;p++){
      (
        function () {
          var temp = p;
          player[temp].on('play',function(ev){
            pauseother(temp);
          })
        })();
    }
}

function pauseother(index){
    for(var n=0;n<6;n++){
        if(player[n].played&&n!=index){
            player[n].pause();
            break;
        }
    }
}

initPlayer();