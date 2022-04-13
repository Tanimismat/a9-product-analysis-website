import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <h5>What is context API? What is the purpose of it?</h5>
            <p>Context API allows to share state or data which is considered as "global" for a tree of react components. Context API is needed when the component tree become bigger. This technique is use to avoid props drilling(process of sending down props from a higher level component to lower level component) and make the code cleaner. There are two main steps to use context API , (1) Setup a context provider and define the data which have to be shared. (2)Using a context consumer when the data have to be retrieved.   </p>
            <h5>What is semantic tag?</h5>
            <p>Semantic tags are one of the most important features of HTML5. these tags refers to syntax that makes the HTML more understandable by defining different sections. It makes web pages more informative and adaptable to browser and search engines. Example: {'<section>'}, {'<picture>'}, {'<main>'}, {'<table>'} tag etc.</p>
        </div>
    );
};

export default Blogs;