document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll('.fadeIn');

  const options = {
    threshold: 0.1
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn--visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
