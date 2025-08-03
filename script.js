document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeIn--visible');
      entry.target.classList.remove('fadeIn--hidden');
    } else {
      entry.target.classList.remove('fadeIn--visible');
      entry.target.classList.add('fadeIn--hidden');
    }
  });
}, { threshold: 0.1 }); // tweak threshold to taste

document.querySelectorAll('.fadeIn').forEach(el => observer.observe(el));

