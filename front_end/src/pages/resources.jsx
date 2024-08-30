import React from 'react';
import SideNav from '../componenets/module-comp/side-nav';
import HeadNav from '../componenets/module-comp/head-nav';
import ResBox from '../componenets/resources-comp/res-box';
import ResData from '../componenets/resources-comp/res-data';

const Resources = () => {
  return (
    <div className='h-screen flex flex-col'>
      <div className='h-[10%]'>
        <HeadNav />
      </div>
      <div className='h-[90%] w-screen flex'>
        <div className='w-[20%] h-full'>
          <SideNav />
        </div>
        <div className='h-full w-[80%] px-10 grid grid-cols-2 gap-5'>
          {ResData.map((data, index) => (
            <ResBox key={index} courses={[data.course1, data.course2, data.course3, data.course4]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;