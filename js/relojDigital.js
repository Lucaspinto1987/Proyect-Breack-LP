function hourDate() { //defino esta funcion para que se ejecute cada vez que sea llamada.
    const timeCurrentDay = new Date(); // con new Date , creamos un nuevo date y este contiene fecha y hora y lo guardamos en la constante que creamos( Date es una palabra reservada que utilizamos para trabajar con fecha y hora )
    const formatDate = timeCurrentDay.toLocaleDateString('es-ES'); // convertimos la fecha actual en un formato string usando la hora local de España
    const formatTime = timeCurrentDay.toLocaleTimeString('es-ES'); // convertimos la hora actual en un formato string usando la hora local de España

    document.getElementById('date').textContent = formatDate; //buscamos el elemento en el Html y actualizamos el contenido del DOM.
    document.getElementById('time').textContent = formatTime; // idem
}

setInterval(hourDate, 1000); // con esto, actualizamos la fecha y hora a cada segundo.
hourDate(); // ejecutamos la funcion para que se muestre en pantalla.
