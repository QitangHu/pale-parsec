const menu = document.querySelector('.menu');

menu?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  // The navigation's visibility is driven by this disclosure state in CSS.
  button.setAttribute('aria-expanded', String(!isExpanded));
});