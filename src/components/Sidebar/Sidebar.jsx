import React from 'react'
import './sidebar.scss'
import { AccountCircle, BookOutlined, Dashboard, HealthAndSafetyOutlined, InsertChart, LocalShipping, LogoutOutlined, NotificationsOutlined, PersonOutline, ReceiptLong, Settings, Store } from '@mui/icons-material'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">
                SammyAdmin
            </span>
        </div>
        <hr />
        <div className="center">
            <ul>


                <p className="title">
                    MAIN
                </p>

                
                <li>
                    <Dashboard className='icon' />
                    <span>
                        Dashboard
                    </span>
                </li>


                <p className="title">
                    LIST
                </p>


                <li>
                    <PersonOutline className='icon' />
                    <span>
                        Users
                    </span>
                </li>
                <li>
                    <Store className='icon' />
                    <span>
                        Products
                    </span>
                </li>
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
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar