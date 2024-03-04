import React from 'react'
import * as PropTypes from 'prop-types'
import DataTable from 'react-data-table-component';
import '../TaskList.css'
const TasklistDatatable = ({data,columns,Selected}) => {
   
  const handleChange = (state) => {
    Selected(state)
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
TasklistDatatable.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    Selected : PropTypes.array,
  };
export default TasklistDatatable