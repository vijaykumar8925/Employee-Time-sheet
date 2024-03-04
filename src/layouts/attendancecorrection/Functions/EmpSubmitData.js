import React from 'react'
import axios from 'axios'
const EmpSubmitData = (EmpData) => {
    try {
        let apiUrl=`http://localhost:5000/post/empformdata`
        const response =  axios.post(apiUrl,EmpData)
        console.log(response.data.data)
      } catch (err) {
        console.log(err)
      }
    
}

export default EmpSubmitData