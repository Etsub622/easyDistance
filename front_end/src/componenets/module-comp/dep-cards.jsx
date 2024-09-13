import React from 'react'

const DepCards = ({index , title, detail , year }) => {
  const bgColor = index % 2 === 0 ? 'bg-[#2B634D]' : 'bg-[#B3F5E4]';
  const yearColor = index % 2 === 0 ?  'text-[#B3F5E4]' :'text-[#2B634D]';
  const txtColor = index % 2 === 0 ? 'text-white' : 'text-black';
  console.log(index)
  return (
    <div className={`flex flex-col gap-4 text-[12pt] items-start px-10 pt-5 pb-1 ${bgColor} ${txtColor} shadow-xl rounded-[25px]`}>
      <div className='flex gap-1'>
      <h1 className= "font-bold text-[14pt]">{title}</h1>
      <span className={`${yearColor} font-extrabold text-[14pt]`}> {year}</span>
      </div>
      <p className='text-[13pt]'>{detail}</p>
      <button className='bg-emerald-400 p-2 rounded-[10px]'>Start Now</button>
    </div>
  )
}

export default DepCards;
