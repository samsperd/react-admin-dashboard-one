import React, { useContext } from 'react'
import './sidebar.scss'
import { AccountCircle, BookOutlined, Close, Dashboard, HealthAndSafetyOutlined, InsertChart, LocalShipping, LogoutOutlined, NotificationsOutlined, PersonOutline, ReceiptLong, Settings, Store } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'


const Sidebar = ({ toggle, toggler }) => {

    const { dispatch } = useContext(DarkModeContext)


  return (
    <div className={toggle ? 'sidebar activeNav': 'sidebar'}>
        <div className="top">
            <Link to='/'>
                <span className="logo">
                    SammyAdmin
                </span>

            </Link>
            <span className='close'>
                <Close onClick={() => toggler(false)} className='icon' />
            </span>
        </div>
        <hr />
        <div className="center">
            <ul>


                <p className="title">
                    MAIN
                </p>

                <Link to="/">

                    <li>
                        <Dashboard className='icon' />
                        <span>
                            Dashboard
                        </span>
                    </li>
                </Link>


                <p className="title">
                    LIST
                </p>

                <Link to={"/users"}>

                    <li>
                        <PersonOutline className='icon' />
                        <span>
                            Users
                        </span>
                    </li>
                </Link>
                <Link to="/products">
                    <li>
                        <Store className='icon' />
                        <span>
                            Products
                        </span>
                    </li>

                </Link>
                <li>
                    <ReceiptLong className='icon' />
                    <span>
                        Orders
                    </span>
                </li>
                <li>
                    <LocalShipping className='icon' />
                    <span>
                        Delivery
                    </span>
                </li>
                <li>
                    <InsertChart className='icon' />
                    <span>
                        Stats
                    </span>
                </li>
                <li>
                    <NotificationsOutlined className='icon' />
                    <span>
                        Notifications
                    </span>
                </li>


                <p className='title'>
                    SERVICES
                </p>


                <li>
                    <HealthAndSafetyOutlined className='icon' />
                    <span>
                        System Health
                    </span>
                </li>
                <li>
                    <BookOutlined className='icon' />
                    <span>
                        Logs
                    </span>
                </li>
                <li>
                    <Settings className='icon' />
                    <span>
                        Settings
                    </span>
                </li>


                <p className='title'>
                    USER
                </p>


                <li>
                    <AccountCircle className='icon' />
                    <span>
                        Profile
                    </span>
                </li>
                <li>
                    <LogoutOutlined className='icon' />
                    <span>
                        Logout
                    </span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
            <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
        </div>
    </div>
  )
}

export default Sidebar