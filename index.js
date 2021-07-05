import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './Plugins/AutoPlay.js';

const video = document.querySelector('video');
const buttonPlay = document.querySelector('button[id="Play"]');
const buttonMute = document.querySelector('button[id="Mute"]');
const player = new MediaPlayer({el:video, plugins:[new AutoPlay()]});

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.volumen();
