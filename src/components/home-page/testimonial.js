import Link from 'next/link';
import Image from 'next/image';

function Testimonial({ testimonialItems }) {
  return (
    <div style={{ background: 'var(--olympus-navy-light)', paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
      <div className="custom-container">
        <div className="text-center mb-10">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
            }}
          >
            Connect With Us
          </h2>
        </div>

        {/* Mobile: Show only the first tile */}
        <div className="grid grid-cols-1 justify-items-center sm:hidden">
          {testimonialItems?.[0] && (
            <div className="olympus-card w-full max-w-[240px] aspect-square flex flex-col items-center justify-center">
              <Link href={testimonialItems[0].URLSource} className="block">
                <Image
                  src="/images/testimonial/linkedin.png"
                  alt="LinkedIn"
                  quality={70}
                  width={75}
                  height={75}
                  objectFit="contain"
                  className="w-[75px] h-[75px]"
                  priority
                />
              </Link>
              <div className="mt-4">
                <Link
                  href={testimonialItems[0].URLSource}
                  className="text-sm font-medium hover:underline"
                  style={{ color: 'var(--gold-primary)' }}
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Desktop/Tablet: Show full grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {testimonialItems?.slice(0, 3).map((testimonialItem, i) => (
            <div key={i} className="olympus-card w-full max-w-[240px] aspect-square flex flex-col items-center justify-center">
              <Link href={testimonialItem?.URLSource} className="block">
                <Image
                  src={testimonialItem.image}
                  alt="Social Link"
                  quality={70}
                  width={150}
                  height={150}
                  objectFit="contain"
                  className="w-[150px] h-[150px]"
                  priority
                />
              </Link>
              <div className="mt-4">
                <Link
                  href={testimonialItem?.URLSource}
                  className="text-sm font-medium hover:underline"
                  style={{ color: 'var(--gold-primary)' }}
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
