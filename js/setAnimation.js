const fadeUpElement = document.getElementsByClassName("fade-up-on-scroll");

const animationBehavior = {
  "data-aos": "fade-up",
  "data-aos-offset": "0",
  "data-aos-delay": "50",
  "data-aos-duration": "1000",
  "data-aos-easing": "ease-in-out",
  "data-aos-mirror": "true",
  "data-aos-once": "false",
};

[...fadeUpElement].forEach((e) => {
  for (key in animationBehavior) {
    e.setAttribute(key, animationBehavior[key]);
  }
});
