import { useState } from "react";
import { useEffect } from "react";
import "./Main.css";
import routes from "routes";
import Axiox from "./functions/Axiox";
import axios from "axios";

function ChangeProfile() {
  const [data, setdata] = useState(routes);
  const [allchecked, setAllChecked] = useState([]);
  const [UserRole, setUserRole] = useState("");
  const [count, setcount] = useState(0);
  const HandleChange = (e) => {
    if (e.target.checked) {
      setAllChecked([...allchecked, e.target.value]);
    } else {
      setAllChecked(allchecked.filter((item) => item !== e.target.value));
    }
  };
  const HandleChange_Role = (e) => {
    setUserRole(e.target.value);
  };
  const OnhandleSubmit = async (event) => {
    const Userdata = {
      allchecked: allchecked,
      UserRole: UserRole,
    };
    event.preventDefault();
    try {
      let res = await axios
        .post("http://localhost:8000/admin/change/role/", Userdata)
        .then((res) => {
          console.log(res);
        });

      // Work with the response...
    } catch (err) {
      // Handle error
      console.log(err);
    }
  };

  return (
    <form onSubmit={OnhandleSubmit}>
      <>
        <div className="chagProfil_parent">
          {/* 

<div className="dropdown">
<button className="dropbtn" type="button">{allchecked.length==0?<span>select menu</span>:allchecked.length+'selected' }</button>
<div className="dropdown-content">
{routes.map((item, index) => (
<div key={index} >
<div style={{paddingLeft:"10px"}}>
<input value={item.name} type="checkbox" name="allchecked" onChange={HandleChange}/>
<span>{item.name}</span>
</div>
</div>
))}
</div>
</div>
<select value={UserRole} name="UserRole" onChange={HandleChange_Role} style={{fontSize:"16px"}}>
 <option>user</option>
 <option>admin</option>
 <option>super admin</option>
</select>
<button className="chagProfil_parent_button" type="submit">submit</button> */}
          <></>
        </div>
      </>
    </form>
  );
}

export default ChangeProfile;
