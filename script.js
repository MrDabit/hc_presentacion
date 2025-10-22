document.addEventListener("DOMContentLoaded", () => {
  const schematicImg = document.getElementById("schematic-img");
  const pointsContainer = document.getElementById("points-container");
  const mediaContainer = document.getElementById("media-container");
  const description = document.getElementById("description");

  const sections = {
    1: [
      { top: "30%", left: "40%", media: "img/1/foto1.jpg", desc: "img/1/foto1.txt" },
      { top: "50%", left: "60%", media: "media/1/video1.mp4", desc: "media/1/video1.txt" }
    ],
    2: [
      { top: "40%", left: "30%", media: "img/2/foto2.jpg", desc: "img/2/foto2.txt" },
      { top: "60%", left: "50%", media: "media/2/video2.mp4", desc: "media/2/video2.txt" }
    ],
    3: [
      { top: "35%", left: "45%", media: "img/3/foto3.jpg", desc: "img/3/foto3.txt" }
    ],
    4: [
      { top: "25%", left: "55%", media: "img/4/foto4.jpg", desc: "img/4/foto4.txt" }
    ],
    5: [
      { top: "50%", left: "40%", media: "img/5/foto5.jpg", desc: "img/5/foto5.txt" }
    ]
  };

  // Cambiar de sección
  document.querySelectorAll("#section-nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#section-nav button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const sec = btn.dataset.section;
      loadSection(sec);
    });
  });

  // Cargar sección
  function loadSection(sectionNum) {
    const secData = sections[sectionNum];
    if (!secData) return;

    schematicImg.src = `img/${sectionNum}/esquema${sectionNum}.png`;

    pointsContainer.innerHTML = "";
    secData.forEach((p, i) => {
      const btn = document.createElement("button");
      btn.classList.add("point-btn");
      btn.textContent = i + 1;
      btn.style.top = p.top;
      btn.style.left = p.left;
      btn.dataset.media = p.media;
      btn.dataset.desc = p.desc;
      btn.addEventListener("click", () => loadPoint(p));
      pointsContainer.appendChild(btn);
    });

    // Reset panel derecho
    mediaContainer.innerHTML = "";
    description.textContent = "Selecciona un punto del esquema.";
  }

  // Cargar punto
  function loadPoint(p) {
    mediaContainer.innerHTML = "";
    description.textContent = "Cargando descripción...";

    // Detener video previo
    document.querySelectorAll("video").forEach(v => v.pause());

    // Cargar media
    if (p.media.endsWith(".mp4")) {
      const video = document.createElement("video");
      video.src = p.media;
      video.controls = true;
      video.autoplay = true;
      mediaContainer.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = p.media;
      mediaContainer.appendChild(img);
    }

    // Cargar texto
    fetch(p.desc)
      .then(res => res.ok ? res.text() : Promise.reject("no encontrado"))
      .then(txt => {
        description.textContent = txt.trim();
      })
      .catch(() => {
        description.textContent = "Sin descripción disponible.";
      });
  }

  // Iniciar en sección 1
  loadSection(1);
});
