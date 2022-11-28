import React, { useState } from 'react'
import './datatabe.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatableSource.js'
import { Link } from 'react-router-dom';


const Datatable = ({ type }) => {

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={'test'}>
              <div className="viewButton">View</div>

            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        )
      }
    }
  ]

  const [data, setData] = useState(userRows)

  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New { type }
        <Link to="new" className='link'>
          Add New
        </Link>
      </div>
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          className='datagrid'
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </div>
    </div>
  )
}

export default Datatable