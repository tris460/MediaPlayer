//Importamos lo que necesitamos para trabajar
import MediaPlayer from '../../MediaPlayer';
import Ads, {Ad} from './Ads'; //Los Ad vienen de Ads, es una interfaz y se importa entre llaves

//Aquí vamos a implementar el plugin
class AdsPlugin {
    //Le damos el tipado a lo que necesitamos
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement; //Tiene un método que anuncia que cambio el tiempo es timeupdate
    private currentAd: Ad;
    
    constructor(){
        //Inicializamos lo que necesitamos
        this.ads = Ads.getInstance();
        //Para que al llamar a handleTimeUpdate llame al this correcto
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }
    
    //Todos los plugin tienen este método público
    run (player: MediaPlayer){
        //Guardamos las variables
        this.player = player;
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate); //Va a estar escuchando a los cambios de timeupdate
    }

    private handleTimeUpdate(){
        //Cada 30 segundos se despliega un anuncio nuevo
        const currentTime = Math.floor(this.media.currentTime);
        if(currentTime % 30 === 0){
            //Desplegar un anuncio
            this.renderAd()
        }
    }
    
    //Desplegar anuncios
    private renderAd(){
        if(this.currentAd){
            return;
        }
        //Tomamos un anuncio
        const ad = this.ads.getAd();
        this.currentAd=ad;

        //Registro de cual es el ad actual
        console.log(this.currentAd); 
    }
}

export default AdsPlugin;