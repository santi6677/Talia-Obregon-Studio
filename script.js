document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Animación tipo máquina de escribir en el texto del video
  const title = document.getElementById("h2__TO");
  const text = title.textContent;
  title.textContent = "";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50); // velocidad de escritura
    }
  }
  typeWriter();

  // 2️⃣ Animaciones al hacer scroll (fade-in y slide)
  const animatedElements = document.querySelectorAll(
    ".h3__s1, #span__s1, .muestra__cirugias, .producto, .info__redes, .footer__col"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 1s ease";
    observer.observe(el);
  });

  // 3️⃣ Efecto dinámico en imágenes (clic = zoom + rotación)
  const galleryImages = document.querySelectorAll(".muestra__cirugias, .producto img");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      img.style.transition = "transform 0.6s ease";
      img.style.transform = "scale(1.3) rotate(5deg)";
      setTimeout(() => {
        img.style.transform = "scale(1) rotate(0deg)";
      }, 600);
    });
  });

  // 4️⃣ Botón "ir arriba" con efecto
const btnUp = document.createElement("button");
btnUp.innerText = "↑";
btnUp.id = "btnUp";
btnUp.style.position = "fixed";
btnUp.style.bottom = "20px";
btnUp.style.right = "20px";
btnUp.style.width = "50px";   // ancho fijo
btnUp.style.height = "50px";  // alto fijo (igual que el ancho = círculo perfecto)
btnUp.style.fontSize = "20px";
btnUp.style.border = "none";
btnUp.style.borderRadius = "50%"; // círculo
btnUp.style.background = "linear-gradient(90deg, rgba(255,215,0,0.85), rgba(255,165,0,0.85))"; 
// degradado con 85% opacidad
btnUp.style.color = "#2e2e2eff";
btnUp.style.cursor = "pointer";
btnUp.style.display = "none";
btnUp.style.zIndex = "10000";
btnUp.style.boxShadow = "0 4px 15px rgba(0,0,0,0.5)";
btnUp.style.transition = "opacity 0.4s, transform 0.3s ease";

  document.body.appendChild(btnUp);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnUp.style.display = "block";
      btnUp.style.opacity = "1";
    } else {
      btnUp.style.opacity = "0";
      setTimeout(() => (btnUp.style.display = "none"), 400);
    }
  });

  btnUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navHeader = document.querySelector(".nav__header");

  menuToggle.addEventListener("click", () => {
    navHeader.classList.toggle("active");
  });
});