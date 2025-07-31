// Our Team Section Under about us page
const imageEl = document.querySelectorAll("#img");
const socialLinksEl = document.querySelectorAll(".social-links-div");
const categoryEl = document.querySelectorAll(".work-category");
const sendMessageBtnEl = document.querySelector(".send-message");
const formEl = document.querySelector(".form");

// About Us Section
imageEl.forEach((img, index) => {
  img.addEventListener("click", () => {
    socialLinksEl.forEach((link) => link.classList.add("hidden"));
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

// Contact Us Button
sendMessageBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (formEl.checkValidity()) {
    alert("Message sent successfully! We will get back to you soon.");
    formEl.reset();
  } else {
    alert("Please fill in all required fields.");
  }
});
