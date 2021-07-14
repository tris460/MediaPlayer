import MediaPlayer from './MediaPlayer';
import AutoPlay from './Plugins/AutoPlay';
import PlayList from './Plugins/PlayList';
import AutoPause from './Plugins/AutoPause';
import Ads from './Plugins/Ads';

const video = document.querySelector('video');
const buttonPlay: HTMLElement = document.querySelector('button[id="Play"]');
const buttonMute: HTMLElement = document.querySelector('button[id="Mute"]');
//const buttonNext: HTMLElement = document.querySelector('button[id="Next"]');
const player = new MediaPlayer({el:video,
                                plugins:[new AutoPlay(), new AutoPause(), new Ads()], 
                                song:[new PlayList()]});
 
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.volumen();
//buttonNext.onclick = () => player.nextSong();

//Nos va a servir para saber si el navegador del usuario le da soporte a los serviceWorkers
if('serviceWorker' in navigator){
    navigator.serviceWorker.register ('./sw.js').catch(error =>{
        console.log(error.message)
    })
}