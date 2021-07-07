import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './Plugins/AutoPlay.js';
import PlayList from './Plugins/PlayList.js';

const video = document.querySelector('video');
const buttonPlay = document.querySelector('button[id="Play"]');
const buttonMute = document.querySelector('button[id="Mute"]');
const buttonNext = document.querySelector('button[id="Next"]');
// const selector = document.querySelector('select');
const player = new MediaPlayer({el:video,
                                plugins:[new AutoPlay()], 
                                song:[new PlayList()]});
 
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.volumen();
// selector.onchange = () => player.nextSong();
buttonNext.onclick = () => player.nextSong();
