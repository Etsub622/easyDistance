import React from 'react';

const ResBox = ({ courses }) => {
  return (
    <div className='flex flex-col p-2 mt-2 gap-2'>
      <h1>Year One Term One</h1>
      {courses.map((course, index) => (
        <div key={index} className='shadow-md border flex flex-col px-5 py-2 gap-1'>
          <p>{course}</p>
          <div className='flex gap-3 text-center'>
            <button className='px-2 py-0.5 rounded-[10px] text-[10pt] bg-[rgba(243,199,150,0.5)]'>Module</button>
            <button className='px-2 py-0.5 rounded-[10px] text-[10pt] bg-[#6FC2AD]'>Worksheet</button>
            <button className='px-2 py-0.5 rounded-[10px] text-[10pt] border-blue-950 border-[1.5px]'>Exam</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResBox;
