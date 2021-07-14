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
    //Actualizamos el caché
    event.waitUntil(updateCache(request));
})

async function precache(){
    const cache= await caches.open(VERSION);
    return cache.addAll([
        // //Archivos que queremos que tenga el caché
        // '/',
        // '/index.css',
        // '/index.js',
        // '/MediaPlayer.js',
        // 'Seafret - Atlantis (Official Video).mp4',
        // 'Sol Pereyra — Nadie Te Preguntó [letra].mp4',
        // '/Plugins/AutoPause.js',
        // '/Plugins/AutoPlay.js',
        // '/Plugins/PlayList.js',
    ]);
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION);
    return cache || fetch(request);
}

async function updateCache(request){
    const cache = await caches.open(VERSION);
    const response = await fetch(request); //Traemos los datos de la red
    return cache.put(request,response);
}