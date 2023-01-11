const header = document.getElementById("header");
const menuBtn = document.getElementById("show-menu-btn");
const dropDownMenu = document.getElementById("drop-down-menu");

let menuIsClosed = true;

window.onscroll = (e) => {
  if (scrollY >= 100) {
    header.classList.remove("header-on-top");
    header.classList.add("header-on-scroll", "show-header-bg");
  } else if (scrollY < 100 && menuIsClosed) {
    header.classList.remove("header-on-scroll", "show-header-bg");
    header.classList.add("header-on-top");
  } else if (scrollY < 100 && menuIsClosed === false) {
    header.classList.remove("header-on-scroll");
    header.classList.add("header-on-top");
  }
};

menuBtn.addEventListener("click", (e) => {
  const showMenu = () => {
    dropDownMenu.style.display = "block";
    dropDownMenu.style.height = "auto";
    menuIsClosed = false;
  };

  const closeMenu = () => {
    dropDownMenu.style.display = "none";
    dropDownMenu.style.height = "0px";
    menuIsClosed = true;
  };
  if (menuIsClosed && scrollY > 100) {
    showMenu();
  } else if (!menuIsClosed && scrollY > 100) {
    closeMenu();
  } else if (menuIsClosed && scrollY < 100) {
    showMenu();
    header.classList.add("show-header-bg");
  } else if (!menuIsClosed && scrollY < 100) {
    closeMenu();
    header.classList.remove("show-header-bg");
  }
});
