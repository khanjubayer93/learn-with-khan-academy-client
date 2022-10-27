import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link} from 'react-router-dom';

const LeftSideNav = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch(`https://khan-academy-server.vercel.app/courses/`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    console.log(course);
    return (
        <div>
            <h2>Total Course: {course.length}</h2>
            {
                course.map(course => <p
                key={course.id}
                ><Link to={`/course/${course.id}`}>{course.title}</Link></p>
                )
                
            }

        </div>
        
    );
};

export default LeftSideNav;