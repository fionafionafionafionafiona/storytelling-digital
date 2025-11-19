import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".religion-images", {
    scrollTrigger: {
      trigger: ".religion",
      start: "top top",
      pin: true,
      scrub: true,
      markers: false,
    },
    x: "-265%",
    ease: "sine.inOut",
  });

  gsap.to(".politics-images", {
    scrollTrigger: {
      trigger: ".politics",
      start: "top top",
      pin: true,
      scrub: true,
      markers: false,
    },
    x: "-435%",
    ease: "sine.inOut",
  });

  const religionCta = document.querySelector(".religion-cta");
  const prophetImgDefault = document.querySelector(
    ".wanted-to-be-prophet-default"
  );
  const prophetImgAfter = document.querySelector(".wanted-to-be-prophet-after");

  if (religionCta) {
    religionCta.addEventListener("click", () => {
      prophetImgDefault.classList.toggle("is-hidden");
      prophetImgAfter.classList.toggle("is-active");
    });
  }

  const politicsCta = document.querySelector(".politics-cta");
  const parentsImgDefault = document.querySelector(".my-parents-default");
  const parentsImgAfter = document.querySelector(".my-parents-after");

  if (politicsCta) {
    politicsCta.addEventListener("click", () => {
      parentsImgDefault.classList.toggle("is-hidden");
      parentsImgAfter.classList.toggle("is-active");
    });
  }

  const politicsCta = document.querySelector(".politics-cta");
  const parentsImgDefault = document.querySelector(".my-parents-default");
  const parentsImgAfter = document.querySelector(".my-parents-after");

  if (politicsCta) {
    politicsCta.addEventListener("click", () => {
      parentsImgDefault.classList.toggle("is-hidden");
      parentsImgAfter.classList.toggle("is-active");
    });
  }
});
