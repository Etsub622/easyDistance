import SideNav from '../componenets/common_com/side-nav'
import Header from '../componenets/common_com/Homeheader'
import DepCards from '../componenets/module-comp/dep-cards'
import DepData from '../componenets/module-comp/department-data'

const Module = () => {
  return (
    <div className=' h-screen flex flex-col'>
        <div className=' h-[10%]'>
        <Header  />
        </div>
        <div className=' h-[90%] w-screen flex '>
          <div className=' w-[20%] h-full'>
            <SideNav />
          </div>
          <div className='  h-full w-[80%] gap-20 p-10 grid grid-flow-col grid-cols-2 grid-rows-2'>
            {DepData.map((c , index) => <DepCards key={index} index={index} {...c} />)}
          </div>
        </div>

    </div>
  )
}

export default Module