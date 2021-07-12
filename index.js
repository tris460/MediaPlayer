import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './Plugins/AutoPlay.js';
import PlayList from './Plugins/PlayList.js';
import AutoPause from './Plugins/AutoPause.js';

const video = document.querySelector('video');
const buttonPlay = document.querySelector('button[id="Play"]');
const buttonMute = document.querySelector('button[id="Mute"]');
const buttonNext = document.querySelector('button[id="Next"]');
const player = new MediaPlayer({el:video,
                                plugins:[new AutoPlay(), new AutoPause()], 
                                song:[new PlayList()]});
 
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.volumen();
buttonNext.onclick = () => player.nextSong();

//Nos va a servir para saber si el navegador del usuario le da soporte a los serviceWorkers
if('serviceWorker' in navigator){
    navigator.serviceWorker.register ('./sw.js').catch(error =>{
        console.log(error.message)
    })
}