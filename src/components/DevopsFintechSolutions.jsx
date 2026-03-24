'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 12h9m0 0-3.5-3.5M16 12l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cards = [
  {
    title: 'Fintech Platform Development',
    description:
      'Design and development of technology solutions tailored for brokerage platforms and financial services environments.',
  },
  {
    title: 'Cloud Infrastructure Management',
    description:
      'Designing and managing scalable cloud environments that support reliable system performance and flexible infrastructure configuration.',
  },
  {
    title: 'Build & Development Automation',
    description:
      'Implementing automated build and testing processes that help ensure consistent development cycles and reliable software delivery.',
  },
  {
    title: 'Release & Deployment Management',
    description:
      'Establishing structured release and deployment workflows that allow new features and updates to be delivered smoothly and predictably.',
  },
  {
    title: 'Infrastructure Optimization',
    description:
      'Reviewing and improving existing infrastructure to enhance performance, efficiency, and long-term scalability.',
  },
  {
    title: 'System Monitoring & Reliability',
    description:
      'Implementing monitoring practices that help maintain system stability, performance visibility, and reliable platform operations.',
  },
];

function SlimCard({ title }) {
  return (
    <article className="relative flex min-h-[240px] flex-col justify-between rounded-2xl bg-gtc-surface p-6 shadow-gtc transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      <div
        className="mx-auto select-none gtc-card-title"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        {title}
      </div>
      <div className="flex items-center justify-center text-gtc-primary">
        <ArrowIcon className="h-5 w-5" />
      </div>
    </article>
  );
}

function ContentCard({ title, description }) {
  return (
    <article className="gtc-card h-full">
      <div className="flex items-start justify-between gap-4">
        <h3 className="gtc-card-title">{title}</h3>
        <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gtc-primary/10 text-gtc-primary">
          <ArrowIcon className="h-4 w-4" />
        </span>
      </div>
      <p className="gtc-card-desc">{description}</p>
    </article>
  );
}

function ExpandingCard({
  title,
  description,
  active,
  onEnter,
  onLeave,
  onFocus,
  onBlur,
  ctaLabel,
}) {
  return (
    <div
      className={[
        'group relative flex h-[400px] min-w-[84px] flex-[1] cursor-default flex-col overflow-hidden rounded-xl border border-gtc-border bg-white shadow-gtc transition-[flex,transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
        active ? 'flex-[3] -translate-y-0.5 border-gtc-primary/20 shadow-gtc-lg' : 'hover:border-gtc-primary/20',
      ].join(' ')}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <button
        type="button"
        className="absolute inset-0 z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gtc-primary/40"
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label={title}
      />

      <div className="relative z-0 flex h-full flex-col p-5 sm:p-6">
        {/* Collapsed (vertical) label */}
        <div className={active ? 'hidden' : 'flex h-full flex-col items-center justify-end gap-3'}>
          <div
            className="select-none text-lg font-semibold tracking-tight text-slate-900 sm:text-xl"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            {title}
          </div>
          <div className="mb-1 flex items-center justify-center text-gtc-primary">
            <ArrowIcon className="h-5 w-5" />
          </div>
        </div>

        {/* Expanded content */}
        <div className={active ? 'block' : 'hidden'}>
          <p className="gtc-eyebrow">Solution</p>
          <h3 className="mt-3 gtc-card-title">
            {title}
          </h3>
          <p className="gtc-body mt-3">{description}</p>

          <div className="mt-auto pt-6">
            {ctaLabel ? (
              <button type="button" className="gtc-primary-btn">
                {ctaLabel}
              </button>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-full bg-gtc-primary/10 px-3 py-1 text-xs font-semibold text-gtc-primary">
                <span>Explore</span>
                <ArrowIcon className="h-4 w-4" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function useScrollProgress(scrollerRef) {
  const [state, setState] = useState({ canPrev: false, canNext: false, progress: 0 });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const max = Math.max(0, el.scrollWidth - el.clientWidth);
      const x = el.scrollLeft;
      setState({
        canPrev: x > 2,
        canNext: x < max - 2,
        progress: max === 0 ? 0 : Math.min(1, Math.max(0, x / max)),
      });
    };

    update();
    el.addEventListener('scroll', update, { passive: true });

    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
    };
  }, [scrollerRef]);

  return state;
}

