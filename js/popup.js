const openBtn = document.getElementById('openPopup');
        const overlay = document.getElementById('overlay');

        openBtn.addEventListener('click', () => {
            overlay.style.display = 'flex';
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        });