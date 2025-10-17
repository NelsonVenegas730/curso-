document.getElementById('lugares').addEventListener('change', () => {
    const lugar = document.getElementById('lugares').value;
    const imagen = document.getElementById('imagenLugar');

    if (!lugar) {
        imagen.innerHTML = '';
        return;
    }

    const imagenes = {
        alemania: "imagenes/alemania.jpg",
        italia: 'imagenes/italia.jpg',
        francia: 'imagenes/francia.jpg'
    };

    const descripciones = {
        alemania: 'Alemania es conocida por sus castillos, tecnología avanzada y cultura cervecera.',
        italia: 'Italia destaca por su historia, arquitectura y gastronomía.',
        francia: 'Francia es famosa por su arte, moda y la Torre Eiffel.'
    };


    imagen.innerHTML = `
    <img src="${imagenes[lugar]}" alt="${lugar}" style="max-width:100%;border:2px solid #00ffcc;border-radius:8px;">
    <p style="margin-top:10px;">Has seleccionado: <strong>${lugar}</strong></p>
  `;

    Swal.fire({
        title: 'Lugar seleccionado',
        text: `Mostrando imagen de ${lugar}`,
        background: '#1a1a2e',
        color: '#00ffea',
        timer: 2000,
        showConfirmButton: false
    });
});