export function DevopsFintechSolutions() {
  const [featured, ...rest] = cards;
  const scrollerRef = useRef(null);
  const { canPrev, canNext, progress } = useScrollProgress(scrollerRef);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByCards = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('[data-carousel-card="true"]');
    const step = card ? card.getBoundingClientRect().width : 320;
    el.scrollBy({ left: direction * (step + 16), behavior: 'smooth' });
  };

  const dots = useMemo(() => Math.min(5, Math.max(3, rest.length)), [rest.length]);
  const activeDot = Math.round(progress * (dots - 1));

  return (
    <section className="gtc-section bg-white py-10 sm:py-16">
      <div className="gtc-container">
        <div className="mb-8 sm:mb-10">
          <h2 className="gtc-title">
            Advanced DevOps &amp; Fintech Infrastructure
          </h2>
          <p className="gtc-subtitle ">
            Technology solutions designed to support brokerage platforms through scalable infrastructure,
            automated development processes, and reliable system performance.
          </p>
        </div>

        {/* Mobile: featured card + slider */}
        <div className="lg:hidden">
          <article className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gtc-surface to-white p-5 shadow-[0_0_0_1px_rgba(17,24,39,0.06)] sm:rounded-2xl sm:p-8 md:p-10">
            <div className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full bg-gtc-primary/10 blur-3xl" />
            <h3 className="text-xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-3 max-w-xl text-xs leading-5 text-slate-600 sm:mt-4 sm:text-sm sm:leading-6 md:text-base">
              {featured.description}
            </p>

            <div className="mt-6 sm:mt-8">
              <button type="button" className="gtc-primary-btn">
                Get a consultation
              </button>
            </div>
          </article>

          <div className="relative mt-6 overflow-hidden rounded-xl bg-white p-4 shadow-[0_0_0_1px_rgba(17,24,39,0.06)] sm:rounded-2xl sm:p-6 md:p-7">
            <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4 sm:gap-4">
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold tracking-tight text-slate-900 sm:text-sm">Solutions</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollByCards(-1)}
                  disabled={!canPrev}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gtc-border bg-white text-slate-800 shadow-sm transition hover:bg-gtc-surface disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Previous"
                >
                  <ArrowIcon className="h-5 w-5 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCards(1)}
                  disabled={!canNext}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gtc-border bg-white text-slate-800 shadow-sm transition hover:bg-gtc-surface disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Next"
                >
                  <ArrowIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent" />

            <div
              ref={scrollerRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {rest.map((c) => (
                <div
                  key={c.title}
                  data-carousel-card="true"
                  className="w-[86%] shrink-0 snap-start sm:w-[420px]"
                >
                  <ContentCard title={c.title} description={c.description} />
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-center gap-2">
              {Array.from({ length: dots }).map((_, i) => (
                <span
                  key={i}
                  className={[
                    'h-1.5 w-6 rounded-full transition',
                    i === activeDot ? 'bg-gtc-primary' : 'bg-gtc-border',
                  ].join(' ')}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: all cards collapsed, expand on hover (like reference) */}
        <div className="hidden lg:flex lg:gap-5">
          {cards.map((c, idx) => (
            <ExpandingCard
              key={c.title}
              title={c.title}
              description={c.description}
              ctaLabel={idx === 0 ? 'Get a consultation' : undefined}
              active={activeIndex === idx}
              onEnter={() => setActiveIndex(idx)}
              onLeave={() => setActiveIndex(0)}
              onFocus={() => setActiveIndex(idx)}
              onBlur={() => setActiveIndex(0)}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <button
            type="button"
            className="gtc-primary-btn"
          >
            Discover DevOps Solutions
          </button>
        </div>
      </div>
    </section>
  );
}

