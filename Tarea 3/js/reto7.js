function mostrarDescripcion(zona) {
    const descripciones = {
        info: '📍 Punto de información: Aquí puedes consultar horarios, ubicaciones y recibir asistencia.',
        ascensores: '🛗 Ascensores: Acceso a todos los niveles del edificio, incluyendo sótanos y azotea.',
        cafeteria: '☕ Cafetería: Espacio para comer, relajarse y socializar. Abierta de 7am a 6pm.',
        farmacia: '💊 Farmacia: Venta de medicamentos, productos de salud y atención básica.'
    };

    Swal.fire({
        title: `Zona seleccionada`,
        text: descripciones[zona],
        background: '#1a1a2e',
        color: '#00ffea',
        confirmButtonColor: '#00ffea'
    });
}