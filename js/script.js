// Our Team Section Under about us page
const imageEl = document.querySelectorAll("#img");
const socialLinksEl = document.querySelectorAll(".social-links-div");
const categoryEl = document.querySelectorAll(".work-category");

// About Us Section
imageEl.forEach((img, index) => {
  img.addEventListener("click", () => {
    socialLinksEl[index].classList.toggle("hidden");
  });
});

// Work Section
categoryEl.forEach((category) => {
  category.addEventListener("click", () => {
    categoryEl.forEach((p) => p.classList.remove("clicked"));
    category.classList.add("clicked");
  });
});
