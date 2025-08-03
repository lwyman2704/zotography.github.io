// src/hooks/useReveal.js
import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll('.fade-in-on-scroll')
      .forEach(el => obs.observe(el));

    return () => obs.disconnect();
  }, []);
}
