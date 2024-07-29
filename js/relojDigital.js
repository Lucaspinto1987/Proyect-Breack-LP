function hourDate() { //defino esta funcion para que se ejecute cada vez que sea llamada.
    const timeCurrentDay = new Date(); // con new Date , creamos un nuevo date y este contiene fecha y hora y lo guardamos en la constante que creamos( Date es una palabra reservada que utilizamos para trabajar con fecha y hora )
    const formatDate = timeCurrentDay.toLocaleDateString('es-ES'); // convertimos la fecha actual en un formato string usando la hora local de España
    const formatTime = timeCurrentDay.toLocaleTimeString('es-ES'); // convertimos la hora actual en un formato string usando la hora local de España

    document.getElementById('date').textContent = formatDate; //buscamos el elemento en el Html y actualizamos el contenido del DOM.
    document.getElementById('time').textContent = formatTime; // idem

    // Actualiza el mensaje basado en la hora actual
    displayMessage(timeCurrentDay.getHours());
}

function displayMessage(hours) {
    let message = '';
    if (hours >= 0 && hours < 7) {
        message = 'Es hora de descansar. Apaga y sigue mañana';
    } else if (hours >= 7 && hours < 12) {
        message = 'Buenos días, desayuna fuerte y a darle al código';
    } else if (hours >= 12 && hours < 14) {
        message = 'Echa un rato más pero no olvides comer';
    } else if (hours >= 14 && hours < 16) {
        message = 'Espero que hayas comido';
    } else if (hours >= 16 && hours < 18) {
        message = 'Buenas tardes, el último empujón';
    } else if (hours >= 18 && hours < 22) {
        message = 'Esto ya son horas extras, ... piensa en parar pronto';
    } else {
        message = 'Buenas noches, es hora de pensar en parar y descansar';
    }

    document.getElementById('message').textContent = message;
}
setInterval(hourDate, 1000); // con esto, actualizamos la fecha y hora a cada segundo.
hourDate(); // ejecutamos la funcion para que se muestre en pantalla.
