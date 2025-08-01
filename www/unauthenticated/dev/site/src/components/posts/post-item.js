import Link from 'next/link';
import Image from 'next/image';
import { SlClock } from "react-icons/sl";

function PostItem(props) {
    const { title, image, date, slug } = props.posts;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    });
    
    const imagePath = `/images/posts/${image}`;
    const linkPath = `/pages/${slug}`;

    //console.log(linkPath);

    return (
        <div className='post-item rounded-lg'>
            <Link href={linkPath}>
                <a>
                    <div className='post-img block'>
                        <Image
                            src={imagePath}
                            alt={title}
                            width={374}
                            height={303}
                            layout='responsive'
                            quality={60}
                            priority
                        />
                    </div>
                    <div className='post-content'>
                        {/*<span>test</span>
                        <span>test2</span>
                        <span>test3</span>
                        <div className='grid grid-cols-2'>
                            <span className='text-[14px] leading-6 mt-2 grid grid-cols-2 w-full'>
                                <span className='p-1 text-primary w-1/4'><SlClock /></span>                                
                                <span className='p-1 w-3/4'>{formattedDate}</span>
                            </span>
                            <span className='text-[14px] leading-6 block mt-2 w-3/4'>
                                <span className='p-1 w-full border-l'>
                                    News & Events
                                </span>
                            </span>
                        </div>*/}
                        <h2 className='text-[24px] leading-[34px] mt-6 transition duration-300 hover:text-[#cbaf71] hover:underline'>
                            {title}
                        </h2>
                        <div className='text-[14px] leading-6 text-[#222] block mt-2'>
                             Read More &gt;
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default PostItem;
