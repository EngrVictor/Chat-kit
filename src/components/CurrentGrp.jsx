import React from 'react'
import { FaCheck, FaCheckDouble } from 'react-icons/fa';

const CurrentGrp = () => {
  return (
    <div className='current'>
     <div className='left'>
        <div className='other'><p className='user-grp'>~Charlie Puth</p><p>How are you doing?</p><p className='small-time'>13:02</p></div>
     </div>
      <div className='right'>
        <div className='mine'><p>Fine sir</p><p className='small-time'>14:02<FaCheckDouble /></p></div>
      </div>
      <div className='time'><p>March 10, 2022</p></div>
      <div className='right'>
        <div className='mine'><p>I heard you where at home sir</p><p className='small-time'>14:54<FaCheckDouble /></p></div>
      </div>
      <div className='left'>
        <div className='other'><p className='user-grp'>~Sarah Mill</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam neque explicabo dignissimos nam nemo eius accusamus ut a reiciendis veniam nostrum quia odio eum, fugiat libero recusandae quaerat, provident ipsa.</p><p className='small-time'>15:00</p></div>
      </div>
      <div className='left'>
        <div className='other'><p className='user-grp'>~Jason Stratum</p><p>Laboriosam neque explicabo dignissimos nam nemo eius accusamus ut a reiciendis veniam nostrum quia odio eum, fugiat libero recusandae quaerat, provident ipsa.</p><p className='small-time'>15:00</p></div>
      </div>
      <div className='left'>
        <div className='other'><p className='user-grp'>~Arinze MainMan</p><p>Vam nemo eius accusamus ut a reiciendis veniam nostrum quia odio eum, fugiat libero recusandae quaerat, provident ipsa.</p><p className='small-time'>15:00</p></div>
      </div>
      <div className='time'><p>Today 12:19</p></div>
      <div className='right'>
        <div className='mine'><p>I heard you where at home sir</p><p className='small-time'>14:54<FaCheckDouble /></p></div>
      </div>
    </div>
  )
}

export default CurrentGrp
