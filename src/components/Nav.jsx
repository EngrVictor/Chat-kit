import React from 'react'
import Button from './Button'
import User from './User'
import { FaWallet, FaScroll, FaBell, FaList, FaDatabase } from 'react-icons/fa';

const Nav = () => {
    let iconStyles = { color: "white", fontSize: "1.2em" };

  return (
    <div className='nav'>
      <div className='nav-sub'>
          <h1>LOGO</h1>

          <div className='nav-sub__right'>
            <div class="icon-badge-container">
                <FaWallet style={iconStyles} className="icon-badge-icon" />
                <div class="icon-badge">6</div>
            </div>
            <div class="icon-badge-container">
                <FaScroll style={iconStyles} className="icon-badge-icon" />
                {/* <div class="icon-badge">6</div> */}
            </div>
            <div class="icon-badge-container">
                <FaBell style={iconStyles} className="icon-badge-icon" />
                <div class="icon-badge">15</div>
            </div>
            <div class="icon-badge-container">
                <FaDatabase style={iconStyles} className="icon-badge-icon" />
                {/* <div class="icon-badge">6</div> */}
            </div>
            <div class="icon-badge-container">
                <FaList style={iconStyles} className="icon-badge-icon" />
                <div class="icon-badge">2</div>
            </div>
              <User />
              <Button />
          </div>
      </div>
    </div>
  )
}

export default Nav
