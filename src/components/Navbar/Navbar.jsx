import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, Menu, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import './navbar.scss'
import user from '../../assets/team-1.jpg'

const Navbar = ({ toggle, toggled }) => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbarToggle shoe">
          <Menu onClick={() => toggle(!toggled)} />
        </div>
        <div className="shoe">
          <SearchOutlined className='icon' />
        </div>
        <div className="search">
          <input type="search" placeholder='Search...' />
          <SearchOutlined className='icon' />
        </div>
        <div className="items">
          <div className="item boot">
            <LanguageOutlined className='icon' />
            <span>

            English
            </span>
          </div>
          <div className="item">
            <DarkModeOutlined className='icon' />
          </div>
          <div className="item boot">
            <FullscreenExitOutlined className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className='icon' />
          </div>
          <div className="item">
            <img src={user} className="avatar" alt="user-profile" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar