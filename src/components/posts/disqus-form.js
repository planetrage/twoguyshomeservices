import { DiscussionEmbed } from 'disqus-react';

function DisqusForm() {
    const disqusShortname = 'goonzerflow';

    const disqusConfig = {
        url: 'https://goonzerflow.disqus.com/',
        identifier: '123',
        title: 'goonzerflow-post',
    };
    return (
        <div className='disqus-form-area pt-[60px]'>
            <div className='container'>
                <div className='md:grid md:grid-cols-12 md:gap-x-[90px]'>
                    <div className='md:col-span-8'>
                        <DiscussionEmbed
                            shortname={disqusShortname}
                            config={disqusConfig}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisqusForm;
