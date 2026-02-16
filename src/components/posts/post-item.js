import Link from 'next/link';
import Image from 'next/image';

function PostItem(props) {
    const { title, image, date, slug } = props.posts;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    });

    const imagePath = image && image.startsWith('/') ? image : `/images/posts/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <div className='olympus-card' style={{ padding: 0, overflow: 'hidden' }}>
            <Link href={linkPath} style={{ textDecoration: 'none' }}>
                <div className='block overflow-hidden'>
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
                <div style={{ padding: 'var(--space-lg)' }}>
                    <h2
                        className='transition duration-300'
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'var(--text-subsection)',
                            fontWeight: 600,
                            letterSpacing: 'var(--tracking-display)',
                            color: 'var(--marble-white)',
                            lineHeight: 'var(--leading-display)',
                        }}
                    >
                        {title}
                    </h2>
                    <div className='mt-2' style={{ fontSize: 'var(--text-small)', color: 'var(--gold-primary)' }}>
                         Read More &gt;
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default PostItem;
