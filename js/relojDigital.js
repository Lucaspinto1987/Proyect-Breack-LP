function hourDate() {
    const now = new Date();
    const formatDate = now.toLocaleDateString('es-ES');
    const formatTime = now.toLocaleTimeString('es-ES');

    document.getElementById('date').textContent = formatDate;
    document.getElementById('time').textContent = formatTime;
}

// Actualizar la fecha y hora cada segundo
setInterval(hourDate, 1000);

// Ejecutar la función inmediatamente para mostrar la fecha y hora al cargar la página
hourDate();
