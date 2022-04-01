import React from 'react'
import { FaUserTie } from 'react-icons/fa';
import { HiOutlineUserGroup } from "react-icons/hi";

const User = ({checkTyp}) => {
    let iconStyles = { color: "#1b1b69", fontSize: "1.5em" };

  return (
    <div className='user'>
      {checkTyp ? <HiOutlineUserGroup style={iconStyles}/> : <FaUserTie style={iconStyles}/>}
    </div>
  )
}

export default User
