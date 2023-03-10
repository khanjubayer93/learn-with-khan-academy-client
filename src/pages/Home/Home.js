import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const Home = () => {
    const allCourse = useLoaderData();
    console.log(allCourse)
    return (
        <div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
                {
                    allCourse?.map(course =>
                        <SingleCourse
                            key={course.id}
                            course={course}
                        ></SingleCourse>
                    )
                }
            </div>


        </div>
    );
};

export default Home;