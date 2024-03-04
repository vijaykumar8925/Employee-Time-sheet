import React from 'react'
import * as PropTypes from 'prop-types'
import DataTable from 'react-data-table-component';

const LeavelistDatatable = ({data,columns,Selecting}) => {
   
  const handleChange = (state) => {
    Selecting(state)
    console.log(state)
  }

  return (
    <div className='dataTable_parentlist'>
         <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            selectableRows
            onSelectedRowsChange={handleChange}
        />
       </div>
  )
}
LeavelistDatatable.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    Selecting : PropTypes.array,
  };
export default LeavelistDatatable;