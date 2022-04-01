import React from 'react'
import { FaRegGrinAlt, FaMicrophone } from 'react-icons/fa'
import { GiPaperClip } from 'react-icons/gi'
import { GrSend } from 'react-icons/gr'

const TextBar = () => {
  return (
    <div className='text-bar'>
      <div className='icon'><FaRegGrinAlt /></div>
      <div className='icon'><GiPaperClip /></div>
      <div><input type='text'></input></div>
      <div className='icon'>{true ? <GrSend /> : <FaMicrophone />}</div>
    </div>
  )
}

export default TextBar
