import gsap from "gsap";

//targeting buttons by classnames using event listeners
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const repeat = document.querySelector(".repeat");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");

// you can store animation in variable nd use it.
const animation = gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  borderRadius: "50%",
  scale: 1.25,
  duration: 2, //box in 2 seconds turn into circle
});

//play method - on a specific animation u can use it

play.addEventListener("click", () => {
  animation.play(); //plays the animation
});

pause.addEventListener("click", () => {
  animation.pause(); // u can pause animation nd play it.
});

resume.addEventListener("click", () => {
  animation.resume();
});

restart.addEventListener("click", () => {
  animation.restart();
});

reverse.addEventListener("click", () => {
  animation.reverse();
});

repeat.addEventListener("click", () => {
  animation.repeat();
});

kill.addEventListener("click", () => {
  animation.repeat(10);
});
