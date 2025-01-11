// Add animations to timeline items
document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.5 });

  timelineItems.forEach((item) => {
    observer.observe(item);
  });
});

// Show message when a social icon is clicked
function showMessage(platform) {
  alert(`You clicked on the ${platform} icon!`);
}
