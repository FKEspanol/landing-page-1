const header = document.getElementById("header");

window.onscroll = (e) => {
  if (scrollY >= 100) {
    header.classList.remove("header-on-top");
    header.classList.add("header-on-scroll");
  } else if (scrollY < 100) {
    header.classList.remove("header-on-scroll");
    header.classList.add("header-on-top");
  }
};
