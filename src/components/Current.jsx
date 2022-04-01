import React from 'react'
import { FaCheck, FaCheckDouble } from 'react-icons/fa';

const Current = () => {
  return (
    <div className='current'>
     <div className='left'>
        <div className='other'><p>How are you doing?</p><p className='small-time'>13:02</p></div>
     </div>
      <div className='right'>
        <div className='mine'><p>Fine sir</p><p className='small-time'>14:02<FaCheckDouble /></p></div>
      </div>
      <div className='time'><p>March 10, 2022</p></div>
      <div className='right'>
        <div className='mine'><p>I heard you where at home sir</p><p className='small-time'>14:54<FaCheckDouble /></p></div>
      </div>
      <div className='left'>
        <div className='other'><p>Yes, are you coming</p><p className='small-time'>15:00</p></div>
      </div>
    </div>
  )
}

export default Current
