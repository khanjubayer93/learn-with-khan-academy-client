import React from 'react';

const Category = ({course}) => {
    const {title}= course;
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default Category;