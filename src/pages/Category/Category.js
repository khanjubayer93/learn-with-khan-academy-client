import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({course}) => {
    const {title}= course;
    return (
        <div>
            <Link><p>{title}</p></Link>
        </div>
    );
};

export default Category;