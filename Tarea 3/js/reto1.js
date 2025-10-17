document.getElementById('convertir').addEventListener('click', () => {
  const dolares = parseFloat(document.getElementById('dolares').value);
  const tipo = parseFloat(document.getElementById('tipoCambio').value);

  if (!isNaN(dolares) && !isNaN(tipo)) {
    const colones = dolares * tipo;
    document.getElementById('resultado').textContent = `₡${colones.toFixed(2)} colones`;

    Swal.fire({
      title: '¡Conversión Exitosa!',
      html: `
        <lottie-player src="https://lottie.host/7e931fd0-6a7a-4f7a-888f-7f604ed8155f/ztE6SYqf0h.json" background="transparent" speed="1" style="width:150px;height:150px;margin:0 auto;" autoplay></lottie-player>
        <p>₡${colones.toFixed(2)} colones generados correctamente</p>
      `,
      showConfirmButton: false,
      timer: 3000,
      background: '#1a1a2e',
      color: '#00ffea'
    });
  } else {
    Swal.fire({
      title: 'Error ❌',
      html: `
        <lottie-player src="https://lottie.host/1b45c2a7-3ec4-4b25-8e4a-2cf0c93c52c2/PhCBXlJ2uE.json" background="transparent" speed="1" style="width:150px;height:150px;margin:0 auto;" autoplay></lottie-player>
        <p>Por favor ingresa valores válidos.</p>
      `,
      confirmButtonColor: '#e74c3c',
      background: '#1a1a2e',
      color: '#fff'
    });
  }
});
