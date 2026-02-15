import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import PostBanner from '../../posts/post-detail/post-banner';

function BlogContent(props) {
    const { post } = props;
    const bannerTitle = post.h1 || post.title;
    const imagePath = post.image
        ? `/images/posts/${post.slug}/${post.image}`
        : null;

    return (
        <article>
            {imagePath ? (
                <PostBanner
                    title={bannerTitle}
                    image={imagePath}
                    date={post.date}
                />
            ) : (
                <div className="post-banner relative">
                    <div className="relative w-full lg:h-[400px] h-[250px] bg-gradient-to-r from-[#13144D] to-[#22C763]" />
                    <div className="container">
                        <div className="content absolute top-1/2 transform -translate-y-1/2 z-[1]">
                            <div className="inner-content relative z-[1]">
                                <div className="relative text-[18px] leading-[29px] text-white block uppercase pt-[35px] before:absolute before:top-0 before:left-0 before:w-[80px] before:h-[4px] before:rounded-[2px] before:bg-primary">
                                    {new Date(post.date).toLocaleDateString(
                                        'en-US',
                                        {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        }
                                    )}
                                </div>
                                <h2 className="lg:text-[80px] lm:text-[50px] text-[30px] lg:leading-[90px] text-white max-w-[770px]">
                                    {bannerTitle}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="post-area pt-155">
                <div className="container">
                    <div className="lg:grid lg:grid-cols-12 xl:gap-x-[50px] gap-x-[30px]">
                        <div className="lg:col-span-8 prose prose-lg max-w-none">
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
            {post.postTags && post.postTags.length > 0 && (
                <div className="container">
                    <div className="lg:grid lg:grid-cols-12 xl:gap-x-[50px] gap-x-[30px]">
                        <div className="lg:col-span-8">
                            <ul className="post-share-tags pt-[30px] pb-[50px]">
                                {post.postTags.map((tag, i) => (
                                    <li key={i}>
                                        <Link href="#">{tag}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
}

export default BlogContent;
