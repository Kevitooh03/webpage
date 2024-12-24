function solicitarPresupuesto() {
    alert("Solicitud de presupuesto enviada. Nos pondremos en contacto pronto.");
}

function agendarCita() {
    alert("Por favor, complete el formulario de reservas para agendar su cita.");
}

// Manejo del envío del formulario de reserva
document.getElementById('formReserva').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Cita reservada para el " + document.getElementById('fecha').value);
});

// Manejo del envío del formulario de contacto
document.getElementById('formContacto').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Mensaje enviado. Responderemos a la brevedad.");
});