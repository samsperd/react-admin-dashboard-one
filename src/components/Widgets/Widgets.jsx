import { AccountBalanceOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import "./widgets.scss"

const Widgets = ({type }) => {
  let data;


  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (<PersonOutlined className='icon' style={{ backgroundColor: "rgba(255,0,0,0.2)", color: 'crimson' }} />)
      }
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (<ShoppingCartOutlined className='icon' style={{ backgroundColor: "rgba(218,165,32,0.2)", color: 'goldenrod' }}  />)
      }
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (<MonetizationOnOutlined className='icon' style={{ backgroundColor: "rgba(0,128,0,0.2)", color: 'green' }}  />)
      }
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (<AccountBalanceOutlined className='icon' style={{ backgroundColor: "rgba(86,81,229,0.2)", color: '#5651e5' }}  />)
      }
      break;
  
    default:
      break;
  }

  return (
    <>
      <div className="widget">
        <div className="left">
          <span className="title"> { data.title } </span>
          <span className="counter"> { data.isMoney && "$"} 21312 </span>
          <span className="link"> { data.link } </span>
        </div>
        <div className="right">
          <div className="percentage positive"> <KeyboardArrowUp /> 20% </div>
          { data.icon }
        </div>
      </div>
    </>
  )
}

export default Widgets