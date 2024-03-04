import React from 'react'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import UnderProgress from 'components/UnderProgress'
const Adattendancelist = () => {
  return (
   
    <DashboardLayout>
    <DashboardNavbar />
    <div>
      <UnderProgress/>
      <div>Give me contnent  which is going to be alone</div>
    </div>
  </DashboardLayout>
  )
}

export default Adattendancelist

