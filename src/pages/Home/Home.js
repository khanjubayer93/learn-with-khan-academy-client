import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const Home = () => {
    const AllCourse = useLoaderData();
    return (
        <div>
            <h3>All course {AllCourse.length}</h3>
            {
                AllCourse.map(course=>
                    <SingleCourse
                    key={course.id}
                    course={course}
                    ></SingleCourse>
                )
            }

            
        </div>
    );
};

export default Home;