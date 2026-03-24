import Link from 'next/link';

export function CommonHeroSection({
  backgroundImage,
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref="/services",
  minHeightClass = 'min-h-[560px] sm:min-h-[680px] md:min-h-[780px]',
  sectionClassName = '',
  overlayClassName = 'bg-slate-900/55',
  ctaClassName = 'gtc-primary-btn',
  contentMaxWidthClass = 'max-w-6xl',
  extraImg = false,
}) {
  const extraSpacingClass = extraImg
    ? 'mb-40 pb-40 sm:mb-56 sm:pb-56 md:mb-[320px] md:pb-[320px]'
    : 'mb-0 pb-10 sm:pb-16 md:pb-20';

  return (
    <section
      className={`gtc-section relative w-full ${!extraImg ? 'flex' : ''} items-center overflow-visible bg-cover bg-center bg-no-repeat py-10 text-white sm:py-16 md:py-20 ${extraSpacingClass} ${minHeightClass} ${sectionClassName}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className={`pointer-events-none absolute inset-0 ${overlayClassName}`} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(255,255,255,0.1),transparent)]" />

      <div className={`relative gtc-container mx-auto text-center ${contentMaxWidthClass}`}>
        {eyebrow ? <p className="gtc-eyebrow text-white/70">{eyebrow}</p> : null}
        <h1 className="mt-3 gtc-title text-white sm:mt-4 leading-tight">{title}</h1>
        <p className="mt-4 gtc-body text-white/85 sm:mt-6 md:text-xl">{description}</p>
        {ctaLabel && ctaHref ? (
          <div className="mt-6 sm:mt-8">
            <Link href={ctaHref} className={ctaClassName}>
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
      {extraImg &&
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 w-full max-w-7xl -translate-x-1/2 translate-y-1/2 px-4">
          <img
            className="h-64 w-full object-contain sm:h-80 md:h-[550px]"
            src="/home-banner-img.webp"
            alt="Hero visual"
          />
        </div>
      }
    </section>
  );
}
