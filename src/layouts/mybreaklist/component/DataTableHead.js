import React, { useState } from 'react'
import './DataTableHead.css'
import * as PropTypes from 'prop-types'
import { CSVLink } from "react-csv";
import {CopyToClipboard} from 'react-copy-to-clipboard';
const DataTableHead = ({data,dataCopy,changeMessage,GeneratePdf,CopyFunction,columns,data1}) => {

  const res = dataCopy.join('\n')
 
    console.log(res)

  console.log(data1)
    const ClickHandler = (e) => {
    	changeMessage(e.target.value);
  	}
     
   

console.log(data)
  return (
    <div className='DataTableHead_parent'>
        <div className='DataTableHead_child1'>
            <div>
             <input id='input' type='text' placeholder='Search Break Type' onChange={ClickHandler}></input>
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
            <button type='button'  onClick={() => 
             {
              data.length==0?alert('please select tha rows'):
              alert('copied')
             }
            }>copy</button>
            </CopyToClipboard>
            </div>
        </div>
        
    </div>
  )
}
DataTableHead.propTypes = {
    changeMessage: PropTypes.array,
    GeneratePdf: PropTypes.bool,
    data: PropTypes.array,
    CopyFunction: PropTypes.bool,
    columns: PropTypes.array,
    data1: PropTypes.array,
    dataCopy : PropTypes.array,
    
  };
export default DataTableHead