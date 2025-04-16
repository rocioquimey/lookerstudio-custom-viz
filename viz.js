
// Si usás npm: const dscc = require('@google/dscc');
// En entornos sin bundler incluye dscc desde CDN global

// Este callback se llama cada vez que cambian los datos/config
function drawViz(data, element) {
  // Transformamos los datos a array de filas: [[url, título, desc], …]
  const table = dscc.tableTransform(data);
  const rows = table.asArray();
  // Limpiamos el contenedor
  element.innerHTML = '';
  // Por cada fila, creamos una “tarjeta”
  rows.forEach(([imageUrl, title, description]) => {
    const card = document.createElement('div');
    card.style.display = 'flex';
    card.style.margin = '8px 0';
    card.style.border = '1px solid #ddd';
    card.style.borderRadius = '4px';
    card.style.overflow = 'hidden';
    // Imagen
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.width = '100px';
    img.style.objectFit = 'cover';
    // Texto
    const txt = document.createElement('div');
    txt.style.flex = '1';
    // Título (bloque turquesa)
    const titleEl = document.createElement('div');
    titleEl.textContent = title;
    titleEl.style.backgroundColor = '#C7EEF4';
    titleEl.style.padding = '6px 10px';
    titleEl.style.fontWeight = 'bold';
    // Descripción
    const descEl = document.createElement('div');
    descEl.textContent = description;
    descEl.style.padding = '6px 10px';
    descEl.style.fontSize = '12px';
    // Armamos
    txt.appendChild(titleEl);
    txt.appendChild(descEl);
    card.appendChild(img);
    card.appendChild(txt);
    element.appendChild(card);
  });
}

// Nos “suscribimos” a Looker Studio
dscc.subscribeToData(drawViz, {transform: dscc.tableTransform});
