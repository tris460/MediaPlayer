//Exportamos la interfaz porque la usaremos en otra parte
export interface Ad{
    //El contenido que van a tener los ads
    imageUrl: string;
    title: string;
    body: string;
    url: string;
}

//Lista con los anuncios, siguen la estructura de la interfaz
const ALL_ADS: Ad[] = [
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png',
      title: 'Curso Profesional de JavaScript',
      body:
        'Mejora tus habilidades en Javascript. Conoce Typescript y cómo puedes ocuparlo para mejorar el control de tus variables.',
      url: 'https://platzi.com/cursos/javascript-profesional/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-frontend-developer-8a49e681-3e22-408d-b886-2f47dfc9953a.png',
      title: 'Curso de Frontend Developer',
      body:
        'Domina las bases de HTML y CSS. Define la arquitectura de tu código y construye un sitio web usando componentes estáticos. ',
      url: 'https://platzi.com/cursos/frontend-developer/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-backend-node-8e6aa8a9-f7cd-42b7-bf4a-e1ee916a942b.png',
      title: 'Curso de Backend con Node.js',
      body:
        'Crea aplicaciones backend utilizando Node.js, Express y Mongo. Entiende cómo funciona Javascript en un servidor y escribe aplicaciones con Node.js.',
      url: 'https://platzi.com/cursos/backend-nodejs/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-prework-da6b0493-9908-40f3-ad53-f5d330b995b8.png',
      title:
        'Comienza tus proyectos de desarrollo para JavaScript configurando un entorno de desarrollo cómodo y adaptado a tus necesidades.',
      body:
        'Mejora tus habilidades en Javascript. Conoce Typescript y cómo puedes ocuparlo para mejorar el control de tus variables.',
      url: 'https://platzi.com/cursos/prework/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-autenticacion-passport-6d45426a-2b24-4757-8927-7bfaf54529dd.png',
      title: 'Curso de Autenticación con Passport.js',
      body:
        'Genera estrategias de autenticación Sign-In y Sign-Out usando Passport.js. Agrega autenticación con Facebook, Twitter y Google a tus desarrollos.',
      url: 'https://platzi.com/cursos/passport/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-backend-frontend-02b2ac18-331a-4959-85bf-0bd3c2aa009c.png',
      title: 'Curso de Backend for Frontend',
      body:
        'La ingeniería de software evoluciona día a día, no te quedes atrás. Ahora que eres un Desarrollador FullStack JavaScript necesitas evolucionar con el software, construye arquitecturas de software modernas.',
      url: 'https://platzi.com/cursos/bff/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-react-adec89d0-1c35-4c9c-847e-18c284dc79dd.png',
      title: 'Curso Práctico de React JS',
      body:
        'React es una de las librerías más utilizadas hoy para crear aplicaciones web. Aprende a través de la creación de la interfaz de PlatziVideo todo lo que necesitas para crear increíbles componentes con React.      ',
      url: 'https://platzi.com/cursos/react-ejs/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-react-redux-2ca3c0a5-fc53-437f-bfba-69e9ddd5a803.png',
      title: 'Curso de React Router y Redux',
      body:
        'Aprende de forma práctica a implementar React Router para manejar rutas en tus proyectos de frontend como un profesional.',
      url: 'https://platzi.com/cursos/react-router-redux/',
    },
];

//Aqui usamos Singleton para solo tener una instancia y que no se repitan los anuncios
class Ads {
    private static instance: Ads;
    //Aquí van a estar guardados los anuncios
    private ads: Ad[];

    private constructor (){
        this.initAds(); 
    }

    static getInstance(){
        //Verificar si ya tenemos una instancia sino, la creamos
        if(!Ads.instance){
            Ads.instance=new Ads();
        }
        return Ads.instance;
    }

    //Inicializamos los anuncios
    private initAds(){
        this.ads=[...ALL_ADS] //Hacemos una copia del arreglo para hacer un arreglo nuevo (this.ads)
    }
    //Forma de dar los ad a quien se los pida
    getAd(){
        //No tenemos ads infinitos, en algun momento se van a acabar, cuando se acaben, los volvemos a inicializar
        if(this.ads.length === 0){
            this.initAds();
        }
        //Pop saca un valor del arreglo y lo regresa
        return this.ads.pop();
    }
}
//Exportamos la clase ads
export default Ads;
