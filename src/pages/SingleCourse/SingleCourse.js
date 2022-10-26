import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    console.log(course)
    const { image, title, description,id } = course;
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                        <p className="text-gray-800">
                            {
                                description.length > 150 ? 
                                <>{description.slice(0, 80) + '...'} <Link to={`/courses/${id}`}>See more</Link></>
                                    :
                                    description

                            }
                        </p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50">Read more</button>
                </div>
            </div>

        </div>
    );
};

export default SingleCourse;