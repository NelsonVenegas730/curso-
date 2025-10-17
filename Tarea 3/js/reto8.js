document.addEventListener('DOMContentLoaded', () => {
    const notas = {};

    document.getElementById('guardarNota').addEventListener('click', () => {
        const nombre = document.getElementById('nombreEstudiante').value.trim();
        const nota = parseFloat(document.getElementById('notaEstudiante').value);

        if (!nombre || isNaN(nota)) {
            Swal.fire({
                title: 'Datos incompletos',
                text: 'Ingresa nombre y nota válida.',
                background: '#1a1a2e',
                color: '#fff',
                confirmButtonColor: '#e74c3c'
            });
            return;
        }

        notas[nombre] = nota;

        const select = document.getElementById('listaEstudiantes');
        const option = document.createElement('option');
        option.value = nombre;
        option.textContent = nombre;
        select.appendChild(option);

        Swal.fire({
            title: 'Nota guardada',
            text: `Nota de ${nombre}: ${nota}`,
            background: '#1a1a2e',
            color: '#00ffea',
            timer: 2000,
            showConfirmButton: false
        });
    });

    document.getElementById('listaEstudiantes').addEventListener('change', () => {
        const nombre = document.getElementById('listaEstudiantes').value;
        const nota = notas[nombre];
        document.getElementById('notaMostrada').textContent = nota ? `Nota: ${nota}` : '';
    });
});