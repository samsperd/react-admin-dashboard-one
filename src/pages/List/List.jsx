import React from 'react'
import Datatable from '../../components/Datatable/Datatable'
import './list.scss'

const List = ({ type }) => {
  return (
    <div className="listContainer">
      <Datatable type={ type } />
    </div>
  )
}

export default List