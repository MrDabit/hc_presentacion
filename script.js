// Espera a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {

  // --- NAVEGACIÓN ENTRE SECCIONES ---
  const sectionButtons = document.querySelectorAll("nav#section-nav button");
  const sections = document.querySelectorAll(".section");

  sectionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-section");

      // Pausar todos los vídeos antes de cambiar
      document.querySelectorAll(".viewer video").forEach(video => {
      video.pause();
      video.currentTime = 0; // opcional: reinicia al inicio
      
    });
      // Muestra solo la sección seleccionada
      sections.forEach(sec => {
        sec.classList.add("hidden");
      });
      document.getElementById(`section${target}`).classList.remove("hidden");

      // Actualiza el estilo del botón activo
      sectionButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Limpia visor al cambiar de sección
      const viewer = document.getElementById(`section${target}`).querySelector(".viewer .media-container");
      const desc = document.getElementById(`section${target}`).querySelector(".viewer .description");
      viewer.innerHTML = "";
      desc.textContent = "";
    });
  });

  // --- VISOR DE PUNTOS ---
  const allPoints = document.querySelectorAll(".point-btn");
  allPoints.forEach(point => {
    point.addEventListener("click", () => {
      const media = point.getAttribute("data-media");
      const descText = point.getAttribute("data-desc");

      // Encuentra el visor correspondiente
      const section = point.closest(".section");
      const viewer = section.querySelector(".viewer .media-container");
      const desc = section.querySelector(".viewer .description");

      viewer.innerHTML = ""; // Limpia contenido anterior

      if (media.endsWith(".mp4")) {
        // Crear elemento video
        const video = document.createElement("video");
        video.src = media;
        video.controls = true;
        video.autoplay = true;
        viewer.appendChild(video);
      } else {
        // Crear imagen
        const img = document.createElement("img");
        img.src = media;
        viewer.appendChild(img);
      }

      // Muestra la descripción
      desc.textContent = descText;
    });
  });

  // --- OPCIONAL: Mostrar la primera sección por defecto ---
  document.querySelector("nav#section-nav button").click();

});
