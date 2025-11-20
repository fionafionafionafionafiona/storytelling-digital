import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".loading-page")) {
    document.querySelector(".loading-page").remove();
  }

  //Timeline présentation
  const tlIntroduction = gsap.timeline({
    delay: 1,
    repeat: -1,
    repeatDelay: 2,
  });
  tlIntroduction.to(".presentation-marjane-open-eye", {
    opacity: 0,
    duration: 0.1,
  });
  tlIntroduction.to(
    ".presentation-marjane-closed-eye",
    { opacity: 1, duration: 0.1 },
    "<"
  );
  tlIntroduction.to({}, { duration: 0.4 });

  tlIntroduction.to(".presentation-marjane-closed-eye", {
    opacity: 0,
    duration: 0.1,
  });
  tlIntroduction.to(
    ".presentation-marjane-open-eye",
    { opacity: 1, duration: 0.1 },
    "<"
  );

  //Scrolls horizontaux
  gsap.to(".religion-images", {
    scrollTrigger: {
      trigger: ".religion",
      start: "top top",
      pin: true,
      scrub: 2,
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
      scrub: 2,
      markers: false,
    },
    x: "-435%",
    ease: "sine.inOut",
  });

  //CTAs changement de contenu
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

  const seeMoreBtn = document.querySelector(".see-more-btn");
  const seeLessBtn = document.querySelector(".see-less-btn");
  const bookDetails = document.querySelector(".book-details");

  if (seeMoreBtn && seeLessBtn && bookDetails) {
    seeMoreBtn.addEventListener("click", () => {
      seeMoreBtn.classList.add("is-hidden");
      seeLessBtn.classList.add("is-active");
      bookDetails.classList.add("is-open");
    });

    seeLessBtn.addEventListener("click", () => {
      seeLessBtn.classList.remove("is-active");
      seeMoreBtn.classList.remove("is-hidden");
      bookDetails.classList.remove("is-open");
    });
  }
});
