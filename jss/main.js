function crearCard(propiedad) {
  const { titulo, descripcion, direccion, habitaciones, banos, precio, imagen, smoke, pets } = propiedad;
  const smokeHtml = smoke ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
  const petsHtml = pets ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` : `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
  return `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="${imagen}" class="card-img-top" alt="Imagen de ${titulo}" onerror="this.src='https://via.placeholder.com/700x400?text=Imagen+no+disponible'">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">${descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${direccion}</p>
          <p><i class="fas fa-bed"></i> ${habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${banos} Baños</p>
          <p><i class="fas fa-dollar-sign"></i> ${precio}</p>
          <div class="mt-auto">
            ${smokeHtml}
            ${petsHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderizarPropiedadesEn(containerId, arrayProp) {
  console.log('renderizarPropiedadesEn llamado para', containerId, 'con', arrayProp && arrayProp.length, 'items');
  const contenedor = document.getElementById(containerId);
  if (!contenedor) { console.error(`No existe el contenedor con id "${containerId}"`); return; }
  contenedor.innerHTML = '';
  const fragment = document.createDocumentFragment();
  arrayProp.forEach(prop => {
    const temp = document.createElement('div');
    temp.innerHTML = crearCard(prop);
    while (temp.firstChild) fragment.appendChild(temp.firstChild);
  });
  contenedor.appendChild(fragment);
}


function crearCard(propiedad) {
  const { titulo, descripcion, direccion, habitaciones, banos, precio, imagen, smoke, pets } = propiedad;


  const smokeHtml = smoke
    ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
    : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;

  const petsHtml = pets
    ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
    : `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;

  return `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="${imagen}" class="card-img-top" alt="Imagen de ${titulo}" onerror="this.src='https://via.placeholder.com/700x400?text=Imagen+no+disponible'">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">${descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${direccion}</p>
          <p><i class="fas fa-bed"></i> ${habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${banos} Baños</p>
          <p><i class="fas fa-dollar-sign"></i> ${precio}</p>
          <div class="mt-auto">
            ${smokeHtml}
            ${petsHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}


function renderizarPropiedadesEn(containerId, arrayProp) {
  const contenedor = document.getElementById(containerId);
  if (!contenedor) {
    console.error(`No existe el contenedor con id "${containerId}"`);
    return;
  }


  contenedor.innerHTML = '';


  const fragment = document.createDocumentFragment();

  arrayProp.forEach(prop => {

    const temp = document.createElement('div');
    temp.innerHTML = crearCard(prop);

    while (temp.firstChild) {
      fragment.appendChild(temp.firstChild);
    }
  });

  contenedor.appendChild(fragment);
}
