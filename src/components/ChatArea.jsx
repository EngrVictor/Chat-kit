import React from 'react'
import Current from './Current'
import CurrentGrp from './CurrentGrp'
import CurrentTop from './CurrentTop'
import TextBar from './TextBar'

const ChatArea = () => {
  return (
    <div className='chat-area'>
      <CurrentTop />
      <CurrentGrp />
      <TextBar />
    </div>
  )
}

export default ChatArea
