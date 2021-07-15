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
    private adsContainer: HTMLElement;
    
    constructor(){
        //Inicializamos lo que necesitamos
        this.ads = Ads.getInstance();
        //Para que al llamar a handleTimeUpdate llame al this correcto
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
        this.adsContainer=document.createElement('div');
    }
    
    //Todos los plugin tienen este método público
    run (player: MediaPlayer){
        //Guardamos las variables
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
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
        //Para que no salgan varios anuncios a la ve, si ya hay uno, no poner otro
        if(this.currentAd){
            return;
        }
        //Tomamos un anuncio
        const ad = this.ads.getAd();
        this.currentAd=ad;
        this.adsContainer.innerHTML=`
        <div class="ads">
        <a class="ads__link" href="${this.currentAd.url}" target="_blank">
          <img class="ads__img" src="${this.currentAd.imageUrl}" />
          <div class="ads__info">
            <h5 class="ads__title">${this.currentAd.title}</h5>
            <p class="ads__body">${this.currentAd.body}</p>
          </div>
        </a>
      </div>`;

        setTimeout(()=>{
            this.currentAd=null;
            this.adsContainer.innerHTML='';
        },30000);
        // console.log(this.currentAd); 
    }
}

export default AdsPlugin;