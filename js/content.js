window.addEventListener("scroll", function () {
            const heroContent = document.querySelector(".hero-content");

            if (window.scrollY > 50) {
                // If not at the top, hide the hero-content
                heroContent.style.opacity = "0";
                heroContent.style.pointerEvents = "none";
            } else {
                // Show it again when back at the top
                heroContent.style.opacity = "1";
                heroContent.style.pointerEvents = "auto";
            }
        });