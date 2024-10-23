import React from 'react';
import Boards from '../Component/RightSide/Boards';
import PeopleProgress from './../Component/RightSide/PeopleProgress';
import Tasks from '../Component/RightSide/Tasks';

const RightSide = () => {
    return (
      <main>
        <div className='mb-2'>
          <Boards />
        </div>{" "}
        <div>
       <PeopleProgress/>
        </div>
        <div>
<Tasks/>
        </div>
      </main>
    );
};

export default RightSide;