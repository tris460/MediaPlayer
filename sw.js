const VERSION = 'v1';

self.addEventListener('install', event =>{
    event.waitUntil(precache());
});

self.addEventListener('fetch', event =>{
    const request = event.request;
    //Queremos solo peticiones GET
    if(request.method !== "GET"){
        return; //Si no es GET, hace el proceso normal
    }
    event.respondWith(cachedResponse(request))
})

async function precache(){
    const cache= await caches.open(VERSION);
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

async function cachedResponse(request){
    const cache = await caches.open(VERSION);
    return response || fetch(request);
}