import { Fragment } from 'react';
import ProjectsGrid from './projects-grid';
import { useState } from 'react';

function AllProjects(props) {
    const [projects, setProjects] = useState(props.projects);

    const onFilterHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        const filterValue = target.dataset.filter;
        const filteredProject = props.projects.filter(
            (pro) => pro.category === filterValue
        );
        filterValue === 'all'
            ? setProjects(props.projects)
            : setProjects(filteredProject);
    };
    return (
        <Fragment>
            <div className='container'>
                <div className='filter-tab flex xl:justify-end flex-wrap uppercase md:pb-155 pb-[55px] max-lg:pt-[55px]' style={{ color: 'var(--marble-warm)' }}>
                    <button onClick={onFilterHandler} data-filter='all'>
                        All
                    </button>
                    <button
                        onClick={onFilterHandler}
                        className='ml-10'
                        data-filter='calculators'
                    >
                        Calculators
                    </button>
                    <button
                        onClick={onFilterHandler}
                        className='ml-10'
                        data-filter='comparison'
                    >
                        Comparison
                    </button>
                    <button
                        onClick={onFilterHandler}
                        className='sm:ml-10 fixed-xs:mt-[10px]'
                        data-filter='analysis'
                    >
                        Analysis
                    </button>
                </div>
            </div>
            <div className='grid xl:grid-cols-4 fixed-lg:grid-cols-3 fixed-md:grid-cols-2 gap-[5px]'>
                <ProjectsGrid projects={projects} />
            </div>
        </Fragment>
    );
}

export default AllProjects;
