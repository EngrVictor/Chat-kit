import React from 'react'
import User from './User'

const Tab = ({ name, text, time, message, active, usergrp}) => {
  let activeClass = `tab ${ active }`

  return (
    <div className= {activeClass}>
      <div className='tab-user'>
        <User checkTyp={usergrp}/>
      </div>
      
      <div className='tab-side'>
        <div className='tab-first'>
          <p className='name'>{name}</p>
          <p className='time'>{time}</p>
        </div>
        <p className='heading'>{text.length > 20 ? text.slice(0, 35) + '...': text}</p>
        <p className='message'>{message.length > 20 ? message.slice(0, 35) + '...': message}</p>
      </div>
      
    </div>
  )
}

export default Tab
