document.getElementById('calcular').addEventListener('click', () => {
    const tipo = document.getElementById('credito').value;
    const resultado = document.getElementById('resultadoCredito');

    if (!tipo) {
        Swal.fire({
            title: 'Seleccione un crédito',
            text: 'Debes elegir una opción para calcular.',
            background: '#1a1a2e',
            color: '#fff',
            confirmButtonColor: '#e74c3c'
        });
        return;
    }

    const cuotas = {
        auto: 95000,
        casa: 250000
    };

    resultado.innerHTML = `
    <img src="imagenes/${tipo}.jpg" style="max-width:100%;margin-top:10px;">
    <p>Cuota mensual estimada: ₡${cuotas[tipo].toLocaleString()}</p>
  `;

    Swal.fire({
        title: 'Cálculo exitoso',
        text: `Tu cuota mensual es ₡${cuotas[tipo].toLocaleString()}`,
        background: '#1a1a2e',
        color: '#00ffea',
        timer: 2500,
        showConfirmButton: false
    });
});s