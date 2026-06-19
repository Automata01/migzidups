document.querySelectorAll('.flip-card').forEach(card => {
            const inner = card.querySelector('.flip-card-inner');
            let rotation = 0;
            let busy = false;

            card.addEventListener('click', () => {
                if (busy) return;
                busy = true;
                rotation += 180; // keeps flipping to next side
                inner.style.transform = `rotateY(${rotation}deg)`;
            });

            inner.addEventListener('transitionend', () => busy = false);
        });