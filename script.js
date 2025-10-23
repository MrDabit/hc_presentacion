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
      { top: "85%", left: "85%", media: "img/2/foto15.jpg", desc: "img/2/foto15.txt", type:"info" },//17.Relé seguridad marcadora
      { top: "85%", left: "90%", media: "img/2/foto16.jpg", desc: "img/2/foto16.txt", type:"info" },//18.Relés de seguridad transporte
      { top: "85%", left: "95%", media: "img/2/foto17.jpg", desc: "img/2/foto17.txt", type:"info" }//19.Relés seguridad taladro
    ],

    3: [
      { top: "53%", left: "5%", media: "media/3/video1.mp4", desc: "media/3/video1.txt", type:"visual" },//1.Paseo por la línea por el lado del operario
      { top: "20%", left: "10%", media: "media/3/video2.mp4", desc: "media/3/video2.txt", type:"visual" },//2.Paseo por la línea por detrás, hasta cuadros
      { top: "20%", left: "50%", media: "media/3/video3.mp4", desc: "media/3/video3.txt", type:"visual" },//3.Paseo por la línea por detrás tras acceder por puerta
      { top: "65%", left: "5%", media: "img/3/foto1.jpg", desc: "img/3/foto1.txt", type:"visual" },//4.Panoramica desde la entrada de material
      { top: "35%", left: "3%", media: "img/3/foto2.jpg", desc: "img/3/foto2.txt", type:"visual"},//5.Vista desde entrada, cierre de empujador
      { top: "70%", left: "45%", media: "img/3/foto3.jpg", desc: "img/3/foto3.txt", type:"visual" },//6.Vista de zona de máquinas de procesado
      { top: "65%", left: "75%", media: "img/3/foto4.jpg", desc: "img/3/foto4.txt", type:"visual" },//7.Vista de mesa de salida de material
      { top: "35%", left: "90%", media: "img/3/foto5.jpg", desc: "img/3/foto5.txt", type:"danger" },//8.Puerta en calle sin enclavamiento
      { top: "43%", left: "55%", media: "img/3/foto6.jpg", desc: "img/3/foto6.txt" , type:"danger"},//9.Riesgo de acceso a maquinas desde salida trepando
      { top: "43%", left: "65%", media: "img/3/foto7.jpg", desc: "img/3/foto7.txt" , type:"danger"},//10. Riesgo de acceso a máquinas agachado por salida
      { top: "45%", left: "10%", media: "img/3/foto8.jpg", desc: "img/3/foto8.txt" , type:"info"},//11.Detalle barrera de luz entrada
      { top: "73%", left: "40%", media: "img/3/foto9.jpg", desc: "img/3/foto9.txt", type:"info" },//12.Detalle espejo barrera luz entrada
      { top: "55%", left: "37%", media: "img/3/foto10.jpg", desc: "img/3/foto10.txt" , type:"info"},//13.Detalle barrera de luz máquinas
      { top: "65%", left: "55%", media: "img/3/foto11.jpg", desc: "img/3/foto11.txt", type:"info" },//14.Detalle espejo barrera luz máquinas
      { top: "45%", left: "37%", media: "img/3/foto12.jpg", desc: "img/3/foto12.txt" , type:"info"},//15.Detalle receptor barrera luz máquinas
    ],
    4: [
      { top: "50%", left: "95%", media: "media/4/video1.mp4", desc: "media/4/video1.txt", type:"visual" },//1.Paseo por el tren de rodillos de entrada
      { top: "75%", left: "75%", media: "media/4/video2.mp4", desc: "media/4/video2.txt", type:"visual" },//2.Paseo por la zona de entrada de material 
      { top: "40%", left: "62%", media: "media/4/video3.mp4", desc: "media/4/video3.txt", type:"visual" },//3.Paseo por la zona de entrada desde la campa
      { top: "52%", left: "57%", media: "media/4/video4.mp4", desc: "media/4/video4.txt", type:"visual" },//4.Detalle de carga de material en la entrada y movimiento auto de rodillos
      { top: "40%", left: "58%", media: "media/4/video5.mp4", desc: "media/4/video5.txt", type:"visual" },//5.Detalle de acceso desde la campa
      { top: "73%", left: "47%", media: "media/4/video6.mp4", desc: "media/4/video6.txt", type:"visual" },//6.Paseo desde la zona de pintura en el lado del operario hasta la salida de material.
      { top: "50%", left: "49%", media: "media/4/video7.mp4", desc: "media/4/video7.txt", type:"visual" },//7.Paseo desde el precalentador hasta el secado por la parte posterior
      { top: "65%", left: "59%", media: "img/4/foto1.jpg", desc: "img/4/foto1.txt", type:"danger"},//8.Acceso a zona de precalentador desde entrada
      { top: "65%", left: "55%", media: "img/4/foto2.jpg", desc: "img/4/foto2.txt", type:"danger"},//9.Acceso a precalentador y granalla desde zona intermedia
      { top: "65%", left: "48%", media: "img/4/foto3.jpg", desc: "img/4/foto3.txt", type:"danger"},//10.Acceso a granalla y pintura en zona intermedia
      { top: "70%", left: "50%", media: "img/4/foto4.jpg", desc: "img/4/foto4.txt", type:"danger"},//11. Posible acceso a partes móviles del módulo de cepillo desde escalera
      { top: "65%", left: "30%", media: "img/4/foto5.jpg", desc: "img/4/foto5.txt", type:"danger"},//12. Acceso a transporte de cadenas 
      { top: "30%", left: "5%", media: "img/4/foto6.jpg", desc: "img/4/foto6.txt", type:"info"},//13.Detalle de zona de salida desde campa
      { top: "50%", left: "53%", media: "img/4/foto7.jpg", desc: "img/4/foto7.txt", type:"info"},//14.Detalle de zona de entrada desde muro de nave
      { top: "50%", left: "35%", media: "img/4/foto8.jpg", desc: "img/4/foto8.txt", type:"info"},//15.Detalle de zona de salida desde muro de nave
      { top: "95%", left: "80%", media: "img/4/foto9.jpg", desc: "img/4/foto9.txt", type:"info"},//16.Detalle relés de seguridad en granalladora
      { top: "95%", left: "85%", media: "img/4/foto10.jpg", desc: "img/4/foto10.txt", type:"info"}//17.Detalle de relés de seguridad en pintura
    ],
    5: [
      { top: "50%", left: "5%", media: "media/5/video1.mp4", desc: "media/5/video1.txt", type:"visual" },//1.Paseo desde la zona de entrada
      { top: "60%", left: "50%", media: "media/5/video2.mp4", desc: "media/5/video2.txt", type:"visual" },//2.Paseo hacia la zona de salida
      { top: "45%", left: "35%", media: "media/5/video3.mp4", desc: "media/5/video3.txt", type:"visual" },//3.Transporte y medición de perfiles
      { top: "40%", left: "5%", media: "img/5/foto1.jpg", desc: "img/5/foto1.txt", type:"danger"},//4.Vista de zona de entrada Peligro
      { top: "28%", left: "20%", media: "img/5/foto2.jpg", desc: "img/5/foto2.txt", type:"danger"},//5.Resguardo movil sin cierre ni enclavamiento
      { top: "18%", left: "50%", media: "img/5/foto3.jpg", desc: "img/5/foto3.txt", type:"info"},//6.Barrera de luz zona máquinas 1
      { top: "18%", left: "40%", media: "img/5/foto4.jpg", desc: "img/5/foto4.txt", type:"info"},//7.Barera de luz zona máquinas 2
      { top: "90%", left: "85%", media: "img/5/foto5.jpg", desc: "img/5/foto5.txt", type:"info"},//8.Relés de seguridad en sierra
      { top: "90%", left: "90%", media: "img/5/foto6.jpg", desc: "img/5/foto6.txt", type:"info"},//9.Relés de seguridad en taladro

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
