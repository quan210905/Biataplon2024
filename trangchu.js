document.querySelectorAll('.card').forEach(card => {
    const img = card.querySelector('img');
    const hoverSrc = card.getAttribute('data-hover-src');
    const defaultSrc = card.getAttribute('data-default-src');
    
    card.addEventListener('mouseover', () => {
        img.src = hoverSrc;
    });
    
    card.addEventListener('mouseout', () => {
        img.src = defaultSrc;
    });
});