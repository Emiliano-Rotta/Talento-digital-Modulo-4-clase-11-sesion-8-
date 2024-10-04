// Api de Harry Potter
// https://hp-api.herokuapp.com/api/characters

// Ejercicio 1: 
// Escribe una función asíncrona que realice dos peticiones a la API de Harry Potter para obtener información sobre dos personajes  y combine los resultados. Maneja los errores con try/catch.

// async function apiHP() {
//     try {
//         const peticionUno = await fetch("https://hp-api.herokuapp.com/api/characters");
//         const dataUno = await peticionUno.json();
//         const peticionDos = await fetch("https://hp-api.herokuapp.com/api/characters");// hago una nueva petición porque así lo pide la consigna, pero es una mala práctica hacer dos fetch exactamente iguales..
//         const dataDos = await peticionDos.json();

//         console.log(`El personaje uno es ${dataUno[0].name} y la casa es ${dataUno[0].house} y el personaje dos es ${dataDos[3].name} y la casa es ${dataDos[3].house}`)
//     } catch(error){
//         console.log(error)
//     }

// }

// apiHP()

//Ejercicio 2: 
// Escribe una función asíncrona que realice una peticion a la API de Harry Potter. Muestra en consola la mayor cantidad de informacion de "Ron Weasley". Maneja los errores con try/catch.

// async function ronW() {
//     try {
//         const respuesta = await fetch("https://hp-api.herokuapp.com/api/characters");
//         const data = await respuesta.json();
//         const dataR = {...data[2]}
//         console.log(`El personaje ${data[2].name} `)
//         console.log(dataR)
//     } catch(error){
//         console.log(error)
//     }    
// }
// ronW()

//--------------------------------------------------------------------------------------------
//                                       Clase 11 sesion 8
//--------------------------------------------------------------------------------------------

//Ajax
// Qué es Ajax?
// Ajax (Asynchronous JavaScript and XML) es una técnica de desarrollo web que permite que las aplicaciones web se comuniquen con un servidor de manera asíncrona, es decir, sin recargar la página completa. Aunque originalmente se refería al uso de XML para intercambiar datos, hoy en día, Ajax se utiliza principalmente con formatos como JSON.

// Ventajas de Ajax:

// Mejora la experiencia de usuario al evitar recargas completas de página.
// Permite actualizar solo partes específicas del contenido web de manera dinámica.
// Optimiza la comunicación con el servidor, disminuyendo el tiempo de carga y la latencia.

// Sintaxis
// $.ajax({
//     url:"https://ejemplo.com",
//     method: "GET",
//     dataType: "json",
//     success: //Colocar la funcion que quiero
//     error: error: function(error){
//     console.log("Hubo un error" , error.message)
// }
// })

// $(document).ready(function () {
//     $("#cargarUsuarios").on("click", function () {
//         $.ajax({
//             url: "https://jsonplaceholder.typicode.com/users",
//             method: "GET",
//             dataType: "json",
//             success: function (data) {
//                 // let filas = ""
//                 // data.forEach(usuario => {
//                 //     filas += `<tr>
//                 //                 <td>${usuario.id}</td>
//                 //                 <td>${usuario.username}</td>
//                 //                 <td>${usuario.email}</td>
//                 //             </tr>`

//                 // });
//                 let filas = '';
//                 for (let i = 0; i < data.length; i++) {
//                     filas += `<tr>
//                                 <td>${data[i].id}</td>
//                                 <td>${data[i].name}</td>
//                                 <td>${data[i].email}</td>
//                               </tr>`;
//                 }
//                 $("#tablaUsuarios").html(filas)
//             },
//             error: function(error){
//                 console.log("Hubo un error" , error.message)
//             }
//         })
//     })
// })



// Consigna: Usando jQuery y Ajax, realiza una petición GET a la API de https://jsonplaceholder.typicode.com/posts y muestra una lista de títulos de publicaciones en una lista desordenada (<ul>). 

// en index: <ul id="listaPosts"></ul>

// $(document).ready(function () {
//     $("#cargarPost").on("click", function () {
//         $.ajax({
//             url: "https://jsonplaceholder.typicode.com/posts",
//             method: "GET",
//             dataType: "json",
//             success: function(data){
//                 let lista = ""
//                 data.forEach(post => {
//                     lista += `<li>${post.title}</li>`
//                 });
//                $("#listaPosts").html(lista)

//             },
//                 error: function (error) {
//                     console.log("Hubo un error", error.message)
//                 }
//         })
//     })
// })


// //lo mismo que recien pero con una pagina erronea para que funcione el error

// $(document).ready(function () {
//     $("#cargarPost").on("click", function () {
//         $.ajax({
//             url: "https://jsonplaceholder.typicode.com/pagina-no-encontrada",
//             method: "GET",
//             dataType: "json",
//             success: function(data){
//                 let lista = ""
//                 data.forEach(post => {
//                     lista += `<li>${post.title}</li>`
//                 });
//                $("#listaPosts").html(lista)

