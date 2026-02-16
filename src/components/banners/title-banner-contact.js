import Link from 'next/link';

function Banner() {
  return (
    <div className="custom-container mb-6">
      <div className="pt-[60px] pb-[60px] bg-[#0B1120] rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <h2 className="text-[18px] md:text-[24px] text-[#F2EDE8] text-center md:text-left px-4">
            Connect with our casino analytics experts for a demo of the Goonzerflow platform today.
          </h2>

          <div className="flex justify-center md:justify-start px-4">
            <Link
              href="/demo"
              className="bg-[#D4B85A] text-[#0B1120] px-6 py-3 rounded-md shadow-md text-[18px] md:text-[24px] font-bold text-center hover:bg-[#C9A84C] transition w-full max-w-[280px]">

                Schedule a demo &gt;

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
