import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import ProjectBanner from './project-banner';
import { Fragment } from 'react';
import Link from 'next/link';
import { IoMdGrid } from 'react-icons/io';

function ProjectContent(props) {
    const { project } = props;

    const imagePath = project.image && project.image.startsWith('/') ? project.image : `/images/projects/${project.slug}/${project.image}`;

    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                const imgSrc = image.properties.src && image.properties.src.startsWith('/') ? image.properties.src : `/images/projects/${project.slug}/${image.properties.src}`;

                return (
                    <Fragment>
                        <div className='project-upper-box md:pt-[150px] pt-[55px]'>
                            <div className='container'>
                                <div className='navigation pb-[50px]'>
                                    <Link
                                        href='/projects'
                                        className='flex items-center text-[14px] leading-6 uppercase'>

                                        <IoMdGrid className='text-[20px] mr-5' />Back to Tools

                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='project-description md:pt-[80px] pt-[40px]'>
                            <div className='container'>
                                <div className='content'>
                                    <h2 className='text-[36px] leading-[58px] pb-10'>
                                        Description
                                    </h2>
                                    <div
                                        className='text-[18px] leading-8 text-secondary'
                                        dangerouslySetInnerHTML={{
                                            __html: project.additionDesc,
                                        }}
                                    />
                                </div>
                                <div className='image md:pt-[85px] pt-[50px]'>
                                    <Image
                                        src={imgSrc}
                                        alt={image.alt}
                                        width={1170}
                                        height={610}
                                        objectFit='cover'
                                    />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                );
            }
        },
    };

    return (
        <article>
            <ProjectBanner
                title={project.title}
                excerpt={project.excerpt}
                categoryName={project.categoryName}
                image={imagePath}
            />
            <ReactMarkdown components={customRenderers}>
                {project.content}
            </ReactMarkdown>
        </article>
    );
}

export default ProjectContent;
