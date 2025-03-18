// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista de amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo'); // Capturar input
    let nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco

    // Validar que el input no esté vacío
    if (nombre === "") {
        alert("⚠️ Por favor, inserte un nombre.");
        return;
    }

    // Validar que no se repitan nombres
    if (amigos.includes(nombre)) {
        alert("⚠️ Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualizar la lista en pantalla
    actualizarLista();
}

// Función para actualizar la lista de amigos en el DOM
function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ""; // Limpiar lista antes de actualizar

    // Recorrer el array de amigos y agregar cada nombre a la lista
    for (let nombre of amigos) {
        let item = document.createElement("li");
        item.textContent = nombre;
        listaHTML.appendChild(item);
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    let resultadoHTML = document.getElementById('resultado');

    // Validar que haya al menos dos nombres para hacer el sorteo
    if (amigos.length < 2) {
        alert("⚠️ Debes ingresar al menos dos nombres para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    resultadoHTML.innerHTML = `<li>🎉 ¡El amigo secreto es: ${amigoSeleccionado}! 🎉</li>`;
}
