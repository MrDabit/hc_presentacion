document.addEventListener("DOMContentLoaded", () => {
  const schematicImg = document.getElementById("schematic-img");
  const pointsContainer = document.getElementById("points-container");
  const mediaContainer = document.getElementById("media-container");
  const description = document.getElementById("description");

  const sections = {
    1: [
      { top: "50%", left: "5%", media: "img/1/foto1.jpg", desc: "img/1/foto1.txt" , type:"visual"},//1.panoramica linea desde inicio
      { top: "80%", left: "42%", media: "img/1/foto2.jpg", desc: "img/1/foto2.txt" , type:"visual"},//2.panorámica de salida
      { top: "78%", left: "60%", media: "media/1/video1.mp4", desc: "media/1/video1.txt",type:"visual" },//3.video salida material y corte
      { top: "20%", left: "35%", media: "img/1/foto3.jpg", desc: "img/1/foto3.txt",type:"danger" },//4.detalle puerta
      { top: "78%", left: "55%", media: "img/1/foto4.jpg", desc: "img/1/foto4.txt",type:"info" }, //5.detalle barreras lus máquina y transporte
      { top: "62%", left: "42%", media: "img/1/foto5.jpg", desc: "img/1/foto5.txt",type:"info" }, //6.detalle barrera de luz máquina
      { top: "62%", left: "90%", media: "img/1/foto6.jpg", desc: "img/1/foto6.txt",type:"danger" },//7.detalle cierre al final de linea
      { top: "20%", left: "45%", media: "img/1/foto7.jpg", desc: "img/1/foto7.txt",type:"info" }, //8.detalle relé de seguridad transporte
      { top: "78%", left: "50%", media: "img/1/foto8.jpg", desc: "img/1/foto8.txt",type:"info" }, //8.detalle relé de seguridad sierra

      
    ],
    2: [
      { top: "80%", left: "10%", media: "media/2/video1.mp4", desc: "media/2/video1.txt", type:"visual" },//1.paseo completo por la línea
      { top: "15%", left: "40%", media: "media/2/video2.mp4", desc: "media/2/video2.txt", type:"visual" },//2.detalles en zona de máquinaria junto a zona de operario
      { top: "20%", left: "5%", media: "img/2/foto1.jpg", desc: "img/2/foto1.txt", type:"visual" },//3.vista panorámica desde entrada, lado operario
      { top: "60%", left: "5%", media: "img/2/foto2.jpg", desc: "img/2/foto2.txt", type:"visual" },//4.vista panorámica desde entrada, lado carga
      { top: "40%", left: "52%", media: "img/2/foto3.jpg", desc: "img/2/foto3.txt", type:"visual" },//5.vista panorámica desde taladro hacia salida
      { top: "65%", left: "52%", media: "img/2/foto4.jpg", desc: "img/2/foto4.txt", type:"visual" },//6.vista panorámica desde taladro hacia salida por zona descarga
      { top: "22%", left: "30%", media: "img/2/foto5.jpg", desc: "img/2/foto5.txt", type:"danger" },//7.peligro por falta de cerramiento
      { top: "55%", left: "50%", media: "img/2/foto6.jpg", desc: "img/2/foto6.txt", type:"danger" },//8.peligro acceso bajo escalera a zonas móviles de taladro
      { top: "30%", left: "50%", media: "img/2/foto7.jpg", desc: "img/2/foto7.txt", type:"danger" },//9.peligro acceso a zonas móviles en escalera
      { top: "65%", left: "42%", media: "img/2/foto8.jpg", desc: "img/2/foto8.txt", type:"danger" },//10.peligro posibilidad de paso trepando por deposito de taladrina
      { top: "15%", left: "35%", media: "img/2/foto9.jpg", desc: "img/2/foto9.txt", type:"info" },//11.Detalle barrera de luz zona operador
      { top: "15%", left: "43%", media: "img/2/foto10.jpg", desc: "img/2/foto10.txt", type:"info" },//12.Detalle barrera de luz zona operador y acceso taladro
      { top: "65%", left: "32%", media: "img/2/foto11jpg", desc: "img/2/foto11.txt", type:"info" },//13.Detalle barrera de luz zona de carga y descarga
      { top: "55%", left: "55%", media: "img/2/foto12.jpg", desc: "img/2/foto12.txt", type:"info" },//14.Detalle barrera de luz zona descarga
      { top: "60%", left: "58%", media: "img/2/foto13.jpg", desc: "img/2/foto13.txt", type:"info" },//15.Detalle dispositivo barrera de luz zona de descarga
      { top: "85%", left: "80%", media: "img/2/foto14.jpg", desc: "img/2/foto14.txt", type:"info" },//16.Relé seguridad sierra
      { top: "85%", left: "85%", media: "img/2/foto15.jpg", desc: "img/2/fot15.txt", type:"info" },//17.Relé seguridad marcadora
      { top: "85%", left: "90%", media: "img/2/foto16.jpg", desc: "img/2/foto16.txt", type:"info" },//18.Relés de seguridad transporte
      { top: "85%", left: "95%", media: "img/2/foto17.jpg", desc: "img/2/foto17.txt", type:"info" }//19.Relés seguridad taladro
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
      btn.classList.add("point-btn", p.type);
      //btn.textContent = i + 1;
      const span = document.createElement("span");
      span.textContent = i + 1;
      btn.appendChild(span);
      btn.style.top = p.top;
      btn.style.left = p.left;
      btn.dataset.media = p.media;
      btn.dataset.desc = p.desc;
      btn.addEventListener("click", () => loadPoint(p));
      pointsContainer.appendChild(btn);
    });

    // Reset panel derecho y descripción
    mediaContainer.innerHTML = "";
    description.textContent = "Selecciona un punto del esquema.";
  }

  // Cargar punto
  function loadPoint(p) {
    mediaContainer.innerHTML = "";
    description.textContent = "Cargando descripción...";

    // Detener vídeo previo
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
        description.innerHTML = txt.trim().replace(/\n/g, "<br>");
      })
      .catch(() => {
        description.textContent = "Sin descripción disponible.";
      });

  }

  // Iniciar en sección 1
  loadSection(1);
});
