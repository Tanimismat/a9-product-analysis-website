import React from 'react';

const SingleReview = (props) => {
    console.log(props)
    const { name, img, ratings, review } = props.review
    return (
        <div className='single-review'>
            <div className="col">
                <div className="card h-100 ">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                        <p className="card-text">{review.slice(0, 155)} ... <span><small className='text-secondary'>see more</small></span></p>
                        <p><small>Ratings: {ratings}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;