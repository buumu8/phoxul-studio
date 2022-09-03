const btn = document.getElementById("hamburger");
const lines = document.querySelectorAll(".hamburger__line");
const nav = document.getElementById("header_nav");

btn.addEventListener("click", () => {
  lines.forEach((line, count) => {
    line.classList.toggle(`hamburger__line-${count + 1}`);
  });
  nav.classList.toggle("display__nav");
});
