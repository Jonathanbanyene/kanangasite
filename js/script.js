// simple script for future interactions
console.log('Kananga static site loaded');
// smooth scroll for anchor links
document.addEventListener('click', function(e){
  const a = e.target.closest('a');
  if (!a) return;
  if (a.getAttribute('href')?.startsWith('#')){
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  }
});

<script>
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');

// Ouvre/ferme le menu
hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Ferme le menu après clic sur un lien
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});
</script>