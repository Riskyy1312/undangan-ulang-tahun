document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    setInterval(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }, 200);
});