
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("show");
}

// Close the nav menu when a link is clicked
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navMenu");
    if (nav.classList.contains("show")) {
      toggleMenu();
    }
  });
});
