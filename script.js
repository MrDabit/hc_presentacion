// Navegación entre secciones
const sectionButtons = document.querySelectorAll("#section-nav button");
const sections = document.querySelectorAll(".section");

sectionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Cambiar sección activa
    const target = btn.dataset.section;
    sections.forEach(sec => sec.classList.add("hidden"));
    document.getElementById(`section${target}`).classList.remove("hidden");

    // Resaltar botón activo
    sectionButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Limpiar visor al cambiar de sección
    const viewer = document.querySelector(`#section${target} .viewer .media-container`);
    const desc = document.querySelector(`#section${target} .viewer .description`);
    viewer.innerHTML = "";
    desc.textContent = "";
  });
});

// Función para mostrar contenido en el visor
function showMedia(button) {
  const mediaContainer = button.closest(".section").querySelector(".media-container");
  const descContainer = button.closest(".section").querySelector(".description");
  const media = button.dataset.media;
  const desc = button.dataset.desc || "";

  mediaContainer.innerHTML = "";
  descContainer.textContent = desc;

  if (media.endsWith(".mp4")) {
    const video = document.createElement("video");
    video.src = media;
    video.controls = true;
    mediaContainer.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = media;
    mediaContainer.appendChild(img);
  }
}

// Añadir eventos a todos los botones de puntos
const pointButtons = document.querySelectorAll(".point-btn");
pointButtons.forEach(btn => {
  btn.addEventListener("click", () => showMedia(btn));
});
