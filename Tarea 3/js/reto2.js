const lottieSuccess = "https://lottie.host/4b497c49-7f06-4c15-bfa3-b94c7d859aa5/qPwvq7Y8H7.json";
const lottieError = "https://lottie.host/1b45c2a7-3ec4-4b25-8e4a-2cf0c93c52c2/PhCBXlJ2uE.json";
const lottieInfo  = "https://lottie.host/f3c5d51f-9e24-49a5-8bcd-cc7c36bbdd38/jb5RRe7LxP.json";

document.getElementById('btnFacturar').addEventListener('click', () => {
  const cliente = document.getElementById('cliente').value.trim();
  const articulo = document.getElementById('articulo').value.trim();
  const cantidad = parseInt(document.getElementById('cantidad').value, 10);
  const precio = parseFloat(document.getElementById('precio').value);

  if (!cliente || !articulo || isNaN(cantidad) || cantidad <= 0 || isNaN(precio) || precio <= 0) {
    Swal.fire({
      title: 'Datos incompletos',
      html: `
        <lottie-player src="${lottieError}" background="transparent" speed="1" style="width:140px;height:140px;margin:0 auto;" autoplay></lottie-player>
        <p>Por favor completa todos los campos correctamente.</p>
      `,
      confirmButtonColor: '#e74c3c',
      background: '#1a1a2e',
      color: '#fff'
    });
    return;
  }

  const subtotal = cantidad * precio;
  const iva = subtotal * 0.13;
  const servicio = subtotal * 0.05;
  const total = subtotal + iva + servicio;

  document.getElementById('resultadoFactura').innerHTML = `
    <div class="factura-card" style="text-align:left; color:#dff;">
      <h3 style="color:#00ffea;margin:0 0 8px 0;">Factura - Cliente: ${escapeHtml(cliente)}</h3>
      <table style="width:100%;border-collapse:collapse;color:#dff;">
        <thead>
          <tr style="background:rgba(0,0,0,0.2)">
            <th style="padding:6px;border:1px solid #334">Artículo</th>
            <th style="padding:6px;border:1px solid #334">Cantidad</th>
            <th style="padding:6px;border:1px solid #334">Precio u.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:6px;border:1px solid #334">${escapeHtml(articulo)}</td>
            <td style="padding:6px;border:1px solid #334;text-align:center">${cantidad}</td>
            <td style="padding:6px;border:1px solid #334;text-align:right">₡${precio.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <p style="margin:8px 0;"><b>Subtotal:</b> ₡${subtotal.toFixed(2)}</p>
      <p style="margin:4px 0;"><b>IVA (13%):</b> ₡${iva.toFixed(2)}</p>
      <p style="margin:4px 0;"><b>Servicio (5%):</b> ₡${servicio.toFixed(2)}</p>
      <hr style="border-color:#334">
      <p style="font-size:1.1rem;"><b>Total a pagar:</b> ₡${total.toFixed(2)}</p>
    </div>
  `;

  Swal.fire({
    title: 'Factura Generada ✅',
    html: `
      <lottie-player src="${lottieSuccess}" background="transparent" speed="1" style="width:150px;height:150px;margin:0 auto;" autoplay></lottie-player>
      <p>Factura generada correctamente. Total: ₡${total.toFixed(2)}</p>
    `,
    showConfirmButton: false,
    timer: 3200,
    background: '#1a1a2e',
    color: '#00ffea'
  });
});

document.getElementById('btnBorrar').addEventListener('click', () => {
  document.getElementById('cliente').value = '';
  document.getElementById('articulo').value = '';
  document.getElementById('cantidad').value = '';
  document.getElementById('precio').value = '';
  document.getElementById('resultadoFactura').innerHTML = '';

  Swal.fire({
    title: 'Formulario limpiado',
    html: `
      <lottie-player src="${lottieInfo}" background="transparent" speed="1" style="width:120px;height:120px;margin:0 auto;" autoplay></lottie-player>
      <p>Todos los campos fueron borrados.</p>
    `,
    showConfirmButton: false,
    timer: 1800,
    background: '#1a1a2e',
    color: '#00ffea'
  });
});

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}