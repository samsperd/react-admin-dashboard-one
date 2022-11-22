import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Widgets from '../../components/Widgets/Widgets'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar></Sidebar>
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
      </div>
    </div>
  )
}

export default Home