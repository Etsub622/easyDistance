import React from 'react'
import SideNav from '../componenets/module-comp/side-nav'
import HeadNav from '../componenets/module-comp/head-nav'

const Resources = () => {
  return (
    <div className=' h-screen flex flex-col'>
        <div className=' h-[10%]'>
        <HeadNav  />
        </div>
        <div className=' h-[90%] w-screen flex '>
          <div className=' w-[20%] h-full'>
            <SideNav />
          </div>
          <div className='  h-full w-[80%]  p-10 grid grid-flow-col grid-cols-2 grid-rows-2'>
            
          </div>
        </div>

    </div>
  )
}

export default Resources