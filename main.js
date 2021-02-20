let nav = document.querySelector(".nav");

nav.querySelectorAll("li a").forEach((a, i) => {
  a.onclick = (e) => {
    if (a.classList.contains("nav-item--active")) return;

    nav
      .querySelector("li a.nav-item--active")
      .classList.remove("nav-item--active");

    a.classList.add("nav-item--active");

    let nav_circle = nav.querySelector(".nav-circle");

    nav_circle.style.left = `calc(${i * 120 + 45}px - 28px)`;
  };
});
