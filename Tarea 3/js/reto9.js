document.addEventListener('DOMContentLoaded', () => {
    const votos = [];

    document.getElementById('enviarVoto').addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value.trim();
        const cedula = document.getElementById('cedula').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const nacimiento = document.getElementById('nacimiento').value;
        const opcion = document.getElementById('opcionVoto').value;

        if (!nombre || !cedula || !correo || !nacimiento || !opcion) {
            Swal.fire({
                title: 'Datos incompletos',
                text: 'Por favor completa todos los campos.',
                background: '#1a1a2e',
                color: '#fff',
                confirmButtonColor: '#e74c3c'
            });
            return;
        }

        votos.push({ nombre, cedula, correo, nacimiento, opcion });

        document.getElementById('resultadoVoto').innerHTML = `
        <p><strong>${nombre}</strong> votó por: ${opcion}</p>
    `;

        Swal.fire({
            title: 'Voto registrado',
            text: `Gracias por votar, ${nombre}`,
            background: '#1a1a2e',
            color: '#00ffea',
            timer: 2500,
            showConfirmButton: false
        });
    });
});