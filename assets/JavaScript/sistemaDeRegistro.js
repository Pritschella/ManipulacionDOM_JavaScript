/*Sistema para registrar pacientes y mostrarlos en tarjetas */

//Primer paso: Obtener todos los elementos de nuestro HTML y guardarlos en variables de JS 

//Inputs separados, boton, textoConfirmacion

let nombrePaciente = document.getElementById("nombrePaciente"); //input nombre
let edadPaciente = document.getElementById("edadPaciente"); //input edad
let botonRegistrarPaciente = document.getElementById("btnRegistrarPaciente"); //boton
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion"); //container mensaje confirmación

//Array para almacenar a mis pacientes
let pacientes = [];

//Función para registrar un nuevo paciente
function registrarPaciente() {

    //Obtengo el atributo value de mi input
    let valorNombrePaciente = nombrePaciente.value;
    let valorEdadPaciente = edadPaciente.value;


    //Array para guardar la información del paciente
    let paciente = {
        nombre: valorNombrePaciente, //tomo el valor del input, y lo asigno a esta variable
        edad: valorEdadPaciente, //tomo el valor del input, y lo asigno a esta variable
        citas: []
    };

    //Cuando tengo la información del paciente...
    pacientes.push(paciente); //array.push(valorAgregar)

    //1. Muestro info en consola
    mostrarInfoPaciente(paciente); //Invocación de otra función para mostrar la info en consola

    //2. Muestro el mensaje de confirmación (textContent)
    mensajeConfirmacion.textContent = "Paciente registrado correctamente";

    //3. Genero la tarjeta
    generarTarjetaPaciente(paciente); //Invocación de una función para generar tarjetas

    return paciente;
}//Aquí termina mi función paciente

//Función para mostrar info del paciente en la consola
function mostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: " + paciente.edad);
    //console.log("Citas registradas: ");

    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        console.log("Índice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora)
    });
} //Aquí termina mi función mostrarPaciente

//Función para generar tarjetas de pacientes
function generarTarjetaPaciente(paciente) {

    //Crear
    let tarjetaDiv = document.createElement("div") //Aquí creo un container para mi tarjeta
    tarjetaDiv.className = "col";//aquí le específico que es una columna

    //Crear el contenido de la tarjeta
    tarjetaDiv.innerHTML = `
    <div class="card border-info mb-3">
        <div class="card-header">Paciente</div>
            <div class="card-body">
            <h5 class="card-title">${paciente.nombre}</h5>
            <p class="card-text">Aqui podriamos agregar una breve descripcion de nuestro paciente.</p>
            <p>Edad: ${paciente.edad}</p>
        </div>
    </div>
`

    //Poner
    contenedorTarjetas.appendChild(tarjetaDiv);

}//cierra función crearTarjeta

//evento

botonRegistrarPaciente.addEventListener('click', registrarPaciente);

