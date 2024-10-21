import React from 'react';
import Contact from '../Component/LeftComponent/Contact';
import Projects from '../Component/LeftComponent/Projects';
import Albums from '../Component/LeftComponent/Albums';
import Organizations from '../Component/LeftComponent/Organizations';

const LeftSide = () => {
    return (
        <main>
         <div className='mb-2'>
            <Contact />
         </div>
         <div className='mb-2'>
            <Projects />
         </div>
         <div className='mb-2'>
            <Albums />
         </div>
         <div>
            <Organizations />
         </div>
        </main>
    );
};

export default LeftSide;