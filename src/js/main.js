import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function () {
  const loadingPage = document.querySelector(".loading-page");
  if (loadingPage) {
    setTimeout(() => loadingPage.remove(), 1500);
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

  //Videos en hover
  const religionBtn = document.querySelector(".religion-btn");
  const politicsBtn = document.querySelector(".politics-btn");

  const religionVideo = document.querySelector(".paradoxical-video-religion");
  const politicsVideo = document.querySelector(".paradoxical-video-politics");

  if (religionBtn && religionVideo) {
    religionBtn.addEventListener("mouseenter", () => {
      religionVideo.currentTime = 0; // recommence depuis le début
      religionVideo.loop = true; // boucle infinie
      religionVideo.play();
    });

    religionBtn.addEventListener("mouseleave", () => {
      religionVideo.pause();
      religionVideo.currentTime = 0; // remettre à zéro si besoin
    });
  }

  if (politicsBtn && politicsVideo) {
    politicsBtn.addEventListener("mouseenter", () => {
      politicsVideo.currentTime = 0;
      politicsVideo.loop = true;
      politicsVideo.play();
    });

    politicsBtn.addEventListener("mouseleave", () => {
      politicsVideo.pause();
      politicsVideo.currentTime = 0;
    });
  }

  //buy-book-btn animation
  const buyBookBtnSpans = document.querySelectorAll(".buy-book-btn span");
  buyBookBtnSpans.forEach((span, i) => {
    span.style.animationDelay = `${i * 0.03}s`;
  });

  //Vitesse des scrolls horizantaux
  const zones = document.querySelectorAll(".politics, .religion");

  zones.forEach((zone) => {
    let target = zone.scrollLeft;
    let current = zone.scrollLeft;

    zone.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        target += e.deltaY / 2;
      },
      { passive: false }
    );

    function smooth() {
      current += (target - current) * 0.1;
      zone.scrollLeft = current;
      requestAnimationFrame(smooth);
    }
    smooth();
  });
});
