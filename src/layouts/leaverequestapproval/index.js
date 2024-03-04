
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
function LeaverequestApproval() {
  const val = document.getElementById('para');
  val.addEventListener('click',style.color = 'green')
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
         <div>LeaverequestApproval</div>
         <p id="para">Clikme!</p>
    </DashboardLayout>
  );
}

export default LeaverequestApproval;
