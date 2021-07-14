class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array <any>;
    song: any;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.song = config.song;
        this.initPlugins();
    }
     private initPlugins() {
        // const player = {
        //     play: () => this.play(),
        //     pause: () => this.pause(),
        //     media: this.media,
        //     get muted() {
        //         return this.media.muted;
        //     },
        //     set muted(value) {
        //         this.media.muted = value;
        //     }
        // };
        this.plugins.forEach(plugin => {
            plugin.run(this)
            //plugin.run(player);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    volumen() {
        if (this.media.muted) {
            this.unmute();
        } else {
            this.mute();
        }
    }
    nextSong() {
        if (this.media.getAttribute("src") == "./La Canción del Furret (Furret Walk) [Fandub Español Latino].mp4") {
            this.media.setAttribute("src", "./Seafret - Atlantis (Official Video).mp4");
        } else if (this.media.getAttribute("src") == "./Seafret - Atlantis (Official Video).mp4") {
            this.media.setAttribute("src", "./Sol Pereyra — Nadie Te Preguntó [letra].mp4");
        } else {
            this.media.setAttribute("src", "./La Canción del Furret (Furret Walk) [Fandub Español Latino].mp4");
        }
        this.media.play();
    }
}
 



export default MediaPlayer;