import React from 'react';
import useReviews from '../hooks/useReviews';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <h2>Reviews page: {reviews.length}</h2>
        </div>
    );
};

export default Reviews;