import PostSlider from '../posts/post-slider';
import Link from 'next/link';

function FeaturedPost(props) {
    return (
        <div className='post-area md:pt-[100px] pt-[55px] md:pb-[140px] pb-[55px]'>
            <div className='container'>
                <div className='post-wrap flex items-center justify-center mb-[60px]'>
                    <h2 className='lm:text-[56px] lm:leading-[50px] text-[56px] text-[#13144D] md:mb-[30px] mb-[10px]'>
                        What's Happening at SmartTix
                    </h2>
                </div>
                <PostSlider posts={props.posts} />
            </div>
        </div>
    );
}

export default FeaturedPost;
