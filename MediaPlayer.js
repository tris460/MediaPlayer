function MediaPlayer(config){
    this.media =config.el;
    this.plugins = config.plugins || [];
    this.song = config.song;
    this._initPlugins();
    
}
 
MediaPlayer.prototype._initPlugins=function(){
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted(){
            return this.media.muted;
        },
        set muted(value){
            this.media.muted=value;
        }
    }
    this.plugins.forEach(plugin => { 
        plugin.run(player);
    });
}
MediaPlayer.prototype.play=function(){
    this.media.play();
};
MediaPlayer.prototype.pause=function(){
    this.media.pause();
}
MediaPlayer.prototype.togglePlay=function(){
    if(this.media.paused){
        this.play();
    }else{
        this.pause();
    }
}; 

MediaPlayer.prototype.mute=function(){
    this.media.muted = true;
}
MediaPlayer.prototype.unmute=function(){
    this.media.muted = false;
}
MediaPlayer.prototype.volumen=function(){
    if(this.media.muted){
        this.unmute();
    }else{
        this.mute();
    }
}

MediaPlayer.prototype.nextSong=function(){
    if(this.media.getAttribute("src")=="./La Canción del Furret (Furret Walk) [Fandub Español Latino].mp4"){
        this.media.setAttribute("src", "./Seafret - Atlantis (Official Video).mp4");
    } else if (this.media.getAttribute("src")=="./Seafret - Atlantis (Official Video).mp4"){
        this.media.setAttribute("src","./Sol Pereyra — Nadie Te Preguntó [letra].mp4");
    } else {
        this.media.setAttribute("src", "./La Canción del Furret (Furret Walk) [Fandub Español Latino].mp4");
    }

    this.media.play();
}

export default MediaPlayer;