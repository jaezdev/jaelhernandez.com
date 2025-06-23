import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export function initAnimations() {
  // Hero text animation (all at once)
  gsap.from([
    ".bio-title-brutalist",
  ], {
    duration: .5,
    y: -50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0,
  });

  gsap.from([
    ".brutalist-link",
    ".social-links",
  ], {
    duration: .5,
    y: 200,
    ease: "power1.out",
    stagger: 0,
  });

  

 
}

// GSAP hover effect for .brutalist-link
export function initBrutalistLinkHover() {
  const links = document.querySelectorAll('.brutalist-link');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        boxShadow: '4px 4px 0 #000',
        x: -4,
        y: -4,
        color: '#000',
        backgroundColor: '#fff',
        duration: 0.15,
        overwrite: 'auto'
      });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        boxShadow: '0 0 0 #000',
        x: 0,
        y: 0,
        color: '#fffde4',
        backgroundColor: '#000',
        duration: 0.15,
        overwrite: 'auto'
      });
    });
  });
}