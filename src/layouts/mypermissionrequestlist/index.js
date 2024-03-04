import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import PermissionReqDatatable from './component/PermissionReqDatatable';
import jsPDF from 'jspdf'
import Transitions from 'animation/Transition';
import autoTable from 'jspdf-autotable';
import PermissionReqhead from './component/PermissionReqhead';
function Tables() {
  
  const [results, setResults] = useState([])
  const [FilteredUsers, setFilteredUsers] = useState([])
  const [change, Setchange] = useState(false)
    const[Email,setemail]=useState('')
    useEffect(()=>{
      
      console.log(localStorage.getItem('email'))
    },[])
    useEffect(() => {
         
      async function permissionData () {
         const apiUrl = `http://localhost:5000/post/permissiondata/'${localStorage.getItem('mails')}'`;
         const response = await axios.get(apiUrl)
         console.log(response.data.data)
         setResults(response.data.data)
      }
      permissionData()
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
        name: 'Date',
        selector: (row,index) => row.prmrdls_date,
        id: "name",
        width:"200px",
        center:true,
        style:{
            fontSize: '16px',
            backgroundColor: '#FloralWhite'
        }
    },
      
      {
          name: 'Start Time',
          selector: row => row.prmrdls_from_time,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      
      {
          name: 'End Time',
          selector: row => row.prmrdls_to_time,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },

      {
        name: 'Duration ',
        selector: row => row.prmrdls_duration,
        id: "name",
        center:true,
        width:"200px",
         style:{
            fontSize: '16px',
            backgroundColor: '#FloralWhite'
        }
    },
      
      {
          name: 'Reason',
          selector: row => row.prmrdls_reason,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }

      },
      {
          name: 'Remarks',
          selector: row => row.prmrdls_remarks,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      }
     
  ];
  const [copy,setCopy] = useState([]);
  const Select = (data) => {
      setCopy(data.selectedRows)
      console.log(data)
  }
  const changeMessage = (newMessage) => {
    const Message = (newMessage.toLowerCase())
    const filtered = results.filter(user => user.prmrdls_date.toLowerCase().includes(Message));
    setFilteredUsers(filtered);
    Setchange(true)
  }
  var doc = new jsPDF();
  var col = ["Sl.No.","Date",'Time','Start Time','  End Time','Reason','Remarks'];
  var rows = [];
  var rowsCopy = [];
  
 
  results.forEach((element,index) => {      
    var temp = [index+1,element.prmrdls_date,element.prmrdls_from_time,element.prmrdls_to_time,element.prmrdls_duration,element.prmrdls_reason,element.prmrdls_remarks];
    rows.push(temp);

}); 

copy.forEach((element,index) => {      
  var temp = [index+1,element.prmrdls_date,element.prmrdls_from_time,element.prmrdls_to_time,element.prmrdls_duration,element.prmrdls_reason,element.prmrdls_remarks];
  rowsCopy.push(temp);
});  

  const GeneratePdf=()=>{
 
    doc.autoTable(col, rows, { startY: 10 });
    doc.save('Test.pdf');
  }

  return (
    <Transitions>
    <DashboardLayout>
      <DashboardNavbar data={results}/>
      <div>
        <div>< PermissionReqhead changeMessage={changeMessage} GeneratePdf={GeneratePdf} data={rows} dataCopy={rowsCopy} columns={columns}/> </div>
        <div style={{marginTop:"10px"}}><PermissionReqDatatable Select={Select}  data={change?FilteredUsers:results} columns={columns}/> </div>
      </div>
    </DashboardLayout>
    </Transitions>
  );
}

export default Tables;
