import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Datatable from "./component/Datatable";
import DataTableHead from "./component/DataTableHead";
import jsPDF from 'jspdf'
import Transitions from 'animation/Transition';
import autoTable from 'jspdf-autotable';
function Tables() {
  
  const [results, setResults] = useState([]);

  const [FilteredUsers, setFilteredUsers] = useState([])
  const [change, Setchange] = useState(false)
    const[Email,setemail]=useState('')
    useEffect(()=>{
      
      console.log(localStorage.getItem('email'))
    },[])
  // useEffect(() => {
   
  //     try {
  //         const response = axios.get(`http://localhost:8000/list/break/list/'${localStorage.getItem('email')}'`).then((res)=>{
  
  //         setResults(res.data)
  //         })
         
  //       } catch (err) {
  //         console.log(err) 
  //       }
  //   }, []);
    useEffect(() => {
         
      async function breaKDetails () {
         const apiUrl = `http://localhost:5000/post/breakdata/'${localStorage.getItem('mails')}'`;
         const response = await axios.get(apiUrl)
         console.log(response.data.data)
         setResults(response.data.data)
      }
      breaKDetails()
    },[])

    const columns = [         
      {
          name: 'Sl No',
          selector: (row,index) => index+1,
          id: "name",
          width:"100px",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      {
          name: 'Break Type',
          selector: row => row.brkdtls_break_type
            ,
          id: "name",
          center:true,
           style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      {
          name: 'Start Time',
          selector: row => row.brkdtls_start_time
          ,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite',
              
          }
      },
      
      {
          name: 'End Time',
          selector: row => row.brkdtls_end_time
          ,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      {
          name: 'Total Duration',
          selector: row => row.brkdtls_duration
          ,
          id: "name",
          width:"150px",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }

      },
      {
          name: 'Reason',
          selector: row => row.brkdtls_reason
          ,
          id: "name",
          center:true,
          width:"350px",
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      }, {
        name: 'Remarks',
        selector: row => row.brkdtls_remarks
        ,
        id: "name",
        center:true,
        style:{
            fontSize: '16px',
            backgroundColor: '#FloralWhite'
        }
    },
     
  ];
  const[copydata,setcopydata]=useState([])
  const selectedData=(data)=>{
    setcopydata(data.selectedRows)
    console.log(copydata)
  }
  var doc = new jsPDF();
  var col = ["Sl.No.","Break Type",'Start Time','End Time','Total Time','Reason','Remarks'];
  var rows = [];
  var rowsCopy = [];
 
  results.forEach((element,index) => {      
    var temp = [index+1,element.brkdtls_break_type,element.brkdtls_start_time,element.brkdtls_end_time,element.brkdtls_duration,element.brkdtls_reason,element.brkdtls_remarks];
    rows.push(temp)
    console.log(element)
});  

copydata.forEach((element,index) => {      
  var temp = [index+1,element.brkdtls_break_type,element.brkdtls_start_time,element.brkdtls_end_time,element.brkdtls_duration,element.brkdtls_reason,element.brkdtls_remarks];
  rowsCopy.push(temp)
  console.log(element)
});  

const changeMessage = (newMessage) => {
  let newMessage_lower=(newMessage.toLowerCase())
  console.log(newMessage_lower)
  const filtered = results.filter(user => user.brkdtls_break_type.toLowerCase().includes(newMessage_lower));
  setFilteredUsers(filtered);
  Setchange(true)
}

  const GeneratePdf=()=>{
    doc.autoTable(col, rows, { startY: 10 });
    doc.save('Test.pdf');
  }
  const CopyFunction=()=>{
alert('ggg')
  }
 
  return (
    <Transitions>
    <DashboardLayout>
      <DashboardNavbar data={results}/>
      <div>
        <div><DataTableHead  changeMessage={changeMessage} GeneratePdf={GeneratePdf} dataCopy={rowsCopy} data={rows} columns={columns} CopyFunction={CopyFunction}/> </div>
        <div style={{marginTop:"10px"}}><Datatable selectedData={selectedData} data={change?FilteredUsers:results} columns={columns} /> </div>
      </div>
    </DashboardLayout>
    </Transitions>
  );
}

export default Tables;
