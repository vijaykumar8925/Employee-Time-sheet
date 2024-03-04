
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import UnderProgress from 'components/UnderProgress'
function Permisssionlist() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
         <div>
          <UnderProgress/>
         </div>
    </DashboardLayout>
  );
}

export default Permisssionlist;
