import { DriveFolderUploadOutlined } from '@mui/icons-material'
import React from 'react'
import './new.scss'


const New = () => {
  return (
    <div className="newContainer">
      <div className="top">
        <h1>Add New User </h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="no_Image" />
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor='file'> Image: <DriveFolderUploadOutlined className='icon' /> </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <div className="formInput">
              <label> Username </label>
              <input type="text" placeholder='john_doe' />
            </div>
            <div className="formInput">
              <label> Name and Surname </label>
              <input type="text" placeholder='John Doe' />
            </div>
            <div className="formInput">
              <label> Email </label>
              <input type="email" placeholder='john_doe@gmail.com' />
            </div>
            <div className="formInput">
              <label> Phone Number </label>
              <input type="text" placeholder='+1 234 567 89' />
            </div>
            <div className="formInput">
              <label> Password </label>
              <input type="password" />
            </div>
            <div className="formInput">
              <label> Address </label>
              <input type="address" placeholder='SSQ5 Niwa Staff Quarters' />
            </div>
            <div className="formInput">
              <label> Country </label>
              <input type="text" placeholder='Nigeria' />
            </div>
            <button> Add </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default New