import gsap from "gsap";
gsap.to(".box", {
  opacity: 1, //property that we can modify
  rotation: 360, //when reload screen box rotates
  background: "#ff6f61",
  borderRadius: "50%",
  scale: 1.25, //u can use scaleX,scaleY also
  duration: "50%",
  scaleX: 1.25,
  duration: 5, //how many seconds animation will happen
  x: -200,
  ease: "bounce", //can we move 360 in half second nd do nothing for 1 second?there are many ease properties.
  repeat: 2,
  yoyo: true, //reverse animation in every repeat
});
//each one of this properties actually basic css properties means
//u can cahnge and animate any kind of css properties u can think of even text animations
//duration, delay, ease, repeat is gsap only  property which is not a css property
