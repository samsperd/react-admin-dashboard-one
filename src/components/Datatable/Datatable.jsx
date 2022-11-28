import React from 'react'
import './datatabe.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatableSource.js'


const Datatable = () => {

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        )
      }
    }
  ]

  return (
    <div className='datatable'>
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={userRows}
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