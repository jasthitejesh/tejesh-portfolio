// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (toggle && menu){
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('show');
  });
}

// Active link on scroll
const sections = [...document.querySelectorAll('section[id]')];
const links = [...document.querySelectorAll('.nav-link')];

function setActiveLink(){
  const scrollY = window.scrollY + 100;
  let currentId = '';
  for (const sec of sections){
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (scrollY >= top && scrollY < bottom){ currentId = sec.id; break; }
  }
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`));
}
setActiveLink();
window.addEventListener('scroll', setActiveLink);

// Smooth close menu on link click (mobile)
links.forEach(a => a.addEventListener('click', () => {
  if (menu.classList.contains('show')) menu.classList.remove('show');
}));

// Optional: intercept contact form if no Formspree set
const form = document.querySelector('.contact-form');
if (form && form.action.includes('your-id')){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formspree not configured yet. Replace action with your Formspree endpoint.');
  });
}
