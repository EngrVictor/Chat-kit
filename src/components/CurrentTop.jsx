import React from 'react'
import User from './User'
import { FaEllipsisV } from 'react-icons/fa';


const CurrentTop = () => {
  return (
    <div className='current-top'>
        <User checkTyp={true}/>
        <p className='current-name'>{true ? 'Tech Space' : 'Okpara Victor'}</p>
        <FaEllipsisV />      
    </div>
  )
}

export default CurrentTop
