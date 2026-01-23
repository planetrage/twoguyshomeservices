import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

function FeaturedPosts({ posts }) {
  const formattedPosts = posts.map(post => ({
    ...post,
    formattedDate: new Date(post.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    }),
  }));

  return (
    <div className="service-area bg-white relative pt-[60px] md:pt-[100px] before:absolute before:h-[336px] before:w-[336px] before:top-[170px] before:left-[-168px]">
      <div className="custom-container">
        <h1 className="text-[28px] md:text-[56px] text-[#13144D] font-bold text-center mb-[40px] md:mb-[60px] leading-snug">
          What’s Happening at SmartTIX
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {formattedPosts.slice(0, 4).map((post, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full max-w-[500px]">
                <Image
                  src={`/images/posts/${post.image}`}
                  alt={post.title}
                  quality={70}
                  width={500}
                  height={480}
                  objectFit="cover"
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
              <div className="w-full max-w-[500px] mt-4 px-2 md:px-0">
                <ul className="flex items-center space-x-4 font-poppins text-sm text-[#22C763]">
                  <li><FaClock /></li>
                  <li>{post.formattedDate}</li>
                  <li className="border-l border-black pl-[15px] text-[#13144D]">News &amp; Events</li>
                </ul>
                <p className="mt-4 font-poppins text-[20px] md:text-[26px] text-left text-[#13144D]">
                  {post.title}
                </p>
                <div className="mt-2">
                  <Link
                    href="/posts"
                    className="text-left text-[#3754ED] hover:underline font-medium">
                    
                      Read More &gt;
                    
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts;
