document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("latestVideo");
    let audioAllowed = false;

    // Always start muted
    video.muted = true;

    // First click anywhere on window → allow audio
    window.addEventListener("click", () => {
        audioAllowed = true;
        if (isVideoVisible(video)) {
            video.muted = false; // 🔊 unmute immediately if visible
        }
    }, { once: true });

    // Function to check visibility
    function isVideoVisible(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        return (
            rect.top < windowHeight * 0.5 &&
            rect.bottom > windowHeight * 0.5 &&
            rect.left < windowWidth &&
            rect.right > 0
        );
    }

    // Intersection observer → play when visible, pause when not
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play().catch(err => console.log("Autoplay blocked:", err));
                if (audioAllowed) {
                    video.muted = false; // 🔊 unmute if allowed
                }
            } else {
                video.pause();
                video.muted = true; // mute when leaving
            }
        });
    }, { threshold: 0.5 }); // 50% visible

    observer.observe(video);
});