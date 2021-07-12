self.addEventListener('install', event =>{
    event.waitUntil(precache());
});

async function precache(){
    const cache= await caches.open("v1");
    return cache.addAll([
        //Archivos que queremos que tenga el caché
        '/',
        '/index.css',
        '/index.js',
        '/MediaPlayer.js',
        '/La Canción del Furret (Furret Walk) [Fandub Español Latino].mp4',
        'Seafret - Atlantis (Official Video).mp4',
        'Sol Pereyra — Nadie Te Preguntó [letra].mp4',
        '/Plugins/AutoPause.js',
        '/Plugins/AutoPlay.js',
        '/Plugins/PlayList.js',
    ]);
}