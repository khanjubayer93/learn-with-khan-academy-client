import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const LeftSideNav = () => {
    const [allCourse, setAllCourse] = useState([])
    useEffect(() => {
        fetch(`https://khan-academy-server.vercel.app/course/`)
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, [])
    console.log(allCourse);
    return (
        <div>
            <h2>Left side nav</h2>
            {
                allCourse.map(course => <Category
                    key={course.id}
                    course={course}></Category>)
            }

        </div>
    );
};

export default LeftSideNav;