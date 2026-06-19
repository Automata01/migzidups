 window.addEventListener("scroll", function () {
            const heroContent = document.querySelector(".navbar");

            if (window.scrollY === 0) {
                // Top of the page
                heroContent.style.backgroundColor = "transparent"; // remove background
            } else {
                // Scrolled down
                heroContent.style.backgroundColor = "#f2f2f2"; // keep current or fallback
            }
        });