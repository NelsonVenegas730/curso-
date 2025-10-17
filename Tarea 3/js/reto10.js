document.addEventListener('DOMContentLoaded', () => {
    const empleados = {
        '109110338': {
            nombre: 'Ana',
            apellidos: 'Ramírez Soto',
            lugar: 'San José',
            foto: 'foto1.jpg'
        },
        '209110338': {
            nombre: 'Luis',
            apellidos: 'Gómez Vargas',
            lugar: 'Alajuela',
            foto: 'foto2.jpg'
        },
        '309110338': {
            nombre: 'María',
            apellidos: 'Fernández Mora',
            lugar: 'Cartago',
            foto: 'foto3.jpg'
        },
        '409110338': {
            nombre: 'Carlos',
            apellidos: 'Rodríguez Pérez',
            lugar: 'Heredia',
            foto: 'foto4.jpg'
        },
        '509110338': {
            nombre: 'Sofía',
            apellidos: 'Jiménez León',
            lugar: 'Puntarenas',
            foto: 'foto5.jpg'
        }
    };

    const boton = document.getElementById('buscar');
    const cedulaInput = document.getElementById('cedula');
    const resultado = document.getElementById('resultadoEmpleado');

    boton.addEventListener('click', () => {
        const cedula = cedulaInput.value.trim();

        // Validar campo vacío
        if (!cedula) {
            Swal.fire({
                title: 'Campo vacío',
                text: 'Por favor ingrese una cédula.',
                background: '#1a1a2e',
                color: '#fff',
                confirmButtonColor: '#FFD700'
            });
            return;
        }

        const empleado = empleados[cedula];

        // Si no existe
        if (!empleado) {
            resultado.innerHTML = '';
            Swal.fire({
                title: 'Empleado no encontrado',
                text: 'El usuario NO existe en la base de datos.',
                background: '#1a1a2e',
                color: '#fff',
                confirmButtonColor: '#FFD700'
            });
            return;
        }

        // Si existe, mostrar datos
        resultado.innerHTML = `
            <div class="card-empleado">
                <img src="imagenes/${empleado.foto}" alt="${empleado.nombre}">
                <p><strong>Nombre:</strong> ${empleado.nombre}</p>
                <p><strong>Apellidos:</strong> ${empleado.apellidos}</p>
                <p><strong>Lugar:</strong> ${empleado.lugar}</p>
            </div>
        `;

        Swal.fire({
            title: 'Empleado encontrado',
            text: `${empleado.nombre} ${empleado.apellidos}`,
            background: '#1a1a2e',
            color: '#00ffea',
            timer: 2000,
            showConfirmButton: false
        });
    });
});
