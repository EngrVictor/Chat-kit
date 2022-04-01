import React from 'react'
import Tab from './Tab'
import { FaBars } from 'react-icons/fa';

const Tabs = () => {
  return (
    <div className='tabs'>
        <div className='tab-head'>
            <p>My messages</p>

            <FaBars style={{ fontSize: '1.3em', cursor: 'pointer', width: '10px' }}/>
        </div>

        <div className='tab-cont'>
            <Tab name='Okpara Victor' text='The best developer community #techsemester' time='17 Minutes ago' message='You: How is your day going?' active='active-tab'/>
            <Tab name='Elon Musk' text='Things to be achived before 30' time='50 Minutes ago' message='I really love this'/>
            <Tab name='Mark James' text='The best selling software' time='today, 05:20' message='You: I thought Vscode was highly sorted '/>
            <Tab name='Dreamchasers' text='Web development' time='today, 05:20' message='Mike Abdul: hi group' usergrp={true}/>
            <Tab name='Mark James' text='The best selling software' time='today, 05:20' message='I thought Vscode was highly sorted '/>
            <Tab name='Tech Space' text='GIT news' time='today, 03:20' message='chris simpleton: have you check the site' usergrp={true}/>
            <Tab name='Mark James' text='The best selling software' time='today, 05:20' message='You: I thought Vscode was highly sorted '/>
            <Tab name='Mark James' text='The best selling software' time='today, 05:20' message='I thought Vscode was highly sorted '/>
            <Tab name='Mark James' text='The best selling software' time='today, 05:20' message='You: I thought Vscode was highly sorted '/>
            <Tab name='Jasmin Clifford' text='Techsemester' time='today, 03:43' message='The best teams live there'/>
            <Tab name='Jasmin Clifford' text='Techsemester' time='today, 03:43' message='You: The best teams live there'/>
            <Tab name='John Doe' text='Main budget cut' time='yesterday, 01:20' message='Have you seen yours?'/>
        </div>
        
      
    </div>
  )
}

export default Tabs
