document.addEventListener('DOMContentLoaded', () => {
    const lottieOpen = "https://lottie.host/7e931fd0-6a7a-4f7a-888f-7f604ed8155f/ztE6SYqf0h.json";
    const lottieError = "https://lottie.host/1b45c2a7-3ec4-4b25-8e4a-2cf0c93c52c2/PhCBXlJ2uE.json";
    const lottieCopy = "https://lottie.host/90d06a3f-429d-45d0-8ce7-89e84dc543e5/gDftjD1rAq.json";

    document.getElementById('btnIr').addEventListener('click', () => {
        const select = document.getElementById('opciones');
        const url = select.value;

        if (!url) {
            Swal.fire({
                title: 'Selecciona una opción',
                html: `
          <lottie-player src="${lottieError}" background="transparent" speed="1" style="width:140px;height:140px;margin:0 auto;" autoplay></lottie-player>
          <p>No seleccionaste ningún sitio.</p>
        `,
                confirmButtonColor: '#e74c3c',
                background: '#1a1a2e',
                color: '#fff'
            });
            return;
        }

        window.open(url, '_blank');

        Swal.fire({
            title: 'Abriendo sitio...',
            html: `
        <lottie-player src="${lottieOpen}" background="transparent" speed="1" style="width:150px;height:150px;margin:0 auto;" autoplay></lottie-player>
        <p>Abriendo: ${escapeHtml(url)}</p>
      `,
            showConfirmButton: false,
            timer: 2000,
            background: '#1a1a2e',
            color: '#00ffea'
        });
    });

    document.getElementById('btnCopiar').addEventListener('click', async () => {
        const url = document.getElementById('opciones').value;
        if (!url) {
            Swal.fire({
                title: 'Nada que copiar',
                html: `
          <lottie-player src="${lottieError}" background="transparent" speed="1" style="width:120px;height:120px;margin:0 auto;" autoplay></lottie-player>
          <p>Selecciona primero una opción.</p>
        `,
                confirmButtonColor: '#e74c3c',
                background: '#1a1a2e',
                color: '#fff'
            });
            return;
        }

        try {
            await navigator.clipboard.writeText(url);
            Swal.fire({
                title: 'Enlace copiado ✅',
                html: `
          <lottie-player src="${lottieCopy}" background="transparent" speed="1" style="width:130px;height:130px;margin:0 auto;" autoplay></lottie-player>
          <p>El enlace fue copiado al portapapeles.</p>
        `,
                showConfirmButton: false,
                timer: 1800,
                background: '#1a1a2e',
                color: '#00ffea'
            });
        } catch (err) {
            Swal.fire({
                title: 'Error al copiar',
                html: `
          <lottie-player src="${lottieError}" background="transparent" speed="1" style="width:120px;height:120px;margin:0 auto;" autoplay></lottie-player>
          <p>No se pudo copiar. Usa Ctrl+C o intenta de nuevo.</p>
        `,
                confirmButtonColor: '#e74c3c',
                background: '#1a1a2e',
                color: '#fff'
            });
        }
    });

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
});