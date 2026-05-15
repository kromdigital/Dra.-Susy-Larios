document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: 'smooth'
    });
  });
});

// Botón WhatsApp
document.querySelector(".whatsapp").addEventListener("click", () => {
  window.open("https://wa.me/5213322189482", "_blank");
});

document.querySelectorAll(".btn-primary, .btn-outline, .btn-contacto").forEach(button => {
  button.addEventListener("click", function(e) {
    const circle = document.createElement("span");
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - this.offsetLeft - diameter / 2}px`;
    circle.style.top = `${e.clientY - this.offsetTop - diameter / 2}px`;
    circle.classList.add("ripple");

    const ripple = this.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    this.appendChild(circle);
  });
});


const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
  observer.observe(card);
});



document.querySelectorAll(".ba-image").forEach(container => {

  const before = container.querySelector(".img-before");
  const slider = container.querySelector(".ba-slider");

  const move = (x) => {

    const rect = container.getBoundingClientRect();

    let offset = x - rect.left;

    if (offset < 0) offset = 0;
    if (offset > rect.width) offset = rect.width;

    const percent = (offset / rect.width) * 100;

    before.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;

    slider.style.left = percent + "%";
  };

  /* PC → solo mover mouse */
  container.addEventListener("mousemove", (e) => {
    move(e.clientX);
  });

  /* MOBILE */
  container.addEventListener("touchmove", (e) => {
    move(e.touches[0].clientX);
  });

});

const buttons = document.querySelectorAll(".social-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80
    },

    color: {
      value: "#f92751"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.53
    },

    size: {
      value: 4
    },

    move: {
      enable: true,
      speed: 1.2
    },

    line_linked: {
      enable: true,
      distance: 140,
      color: "#f2224c",
      opacity: 0.53,
      width: 1
    }
  },

  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    }
  },

  retina_detect: true
});