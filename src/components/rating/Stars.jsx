import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Stars = ({ rating = 0, max = 5, size = 'md'}) => {

    const sizes = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-2xl',
    }


    return (
        <div className={`flex gap-1 ${sizes[size]}`}>
            {[...Array(max)].map((_, index) => (
                <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={index < Math.round(rating) ? 'text-green-800' : 'text-gray-300'}
                />
            ))}
        </div>
    )
}

export default Stars