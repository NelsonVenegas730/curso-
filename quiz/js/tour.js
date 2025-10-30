let viewer, panorama;

window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#tour_Container');
    panorama = new PANOLENS.ImagePanorama('imagenes/florencia4.jpg');
    viewer = new PANOLENS.Viewer({
        container: container,
        controlBar: true
    });
    viewer.add(panorama);

    function mostrarInfo(tipo) {
        switch (tipo) {
            case 'historia':
                Swal.fire('Historia', 'La Catedral de Santa María del Fiore, símbolo del Renacimiento, fue construida entre los siglos XIII y XV.', 'info');
                break;
            case 'imagen':
                Swal.fire({
                    title: 'Detalles del Duomo',
                    html: '<img src="imagenes/imagen1.jpg" width="300"><p>Fachada de mármol blanco, verde y rosado.</p>'
                });
                break;
            case 'pdf':
                Swal.fire({
                    title: 'Guía Turística',
                    html: '<embed src="recursos/info.pdf" width="100%" height="400px">'
                });
                break;
            case 'video':
                Swal.fire({
                    title: 'Vista aérea de Florencia',
                    html: '<video width="100%" controls><source src="recursos/video.mp4" type="video/mp4"></video>'
                });
                break;
            case 'audio':
                Swal.fire({
                    title: 'Sonidos de la plaza',
                    html: '<audio controls><source src="recursos/audio.m4a" type="audio/mp3"></audio>'
                });
                break;
            case 'curiosidad':
                Swal.fire('Dato curioso', 'La cúpula de Brunelleschi fue la más grande del mundo por más de 400 años.', 'question');
                break;
        }
    }

    const hotspots = [
        { x: 1000, y: 0, z: -2000, tipo: 'historia' },
        { x:4248, y:652, z:-2542, tipo: 'imagen' },
        { x: -2200, y: 100, z: 1000, tipo: 'pdf' },
        { x: 1800, y: -100, z: 1200, tipo: 'video' },
        { x: -1000, y: 250, z: -2000, tipo: 'audio' },
        { x: -3866, y: 429, z: -3130, tipo: 'curiosidad' }
    ];

    hotspots.forEach((spot) => {
        const infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
        infospot.position.set(spot.x, spot.y, spot.z);
        infospot.addHoverText('Zona interactiva');
        infospot.addEventListener('click', () => mostrarInfo(spot.tipo));
        panorama.add(infospot);
    });

})

