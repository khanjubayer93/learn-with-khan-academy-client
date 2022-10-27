import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    const { image, title, price, description, category} = course;
    console.log(course)

    return (
        <div>
            <h2>Course Name: {title}</h2>
            <div className="w-1/3 p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72" />
                <div className="mt-6 mb-2">
                    <span className="block text-xl font-medium tracking-widest uppercase text-sky-600">{title}</span>
                    <h2 className="text-sm font-semibold tracking-wide">Price: ${price}</h2>
                </div>
                <p className='font-semibold mb-2'>Type: {category}</p>
                <p className="text-gray-800">{description}</p>
            </div>
        </div>
    );
};

export default Course;