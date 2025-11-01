// Simple card animation on hover handled by CSS
// No additional JS needed for the base animations.

// You can add any interactivity here later if needed.

// Example: Card hover effect fallback for touch devices
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('touchstart', () => {
    card.classList.toggle('hover');
  });
});