/*

DOM /Document Object Model /Modelo de Objetos del Documento)

Cuando creamos páginas que usan HTML + CSS estamos creando páginas estáticas (porque no tienen interactividad), cuando agregamos JS, nuestras páginas se convierten en sitios dinámicos (tienen interactividad).

El navegador lee el documento html de arriba a abajo, de izquierda a derecha (renderización).

Para que uno página se renderice correctamente, se toma en cuenta el contenido, el peso de las imágenes, la conexión a internet, etc.

Cuando el documento se renderiza, se crea un "árbol" (DOM), tiene muchas ramas que son las etiquetas y cada uno de los elementos que tenemos dentro de esas etiquetas se consideran "hojas" (nodos).

¿Qué es un nodo?
Representación más básica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, puede ser un texto, incluso un comentario.

    - Document: Nodo raiz, a partir del cual se derivan los demás nodos. Es el objeto a partir del cual se puede acceder a cualquier elemento dentro de él. Todos los nodos derivan de este.

    - Element: Son nodos definidos por etiquetas html (div, h1, p, img, head, script, etc), ya sea que se vean o no se vean (etiquetas que interpeta el navegador).

    -Text: El testo que hay dentro de un elemento se considera un nodo, cono la característica que es un nodo hijo.

    - Atribbutes: Los atributos de las etiquetas también se convierten en nodos. Son nodos que están asociados a un elemento y se pueden considerar también nodos hijos.

    - Comment: Los comentarios también son un nodo, porque forma parte del documento.


    ¿Para qué utilizamos JS en un DOM?
        - Agregar elementos HTML
        - Modificar elementos HTML
        - Borrar elementos HTML

*/

//Comenzamos a trabajar con los nodos de mi documento html

//1. Paso Guardaar los elementos HTML en variables de JS (let, var, const)

/*Método de selección de elementos: Permiten traer una etiqueta html y guardarla para su uso particular.

    - Métodos tradicionales
        - getElementByID (Trae un elemento por ID)
        - getElementByTagName
        - getElementsByClassName

*/

//Aquí obtengo un elemento por id
let nombrePaciente = document.getElementById("nombrePaciente");
console.log(nombrePaciente);

//Aquí obtengo varios elementos por clase
const columnas = document.getElementsByClassName("col");
console.log(columnas);

//Aquí obtengo varios elementos por etiqueta
const inputs = document.getElementsByTagName("input");
console.log(inputs);

/*
Métodos actuales

La única diferencia entre el querySelector y el getElement, es que tenemos que especificar el tipo de selector que usaremos (. para las clases, # para los id)

    - document.querySelector
    - document.querySelectorAll
*/

//Aquí obtengo un elemento por el selector #
let containerPadre = document.querySelector("containerPadre");
console.log(containerPadre);

//Aquí obtengo varios elementos por el selector.
let containers = document.querySelectorAll(".container");
console.log(containers);

/*
Métodos para modificar elementos en su texto

    - innerHTML :Esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. Asignaos una cadena de texto y podemos modificar o eliminar el texto. (ya existe un texto)

    -textContent: Cambiar o recuperar el contenido dentro de un elemento. Podemos modificar el texto (crear un texto nuevo)

*/

//Modificando el texto de un h1 con innerHTML
let titulo = document.getElementById("titulo");

titulo.innerHTML = "Nuevo texto de mi título";

//Creando un nuevo texto con innerHTML
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
mensajeConfirmacion.innerHTML = "<p>Mensaje de Confirmación</p>";

/*
Crear elementos

    - Crear el elemento
        - createElement
        - createTextNode
        - createComment

    - Poner el elemento
        - append
        - appendChild

*/

//Creando un elemento con createElement
let imagen = document.createElement("img");

//Crear los atributos de un elemento
imagen.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
imagen.alt = "Foto de perrito feliz";

//Poner mi imagen en el contenedor de mensajeConfirmacion
mensajeConfirmacion.appendChild(imagen);



