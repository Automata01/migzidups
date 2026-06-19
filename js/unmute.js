window.addEventListener("click", () => {
    audioAllowed = true;
    if (isVideoVisible(video)) {
        video.muted = false; // unmute immediately if visible
    }
}, { once: true });