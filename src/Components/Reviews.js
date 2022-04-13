import React from 'react';
import useReviews from '../hooks/useReviews';
import SingleReview from './SingleReview';

const Reviews = () => {

    const [reviews] = useReviews();
    // console.log(reviews)
    const { id } = reviews

    return (
        <div className='all-reviews gap-4 mx-5'>
            {
                reviews.map(review => <SingleReview
                    key={id}
                    review={review}
                ></SingleReview>)
            }
        </div>
    );

};

export default Reviews;