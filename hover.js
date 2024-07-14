document.querySelectorAll('.card-bottom').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('shadow');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('shadow');
    });
});