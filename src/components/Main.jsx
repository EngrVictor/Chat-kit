import React from 'react'
import ChatArea from './ChatArea'
import chatIcon from '../live-chat-icon-png-11553725995dc7wyqg9ks.png'

const Main = () => {
  return (
    <div className='main'>
      {/* <div className='main-sub'>
        <img src={chatIcon} alt="" style={{ width: '150px' }}/>
        <p>Select a chat to view coversation</p>
      </div> */}

      <ChatArea />
      
    </div>
  )
}

export default Main
