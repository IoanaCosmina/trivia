import React from 'react';
import categories from '../categories';

function Category() {
    return (
        <div className="category">
            <p>Select Category</p>
            <select>
                {categories.map((category, index) => (
                    <option key={index} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Category;