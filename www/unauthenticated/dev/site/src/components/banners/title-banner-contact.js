import Link from 'next/link';

function Banner() {
  return (
    <div className="custom-container mb-6">
      <div className="pt-[60px] pb-[60px] bg-azure rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <h2 className="text-[18px] md:text-[24px] text-black text-center md:text-left px-4">
            Connect with our ticket management experts for a demo of the SmartTIX platform today.
          </h2>

          <div className="flex justify-center md:justify-start px-4">
            <Link href="/demo">
              <a className="bg-[#6AEF5B] text-[#13144D] px-6 py-3 rounded-md shadow-md text-[18px] md:text-[24px] font-bold text-center hover:bg-[#5adc4d] transition w-full max-w-[280px]">
                Schedule a demo &gt;
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
