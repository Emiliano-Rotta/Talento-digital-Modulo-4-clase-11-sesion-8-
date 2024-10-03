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

$(document).ready(function () {
    $("#cargarUsuarios").on("click", function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            method: "GET",
            dataType: "json",
            success: function (data) {
                // let filas = ""
                // data.forEach(usuario => {
                //     filas += `<tr>
                //                 <td>${usuario.id}</td>
                //                 <td>${usuario.username}</td>
                //                 <td>${usuario.email}</td>
                //             </tr>`

                // });
                let filas = '';
                for (let i = 0; i < data.length; i++) {
                    filas += `<tr>
                                <td>${data[i].id}</td>
                                <td>${data[i].name}</td>
                                <td>${data[i].email}</td>
                              </tr>`;
                }
                $("#tablaUsuarios").html(filas)
            },
            error: function(error){
                console.log("Hubo un error" , error.message)
            }
        })
    })
})



// Consigna: Usando jQuery y Ajax, realiza una petición GET a la API de https://jsonplaceholder.typicode.com/posts y muestra una lista de títulos de publicaciones en una lista desordenada (<ul>). 

// en index: <ul id="listaPosts"></ul>