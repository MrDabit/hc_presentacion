document.addEventListener("DOMContentLoaded", () => {
  const sectionButtons = document.querySelectorAll("nav#section-nav button");
  const sections = document.querySelectorAll(".section");

  // Crear botones desde data.js
  sections.forEach(section => {
    const secId = section.id.replace("section", "");
    const container = section.querySelector(".schematic-left");
    if (sectionsData[secId]) {
      sectionsData[secId].forEach(point => {
        const btn = document.createElement("button");
        btn.classList.add("point-btn");
        btn.style.top = point.top + "%";
        btn.style.left = point.left + "%";
        btn.dataset.media = point.media;
        btn.textContent = point.label;
        container.appendChild(btn);
      });
    }
  });

  activateSection(1);

  // --- Función para activar sección ---
  function activateSection(target) {
    // Pausar vídeos activos
    document.querySelectorAll("video").forEach(v => {
      v.pause();
      v.currentTime = 0;
    });

    sections.forEach(sec => sec.classList.add("hidden"));
    const section = document.getElementById(`section${target}`);
    section.classList.remove("hidden");

    sectionButtons.forEach(b => b.classList.remove("active"));
    document.querySelector(`nav#section-nav button[data-section="${target}"]`).classList.add("active");

    const viewer = section.querySelector(".schematic-right .media-container");
    const desc = section.querySelector(".schematic-left .description");
    viewer.innerHTML = "";
    desc.textContent = "Selecciona un punto para ver la información.";

    attachPointEvents(section);
  }

  // --- Eventos para cada punto ---
  function attachPointEvents(section) {
    const points = section.querySelectorAll(".point-btn");
    const viewer = section.querySelector(".schematic-right .media-container");
    const desc = section.querySelector(".schematic-left .description");

    points.forEach(point => {
      point.onclick = () => {
        const media = point.dataset.media;
        viewer.innerHTML = "";

        if (media.endsWith(".mp4")) {
          const video = document.createElement("video");
          video.src = media;
          video.controls = true;
          video.autoplay = true;
          viewer.appendChild(video);
        } else {
          const img = document.createElement("img");
          img.src = media;
          viewer.appendChild(img);
        }

        // Leer el archivo .txt con el mismo nombre
        const txtPath = media.replace(/\.(jpg|png|mp4)$/i, ".txt");
        fetch(txtPath)
          .then(res => {
            if (!res.ok) throw new Error("No encontrado");
            return res.text();
          })
          .then(text => {
            desc.innerHTML = `<div class="desc-card">${text.trim()}</div>`;
          })
          .catch(() => {
            desc.innerHTML = `<div class="desc-card">Sin descripción disponible.</div>`;
          });
      };
    });
  }

  // Redimensionamiento de puntos
  window.addEventListener("resize", () => {
    const activeSection = document.querySelector(".section:not(.hidden)");
    if (activeSection) adjustPoints(activeSection);
  });

  function adjustPoints(section) {
    const points = section.querySelectorAll(".point-btn");
    points.forEach(p => {
      const topPct = parseFloat(p.style.top);
      const leftPct = parseFloat(p.style.left);
      p.style.top = `${topPct}%`;
      p.style.left = `${leftPct}%`;
    });
  }

  // --- Botones de navegación ---
  sectionButtons.forEach(btn =>
    btn.addEventListener("click", () => activateSection(btn.dataset.section))
  );
});
