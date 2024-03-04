import React, { useState } from 'react'
import './LeavelistHead.css'
import * as PropTypes from 'prop-types'
import { CSVLink } from "react-csv";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const LeavelistHead = ({data,changeMessage,GeneratePdf,CopyFunction,row,dataCopy}) => {






    // const res = data.toString().split(',')
   const res = dataCopy.join('\n')
 
    console.log(res)
  
  
    const ClickHandler = (e) => {
    	changeMessage(e.target.value);
  	}
    
    const Remove=()=>{
      let Filter=   data.filter((val)=>{
            val=='Emp_Mail'
        })
        return(
            Filter
        )
    }
    console.log(row)
  return (
    <div className='DataTableHead_parent'>
        <div className='DataTableHead_child1'>
            <div>
             <input type='text' placeholder='Search No of Days' onChange={ClickHandler}></input>
            </div>
        </div>
        <div className='DataTableHead_child2'>
            <div>
                <button onClick={GeneratePdf}>pdf</button>
            </div>
            <div>
          {  <CSVLink className="downloadbtn" filename="my-file.csv" data={data}>
            <button >export</button>
  
      </CSVLink>}
           
            
            </div>
            <div> 
          <CopyToClipboard text={res}>
          <button type='button' onClick={() => {
              {
                dataCopy.length == 0 ? alert('Please Select the Rows') :
                alert('Copied')
              }
          }}>copy</button>
          </CopyToClipboard>
            </div>
        </div>
        
    </div>
  )
}
LeavelistHead.propTypes = {
    changeMessage: PropTypes.array,
    GeneratePdf: PropTypes.bool,
    data: PropTypes.array,
    row: PropTypes.array,
    CopyFunction: PropTypes.bool,
    dataCopy : PropTypes.array,
  };
export default LeavelistHead