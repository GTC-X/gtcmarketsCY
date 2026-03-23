'use client';

import { useEffect, useRef, useState } from 'react';

export function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`gtc-reveal ${inView ? 'gtc-reveal--in' : ''} ${className}`}>
      {children}
    </div>
  );
}

