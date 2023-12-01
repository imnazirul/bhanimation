const img_container = document.querySelector(".img-container");
const head = document.querySelector("h1");
window.addEventListener("scroll", (event) => {
  resizeImg();
  console.log(window.scrollY);
});

function resizeImg() {
  img_container.style.opacity = 1 - scrollY / 400;
  img_container.style.backgroundSize = 150 - scrollY / 5 + "%";
  if (scrollY > 301) {
    head.style.boxShadow = "0px 1px 5px rgba(0, 0, 0, 0.5)";
  } else {
    head.style.boxShadow = "0px 0px 0px transparent";
  }
}
