import Head from 'next/head';
import { Fragment } from 'react';
import Breadcrumb from '../../components/breadcrumb';
import AllProjects from '../../components/projects/all-projects';
import { getAllItems } from '../../lib/items-util';

function allItemsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Tools — Goonzerflow</title>
                <meta
                    name='description'
                    content='RTP calculators, slot comparison tools, and bonus wagering analyzers for the informed player.'
                />
            </Head>
            <Breadcrumb activePage={'Tools'} pageTitle={'Tools'} />
            <AllProjects projects={props.projects} />
        </Fragment>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('projects');

    return {
        props: {
            projects: allItems,
        },
    };
}

export default allItemsPage;
