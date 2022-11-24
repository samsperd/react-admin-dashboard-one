import React from 'react'
import Chart from '../../components/Chart/Chart'
import Featured from '../../components/Featured/Featured'
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
          <Widgets type="user" num={"1500"} />
          <Widgets type="order" num={"21312"} />
          <Widgets type="earnings" num={"43000"} />
          <Widgets type="balance" num={"60000"} />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default Home