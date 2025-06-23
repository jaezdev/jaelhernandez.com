import { initAnimations, initBrutalistLinkHover } from './animations.js';
import initI18n from './i18n.js';
// Initialize when DOM is loaded

//listener for dom before showing

document.addEventListener('DOMContentLoaded', async () => {
  await initI18n(); // wait for translations before rendering

  // Now show the page
  document.body.style.visibility = 'visible';
  initAnimations();
  initBrutalistLinkHover();
  

  // Add some interactive animations
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1.05,
        ease: "power2.out"
      });
    });
    
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out"
      });
    });
  });
});