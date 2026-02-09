//first provide target than animation in object
gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 5,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      duration: 2,
      yoyo: true, //come back nd forth
      duration: 0.5,
      onComplete: () => {
        gsap.to(".card", {
          x: -40,
          repeat: -1,
          yoyo: true,
          duration: 1,
        });
      },
    });
  },
});
