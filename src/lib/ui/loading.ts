document.addEventListener("astro:before-preparation", () => {
  document.body.classList.add("loading");
});
document.addEventListener("astro:after-preparation", () => {
  document.body.classList.remove("loading");
});
