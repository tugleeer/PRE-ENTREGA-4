

const nombre = prompt("¿Cuál es tu nombre?");
const añoActual = Number(prompt("¿En qué año estamos?"));


const añosNacimiento = [1998, 2000, 2003, 2005, 2010];


añosNacimiento.push(2012);
añosNacimiento.unshift(1995);


const añoEliminado = añosNacimiento.pop();
console.log(`Se ha eliminado el elemento: ${añoEliminado}`);


const añoBuscado = Number(prompt("Ingresa un año de nacimiento para buscar:"));

if (añosNacimiento.includes(añoBuscado)) {
    const posicion = añosNacimiento.indexOf(añoBuscado);
    console.log(`El año ${añoBuscado} está en la posición ${posicion} de la lista.`);
} else {
    console.log(`El año ${añoBuscado} no está en la lista.`);
}


añosNacimiento.splice(2, 1, 2004);


function mostrarEdades(lista, año, nombreUsuario) {
    console.log(`Edades aproximadas registradas para ${nombreUsuario}:`);

    for (const nacimiento of lista) {
        const edad = año - nacimiento;

        if (edad >= 0) {
            console.log(`Año de nacimiento ${nacimiento}: aproximadamente ${edad} años.`);
        } else {
            console.log(`El año ${nacimiento} todavía no ocurrió.`);
        }
    }

    console.log(`Total de años en la lista: ${lista.length}`);
}


if (nombre !== null && nombre.trim() !== "" && !isNaN(añoActual)) {
    mostrarEdades(añosNacimiento, añoActual, nombre);
} else {
    alert("No ingresaste un nombre o un año válido.");
}