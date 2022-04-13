import React from 'react';
import useReviews from '../hooks/useReviews';
import SingleReview from './SingleReview';

const ThreeReviews = () => {
    const [reviews] = useReviews();
    // console.log(reviews)
    const { id } = reviews
    return (
        <div className='three-reviews gap-4 mx-5'>
            {
                reviews.map(review => <SingleReview
                    key={id}
                    review={review}
                ></SingleReview>).slice(0, 3)
            }
        </div>
    );
};

export default ThreeReviews;