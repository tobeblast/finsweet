// Our Team Section Under about us page
const imageEl = document.querySelectorAll("#img");
const socialLinksEl = document.querySelectorAll(".social-links-div");

imageEl.forEach((img, index) => {
  img.addEventListener("click", () => {
    socialLinksEl[index].classList.toggle("hidden");
  });
});
