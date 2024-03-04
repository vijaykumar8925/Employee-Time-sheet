import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
// Soft UI Dashboard React icons
import Cube from "examples/Icons/Cube";
import Fogetpassword from "layouts/forgetpassword";
import Otp from "layouts/otp";
import Changepassword from "layouts/change password";
import Mainscreen from "layouts/mainscreen";
import Permissionrequest from "layouts/permissionrequest";
import Atten_correction from "layouts/attendancecorrection";
import MyBreaklist from "layouts/mybreaklist";
import MyleaveRequestList from "layouts/myleaverequestlist";
import Mypermissionrequestlist from "layouts/mypermissionrequestlist";
import Attendancelist from "layouts/attendancelist";
import Permisssionlist from "layouts/permissionlist";
import PermisssionGrandPage from "layouts/permissiongrandpage";
import LeaverequestApproval from "layouts/leaverequestapproval";
import PermissionrequestApproval from "layouts/permissionrequestapproval";
import ChangeProfile from "layouts/changeprofile";
import MyTasklist from "layouts/mytasklist";
//icons
import { MdFreeBreakfast } from "react-icons/md";
import { SiTask } from "react-icons/si";
import { MdPersonalInjury } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { ImHome } from "react-icons/im";
import { BsListCheck } from "react-icons/bs";
import { VscTasklist } from "react-icons/vsc";
import { ImList } from "react-icons/im";

import { LuListTodo } from "react-icons/lu";
import { BsListStars } from "react-icons/bs";
import { PiUserListBold } from "react-icons/pi";
import { SiPeerlist } from "react-icons/si";
import { GiMedallist } from "react-icons/gi";
import { PiListNumbersDuotone } from "react-icons/pi";
import { BsCalendar2Date } from "react-icons/bs";
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { FaListOl } from "react-icons/fa";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { MdOutlinePunchClock } from "react-icons/md";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { TbClockCheck } from "react-icons/tb";
import { MdPunchClock } from "react-icons/md";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import Leaveapproval from "layouts/leaveapproval/Leaveapproval";
import Adpermissionapp from "layouts/adpermissionapproval/Adpermissionapp";
import Adleaverequestlist from "layouts/Adleaverequestlist/Adleaverequestlist";
import Adpermissionreqlist from "layouts/adpermssionrequestlist/Adpermissionreqlist";
import Adleavelist from "layouts/adleavelist/Adleavelist";
import Adattendancelist from "layouts/adattendancelist/Adattendancelist";
import PrivateRoute from "privateroute/PrivateRoute";
import { AiFillHome } from "react-icons/ai";

console.log(localStorage.getItem('role'))

