import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const LeftSideNav = () => {
    const allCourse = useLoaderData();
    console.log(allCourse);
    return (
        <div>
            <h2>Left side nav</h2>
            {
                allCourse.map(course=> <Category
                key={course.id}
                course={course}></Category>)
            }
            
        </div>
    );
};

export default LeftSideNav;