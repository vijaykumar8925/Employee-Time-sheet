import React from 'react'
import * as PropTypes from 'prop-types'
import DataTable from 'react-data-table-component';
import '../PermissionReq.css'
const PermissionReqDatatable = ({data,columns,Select}) => {
   
  const handleChange = (state) => {
     Select(state)
     console.log(state)
  }

  return (
    <div className='dataTable_parent_per'>
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
PermissionReqDatatable.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    Select : PropTypes.array
  };
export default PermissionReqDatatable