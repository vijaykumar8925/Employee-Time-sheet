import React, { useState } from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import UnderProgress from 'components/UnderProgress';
import axios from 'axios';
const Adleavelist = () => {
  const [val,setVal] = useState(0)
  const handleChangle = (event) => {
    if(event.target.checked){
      alert('checked')
      setVal(1)
    }else {
      setVal(0)
    }
  }

  const handleClick = async (event) => {
    event.preventDefault();
    const value = {
        checkValue : val
    }


    let apiUrl = `http://localhost:5000/post/check`;
    const responses = await axios.post(apiUrl,value)
  }
  
 
  return (
    
    <DashboardLayout>
    <DashboardNavbar />
    <div>
      <input type='checkbox' onChange={handleChangle}/>
      <button type='button' onClick={handleClick}>Sumbit</button>
      <UnderProgress/>
    </div>
   
  </DashboardLayout>
  )
}

export default Adleavelist