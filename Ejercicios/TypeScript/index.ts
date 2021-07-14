// console.log('Hello, Typescript');

// function add(a: number, b: number){
//     return a+b;
// }
// const sum = add(3,2,)

// //Boolean
// let muted: boolean = true;
// muted = false;

// //Números
// let numerador: number = 42;
// let denominador: number = 2;
// let resultado = numerador / denominador;

// //String
// let nombre: string = "Rogelio";
// let saludo = `Me llamo ${nombre}`;

// //Arreglos: podemos decidir si será una mezcla de tipos, o de un tipo de dato...
// let nombres: string[] = [];
// nombres=["Ana","Juan","Paco","Erick"];

// let numberAndPeople: Array<string | number> = [];
// numberAndPeople=["Ana","Juan",9,1];

// //Enum, los valores que tenga, son los únicos, no hay más
// enum Color {
//     Rojo,
//     Verde,
//     Azul
// }
// let colorFav: Color = Color.Azul;
// console.log(colorFav); //Va a imprimir el índice

// enum Color2 {
//     Rosa = "Rosa",
//     Gris = "Gris",
//     Negro = "Negro"
// }
// let colorFav2: Color2 = Color2.Rosa;
// console.log(colorFav2); //Imprime el texto

// //Any: Para cuando no sabemos el tipo de valor
// let comodin: any = "Hola"; //Primero lo guardamos como string
// comodin = {nombre:"Erick",apellido:"González"} //Despues como un object y no marca error

// //Object
// let someObject:object = { type: "Wildcard"}

//Funciones
function add(a: number,b:number):number{ //Con los ':' después del paréntesis decimos el tipo de retorno
    return a+b
}
const sum=add(12,3);

//Funciones que regresan funciones
//Creador de sumas
function createAdder (a:number): (number)=>number { //(number)=>number indica que el tipo de retorno es una función
    return function (b:number){
        return b + a;
    }
}
const addFour = createAdder(4);
const fourPlusSix = addFour(6);

//Función que sus parámetros no son obligatorios
function fullName(firstName:string, lastName?:string){ //El '?' indica que puede quedar undefined
    return `${firstName} ${lastName}`;
}
const alejandro = fullName('Alejandro');

function fullName2(firstName:string, lastName:string = "Sánchez"){ //Agrega un valor default
    return `${firstName} ${lastName}`;
}
const gabriel = fullName('Gabriel');