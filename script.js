
// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const reveal = () => {
  const els = document.querySelectorAll('.card, .step-card, .project');
  const vh = window.innerHeight;
  els.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh * 0.9) el.classList.add('reveal');
  });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Tilt effect
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x/rect.width) - 0.5) * 8;
    const rotateX = -((y/rect.height) - 0.5) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
  });
});
