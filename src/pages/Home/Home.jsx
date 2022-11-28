import React from 'react'
import Chart from '../../components/Chart/Chart'
import Featured from '../../components/Featured/Featured'
import Table from '../../components/Table/Table'
import Widgets from '../../components/Widgets/Widgets'
import './home.scss'

const Home = () => {
  return (
      <div className="homeContainer">
        <div className="widgets">
          <Widgets type="user" num={"1500"} />
          <Widgets type="order" num={"21312"} />
          <Widgets type="earnings" num={"43000"} />
          <Widgets type="balance" num={"60000"} />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1.2} title="Last 6 Months (Revenue)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest Transactions
          </div>
          <Table />
        </div>
      </div>
  )
}

export default Home