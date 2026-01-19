const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", e => {
  e.preventDefault();
  msg.textContent = "Thanks! Your message has been sent.";
  form.reset();
});

// Extra 2: Back to top button
const topBtn = document.getElementById("topBtn");
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Extra 3: Smooth scrolling nav
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Extra 4: Dynamic year
document.querySelector("footer p").innerHTML =
  `© ${new Date().getFullYear()} Vo Xuan Long`;
