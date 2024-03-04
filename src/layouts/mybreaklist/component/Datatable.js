import React from 'react'
import * as PropTypes from 'prop-types'
import DataTable from 'react-data-table-component';
import '../mybreaklist.css'

const Datatable = ({data,columns,selectedData}) => {
  const handleChange = (state) => {
    
    selectedData (state);
  };
  return (
    <div className='dataTable_parent' >
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
Datatable.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    selectedData: PropTypes.array,
    
  };
export default Datatable