import React, { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
const ExpandablePanal = ({ header, children }) => {
    const [expand, setExpand] = useState(false);
    
    const handleClick = () => {
        setExpand(!expand)
    }
    return (
    <div  className="ml-5 mr-4 mb-2 border rounded">
      <div className='flex p-2 justify-between items-center'>
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {header} 
        </div>
        <div onClick={handleClick}>
        {expand? <GoChevronDown /> : <GoChevronLeft /> }
        </div>
       </div>
       <div>
        {expand && <div className='p-2 border-t'>
         {children}
       </div>}
       </div>
    </div>
  )
}

export default ExpandablePanal