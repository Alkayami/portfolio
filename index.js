// SHOW AND HIDE NAVBAR ON SCROLL
let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

// NAVBAR MENU OPEN AND CLOSE
const body = document.querySelector("body");
const menuRight = document.querySelector(".menu_right");
const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const listMenu = document.querySelectorAll("ul li");

menuOpen.addEventListener("click", () => {
  menuRight.classList.add("active");
  menuOpen.classList.add("hide");
  menuClose.classList.remove("hide");
});
body.addEventListener("click", (e) => {
  if (!menuRight.contains(e.target) && !menuOpen.contains(e.target)) {
    menuRight.classList.remove("active");
    menuOpen.classList.remove("hide");
    menuClose.classList.add("hide");
  }
});

listMenu.forEach((item) => {
  item.addEventListener("click", () => {
    menuRight.classList.remove("active");
    menuOpen.classList.remove("hide");
    menuClose.classList.add("hide");
  });
});

// 3D HOVER
let elements = document.querySelectorAll("#img-hover-3d");

elements.forEach((el) => {
  const height = el.clientHeight;
  const width = el.clientWidth;

  el.addEventListener("mousemove", function handleMove(e) {
    const xVal = e.layerX;
    const yVal = e.layerY;

    const yRotation = 16 * ((xVal - width / 2) / width);
    const xRotation = -16 * ((yVal - height / 2) / height);

    const string =
      "perspective(500px) scale(1.1) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    el.style.transform = string;
  });

  el.addEventListener("mouseout", function handleMouseOut() {
    el.style.transform = "perspective(500px) scale(1)";
  });

  /* Add listener for mouseout event, remove the rotation */
  el.addEventListener("mouseout", function () {
    el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });

  /* Add listener for mousedown event, to simulate click */
  el.addEventListener("mousedown", function () {
    el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
  });

  /* Add listener for mouseup, simulate release of mouse click */
  el.addEventListener("mouseup", function () {
    el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
  });
});

// AOS

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenEl = document.querySelectorAll(".unvisible");
hiddenEl.forEach((el) => observer.observe(el));