const routes = [

  {
    type: "collapse",
    name: "Break",
    route: "/break",
    key: "break",
    icon: <MdFreeBreakfast size={30} />,
    component: (
      <PrivateRoute>
        <Tables />
      </PrivateRoute>
    ),
  },
  {
    
    type: "collapse",
    name: "My Task",
    route: "/mytask",
    icon: <SiTask size={30} />,
    key:'mytask',
    component: (
      <PrivateRoute>
        <Billing />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Leave Request",
    
    route: "/leaverequest",
    key:'leaverequest',
    icon: <BsCalendar2Date size={25} />,
    component: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Permisssion Request",
    key:'permissionrequest',
    route: "/permissionrequest",
    icon: <MdOutlinePunchClock size={25} />,
    component: (
      <PrivateRoute>
        <Permissionrequest />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Attendance ",
    key:'attendance',
    route: "/attendance",
    icon: <IoMdContacts size={30} />,
    component: (
      <PrivateRoute>
        <Atten_correction />
      </PrivateRoute>
    ),
  },
  {
    key:'mybreaklist',
    type: "collapse",
    name: "Break List",
    route: "/mybreaklist",
    icon: <FaListOl size={25} />,
    component: (
      <PrivateRoute>
        <MyBreaklist />
      </PrivateRoute>
    ),
  },
  {
    key:'MyTasklist',
    type: "collapse",
    name: "My Tasklist",
    route: "/MyTasklist",
    icon: <PiListNumbersDuotone size={25} />,
    component: (
      <PrivateRoute>
        <MyTasklist />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: " Leave Requestlist",
    key:'myleaverequestlist',
    route: "/myleaverequestlist",
    icon: <ImList size={20} />,
    component: (
      <PrivateRoute>
        <MyleaveRequestList />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: " Permission Requestlist",
    key:'mypermissionrequestlist',
    route: "/mypermissionrequestlist",
    icon: <BsListStars size={25} />,
    component: (
      <PrivateRoute>
        <Mypermissionrequestlist />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Attendancelist",
    key:'attendancelist',
    route: "/attendancelist",
    icon: <PiUserListBold size={30} />,
    component: (
      <PrivateRoute>
        <Attendancelist rowsPerPage = {5}/>
      </PrivateRoute>
    ),
  },
  ,
  {
    type: localStorage.getItem("role") == "admin" ? "collapse" : "",
    name: "Leave Approval ",
    route: "/leaveapproval",
    key:'leaveapproval',
    icon: <PiCalendarCheckDuotone size={25} />,
    component: (
      <PrivateRoute>
        <Leaveapproval />
      </PrivateRoute>
    ),
  },

  ,
  {
    type: localStorage.getItem("role") == "admin" ? "collapse" : "",
    name: "Permission Approval ",
    route: "/adminpermissionapp",
    icon: <TbClockCheck size={25} />,
    key:'adminpermissionapp',
    component: (
      <PrivateRoute>
        <Adpermissionapp />
      </PrivateRoute>
    ),
  }, //rfyucgdsufuhdkjghfdnkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

  {
    type: localStorage.getItem("role") == "admin" ? "collapse" : "",
    name: "Leave Requestlist ",
    route: "/adminleaverequestlist",
    key:'adminleaverequestlist',
    icon: <BsListCheck size={25} />,
    component: (
      <PrivateRoute>
        <Adleaverequestlist />
      </PrivateRoute>
    ),
  },
  ,
  {
    type: localStorage.getItem("role") == "admin" ? "collapse" : "",
    name: "Permission Requestlist ",
    route: "/adminpermissionrequestlist",
    key:'adminpermissionrequestlist',
    icon: <BsListTask size={25} />,
    component: (
      <PrivateRoute>
        <Adpermissionreqlist />
      </PrivateRoute>
    ),
  },
  ,
  {
    type: localStorage.getItem("role") == "admin" ? "collapse" : "",
    name: "Leave List ",
    route: "/adminleavelist",
    key:'adminleavelist',
    icon: <LuListTodo size={25} />,
    component: (
      <PrivateRoute>
        <Adleavelist />
      </PrivateRoute>
    ),
  },
  {
    type: localStorage.getItem("role") == "admin" ? "collapse" : "",
    name: "Permisssion List",
    route: "/permisssionlist",
    key:'permisssionlist',
    icon: <BsListStars size={25} />,
    component: (
      <PrivateRoute>
        <Permisssionlist />
      </PrivateRoute>
    ),

    // },
    // {
    //     type: "collapse",
    //   name: "PermisssionGrandPage",

    //   route: "/PermisssionGrandPage",
    //   icon: <GiMedallist size={30} />,
    //   component:  <PrivateRoute >
    //        < PermisssionGrandPage/>
    //   </PrivateRoute> ,

    // },
  },
  {
    type: localStorage.getItem("role") == "admin" ? "collapse" : "",
    name: "Admin Attendancelist ",
    route: "/adminattendanceist",
    key:'adminattendanceist',
    icon: <BsReverseListColumnsReverse size={25} />,
    component: (
      <PrivateRoute>
        <Adattendancelist />
      </PrivateRoute>
    ),
  },
  // ,
  // {
  //     type: "collapse",
  //   name: "LeaverequestApproval",

  //   route: "/LeaverequestApproval",
  //   icon: <FcApproval size={30} />,
  //   component: <PrivateRoute >
  //             < LeaverequestApproval/>
  //            </PrivateRoute>,

  // },
  {
    name: "Permission Request Approval ",
    route: "/PermissionrequestApproval",
    key:'PermissionrequestApproval',
    icon: <BsFillChatSquareQuoteFill size={30} />,
    component: (
      <PrivateRoute>
        <PermissionrequestApproval />
      </PrivateRoute>
    ),
  },
  ,
  {
    name: "Change Profile ",
    route: "/ChangeProfile",
    key:'ChangeProfile',
    component: (
      <PrivateRoute>
        <ChangeProfile />
      </PrivateRoute>
    ),
  },
  {
    name: "Authentication Sigin ",
    route: "/authentication/sign-in",
    key:'authenticationsign-in',
   
    component: <SignIn />,
  },
  {
    
    name: "Authentication Sigup ",
    route: "/authentication/sign-up",
    key:'authenticationsign-up',
    component: <SignUp />,
  },
  ,
  {
    key:'forgetsign-up',
    name: "Forget Password ",
    route: "/forget/sign-up",
    component: <Fogetpassword />,
  },
  ,
  {
    name: "Otp Register ",
    key:'otpsign-up',
    route: "/otp/sign-up",
    component: <Otp />,
  },
  ,
  {
    name: "Change Password ",
    route: "/changepassword/sign-up",
    key:'changepasswordsign-up',
    component: <Changepassword />,
  },
  ,
  {
    name: "Mainscreen ",
    route: "/mainscreen",
    key:'mainscreen',
    component: (
      <PrivateRoute>
        <Mainscreen />
      </PrivateRoute>
    ),
  },
];

export default routes;
