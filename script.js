//navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});

const navlist = document.querySelector(".nav-list, .nav-link");

navlist.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});
//end of nav bar

//section 2
const video = document.querySelector(".video");
const btn = document.querySelector(".buttons i");
const bar = document.querySelector(".video-bar");

const playPause = () => {
  if (video.paused) {
    video.play();
    btn.className = "fa-regular fa-circle-pause";
    video.style.opacity = "0.9";
  } else {
    video.pause();
    btn.className = "fa-regular fa-circle-play";
    video.style.opacity = "0.3";
  }
};
btn.addEventListener("click", () => {
  playPause();
});

video.addEventListener("timeupdate", () => {
  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%`;
  if (video.ended) {
    btn.className = "fa-regular fa-circle-play";
    vedio.style.opacity = "0.3";
  }
});
//send of ection 2

// section 3

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
// end of section 3
