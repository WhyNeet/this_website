const setScroll = () =>
  document.documentElement.style.setProperty(
    "--scroll",
    window.scrollY.toString()
  );

document.addEventListener("astro:page-load", setScroll);

window.addEventListener("scroll", setScroll);
