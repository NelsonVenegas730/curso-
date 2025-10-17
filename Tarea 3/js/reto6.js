document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('colorCarro').addEventListener('change', () => {
        const color = document.getElementById('colorCarro').value;
        const carro = document.getElementById('carroImagen');

        if (!color) {
            carro.innerHTML = '';
            return;
        }

        carro.innerHTML = `
      <img src="imagenes/carro-${color}.jpg" alt="${color}" style="max-width:100%;border-radius:8px;">
      <p>Color seleccionado: <strong>${color}</strong></p>
    `;

        Swal.fire({
            title: 'Color aplicado',
            text: `Has cambiado el carro a color ${color}`,
            background: '#1a1a2e',
            color: '#00ffea',
            timer: 2000,
            showConfirmButton: false
        });
    });
});