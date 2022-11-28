import { DriveFolderUploadOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import './new.scss'


const New = ({ inputs, title }) => {
  const [file, setFile] = useState("")

  console.log(file);

  return (
    <div className="newContainer">
      <div className="top">
        <h1>{ title }</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={ file  ?  URL.createObjectURL(file)  :  "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
            alt="no_Image" />
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor='file'> Image: <DriveFolderUploadOutlined className='icon' /> </label>
              <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
            </div>
            {
              inputs.map((e) => (
                <div className="formInput" key={e.id}>
                  <label> {e.label} </label>
                  <input type={e.type} placeholder={e.placeholder} />
                </div>
              ))
            }
            <button> Add </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default New