//             },
//                 error: function (error) {
//                     console.log("Hubo un error", error)
//                     if (error.status === 404) {
//                         alert("ups, estamos con problemas, vuelve a cargar")
//                     }
//                 }
//         })
//     })
// })

//--------------------------------------------------------------------------------

// $(document).ready(function () {
//     $('#formPost').on('submit', function (event) {
//         event.preventDefault()
//         const nuevoPost = {
//             title: $("#titulo").val(),
//             body: $("#contenido").val(),
//             userId: 1
//         };
//         $.post("https://jsonplaceholder.typicode.com/posts", nuevoPost, function(data) {
//             $("#respuesta").html(`<p>Post creado con ID: ${data.id}</p>
//                                   <p>Titulo: ${data.title}</p>
//                                   <p>Contenido: ${data.body}</p>`)
//         })

//     })

//     })


//--------------------------------------------------------------------------------
//                               API
//--------------------------------------------------------------------------------

// 1. Rick and Morty API
// Descripción: Proporciona datos de personajes, ubicaciones y episodios de la serie Rick and Morty.
// URL: https://rickandmortyapi.com/
// Ejemplo de endpoint: /api/character

// 2. JSONPlaceholder
// Descripción: Una API falsa que puedes usar para probar tus aplicaciones con datos de prueba (posts, comentarios, usuarios, etc.).
// URL: https://jsonplaceholder.typicode.com/
// Ejemplo de endpoint: /posts


// 3. Dog CEO's Dog API
// Descripción: Devuelve imágenes aleatorias y por raza de perros.
// URL: https://dog.ceo/dog-api/
// Ejemplo de endpoint: /breeds/image/random


// 4. The Cat API
// Descripción: Proporciona imágenes aleatorias de gatos.
// URL: https://thecatapi.com/
// Ejemplo de endpoint: /v1/images/search


// 5. Advice Slip API
// Descripción: Ofrece consejos aleatorios en formato de texto.
// URL: https://api.adviceslip.com/
// Ejemplo de endpoint: /advice


// 6. OpenWeatherMap (Free Weather Data)
// Descripción: Devuelve datos de clima en tiempo real para ciudades del mundo. Tiene un endpoint sin clave que ofrece datos muy básicos.
// URL: https://openweathermap.org/
// Ejemplo de endpoint: /data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22 (sin clave)


// 7. Bored API
// Descripción: Proporciona ideas de actividades para hacer cuando estés aburrido.
// URL: https://www.boredapi.com/
// Ejemplo de endpoint: /api/activity


// 8. RandomUser API
// Descripción: Genera usuarios aleatorios para pruebas o demostraciones.
// URL: https://randomuser.me/
// Ejemplo de endpoint: /api/


// 9. Universities API
// Descripción: Ofrece información sobre universidades de todo el mundo.
// URL: http://universities.hipolabs.com/
// Ejemplo de endpoint: /search?country=United+States

// 10. JokeAPI
// Descripción: Devuelve chistes aleatorios con diferentes categorías (seguro para el trabajo, NSFW, etc.).
// URL: https://v2.jokeapi.dev/
// Ejemplo de endpoint: /joke/Programming


//Ejercicio que haremos mañana

// Consigna 
// Objetivo: Vas a desarrollar una página web dinámica que cargue información sobre personajes de la serie Rick and Morty utilizando la API pública de Rick and Morty. Usarás jQuery y Ajax para realizar las solicitudes de datos, y las mostrarás en forma de cards con información de cada personaje. Deberás usar funciones flecha y sintaxis moderna de ES6.

// Requisitos:
// Estructura HTML:

// Crea un archivo index.html que contenga:
// Un contenedor donde se mostrarán las 20 cards de los personajes.
// Cada card debe contener la imagen del personaje, el nombre debajo de la imagen, y el estado (vivo, muerto, desconocido) en un tamaño más pequeño.
// CSS:

// El archivo styles.css debe dar estilo a las cards de los personajes. Deben ser del mismo tamaño, estar organizadas en una cuadrícula, y tener un diseño atractivo (puedes inspirarte en otros diseños de tarjetas). Usa Flexbox para posicionarlas. (no es lo central en este módulo, no te detengas mucho tiempo aqui.)
// JavaScript (ES6):

// Usa jQuery y Ajax para hacer una solicitud a la API de Rick and Morty (https://rickandmortyapi.com/api/character) para obtener los primeros 20 personajes.
// Procesa los datos recibidos y crea dinámicamente las cards con la información de cada personaje.
// Usa funciones flecha para manipular los datos y renderizar las cards en el HTML.
// Detalles técnicos:

// Cada card debe contener:
// Imagen del personaje.
// Nombre debajo de la imagen.
// Estado del personaje (vivo, muerto o desconocido) en un tamaño de texto más pequeño.

// Si hay algún error al hacer la solicitud a la API, muestra un mensaje de error en la página.
// Recursos:

// API de Rick and Morty: La API que vas a usar es pública y no necesita autenticación. Puedes hacer solicitudes GET al endpoint https://rickandmortyapi.com/api/character para obtener datos sobre los personajes.
