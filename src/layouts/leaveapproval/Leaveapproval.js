import React, { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import UnderProgress from "components/UnderProgress";
import EmpInput from "layouts/attendancecorrection/componenet/EmpInput";
import SoftButton from "components/SoftButton";
import SoftButtonRoot from "components/SoftButton/SoftButtonRoot";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
const Leaveapproval = () => {
  // Department
  const [department, setDepartment] = useState("");
  const [departmentDateTime, setDepartmentDateTime] = useState("");
  const [departError, setDepartError] = useState({});
  const [departCheck, setDepartCheck] = useState(false);

  // Designation
  const [designation, setDesignation] = useState("");
  const [designationDateTime, setDesignationDateTime] = useState("");
  const [designError, setDesignError] = useState({});
  const [designCheck, setDesignCheck] = useState(false);

  // Branch
  const [branch, setBranch] = useState("");
  const [branchDateTime, setBranchDateTime] = useState("");
  const [branchError, setBranchError] = useState({});
  const [branchCheck, setBranchCheck] = useState(false);

  // Qualification
  const [qualification, setQualification] = useState("");
  const [qualificationDateTime, setQualificationDateTime] = useState("");
  const [qualiError, setQualiError] = useState({});
  const [qualiCheck, setQualiCheck] = useState(false);

  // function
  const departmentFunc = (value) => {
    setDepartment(value);
  };

  const designationFunc = (value) => {
    setDesignation(value);
  };

  const branchFunc = (value) => {
    setBranch(value);
  };

  const qualificationFunc = (value) => {
    setQualification(value);
  };

  // date Function
  const departmentDateTimeFunc = (value) => {
    setDepartmentDateTime(value);
  };

  const designationDateTimeFunc = (value) => {
    setDesignationDateTime(value);
  };

  const branchDateTimeFunc = (value) => {
    setBranchDateTime(value);
  };

  const qualificationDateTimeFunc = (value) => {
    setQualificationDateTime(value);
  };

  // error handle

  // department
  const departValidate = (depart, date) => {
    let departError = {};
    if (!depart) {
      departError.depart = "Department Required";
    }
    if (!date) {
      departError.date = "Date and Time  Required";
    }
    return departError;
  };

  // Designation
  const designValidate = (design, date) => {
    let designError = {};
    if (!design) {
      designError.design = "Designation  Required";
    }
    if (!date) {
      designError.date = "Date and Time  Required";
    }
    return designError;
  };

  // Branch
  const branchValidate = (branch, date) => {
    let branchError = {};
    if (!branch) {
      branchError.branch = "Branch  Required";
    }
    if (!date) {
      branchError.date = "Date and Time  Required";
    }
    return branchError;
  };

  // Qualification
  const qualiValidate = (quali, date) => {
    let qualiError = {};
    if (!quali) {
      qualiError.quali = "Qualification  Required";
    }
    if (!date) {
      qualiError.date = "Date and Time  Required";
    }
    return qualiError;
  };

  // Handle Function

  // department
  const handleDepartment = async () => {
    setDepartError(departValidate(department, departmentDateTime));
    setDepartCheck(true);
  };
  // Designation
  const handleDesignation = async () => {
    setDesignError(designValidate(designation, designationDateTime));
    setDesignCheck(true);
  };
  // Branch
  const handleBranch = async () => {
    setBranchError(branchValidate(branch, branchDateTime));
    setBranchCheck(true);
  };

  //Qualification
  const handleQualification = async () => {
    setQualiError(qualiValidate(qualification, qualificationDateTime));
    setQualiCheck(true);
  };

  // useEffect Function

  // Department
  useEffect(() => {
    if (Object.keys(departError).length === 0 && departCheck) {
      DepartmentSubmit();
    }
  }, [departError]);

  // Designation
  useEffect(() => {
    if (Object.keys(designError).length === 0 && designCheck) {
      DesignationSubmit();
    }
  }, [designError]);

  // Branch
  useEffect(() => {
    if (Object.keys(branchError).length === 0 && branchCheck) {
      BranchSubmit();
    }
  }, [branchError]);

  // Qualification
  useEffect(() => {
    if (Object.keys(qualiError).length === 0 && qualiCheck) {
      QualificationSubmit();
    }
  }, [qualiError]);

  // Submit Function

  // Department
  const DepartmentSubmit = async () => {
    try {
      await axios
        .post("http://localhost:5000/post/updatedepartment", { department, departmentDateTime })
        .then((res) => console.log("send"));
    } catch (err) {
      console.log(err);
    }
  };

  // Designation
  const DesignationSubmit = async () => {
    try {
      await axios
        .post("http://localhost:5000/post/updatedesignation", { designation, designationDateTime })
        .then((res) => console.log("send"));
    } catch (err) {
      console.log(err);
    }
  };

  // Branch
  const BranchSubmit = async () => {
    try {
      await axios
        .post("http://localhost:5000/post/updatebranch", { branch, branchDateTime })
        .then((res) => console.log(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  // Qualification
  const QualificationSubmit = async () => {
    try {
      await axios
        .post("http://localhost:5000/post/updatequalification", {
          qualification,
          qualificationDateTime,
        })
        .then((res) => console.log("send"));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <DashboardLayout>
        <DashboardNavbar />
        {/* <div>
        <UnderProgress/>
      </div> */}

        <Row>
          <Col lg={6}>
            <Card style={{ width: "21rem" }}>
              <Card.Body className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <div>
                  <Card.Title className="text-center">Department</Card.Title>
                  <EmpInput
                    width="250px"
                    height="40px"
                    lable="Type"
                    placeholder="Department"
                    type="text"
                    value={department}
                    message={departmentFunc}
                    border={departError.depart ? "2px solid red " : ""}
                  />
                  {departError.depart ? (
                    <span className="h6 text-danger">Department Required * </span>
                  ) : null}
                </div>
                <div>
                  <EmpInput
                    width="250px"
                    height="40px"
                    lable="Date and Time"
                    type="datetime-local"
                    value={departmentDateTime}
                    message={departmentDateTimeFunc}
                  />
                  {departError.date ? (
                    <span className={`h6 text-danger`}>Date and Time Required * </span>
                  ) : null}
                </div>
                <Button variant="primary" onClick={handleDepartment}>
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card style={{ width: "21rem" }}>
              <Card.Body className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <div>
                  <Card.Title className="text-center">Designation</Card.Title>
                  <EmpInput
                    width="250px"
                    height="40px"
                    lable="Type"
                    placeholder="Designation"
                    type="text"
                    value={designation}
                    message={designationFunc}
                    border={designError.design ? "2px solid red " : ""}
                  />
                  {designError.design ? (
                    <span className="h6 text-danger">Designation Required * </span>
                  ) : null}
                </div>
                <div>
                  <EmpInput
                    width="250px"
                    height="40px"
                    lable="Date and Time"
                    type="datetime-local"
                    value={designationDateTime}
                    message={designationDateTimeFunc}
                  />
                  {designError.date ? (
                    <span className={`h6 text-danger`}>Date and Time Required * </span>
                  ) : null}
                </div>
                <Button variant="primary" onClick={handleDesignation}>
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="my-4">
            <Card style={{ width: "21rem" }}>
              <Card.Body className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <Card.Title className="text-center">Branch</Card.Title>
                <div>
                  <EmpInput
                    width="250px"
                    height="40px"
                    lable="Type"
                    placeholder="Branch"
                    type="text"
                    value={branch}
                    message={branchFunc}
                    border={branchError.branch ? "2px solid red " : ""}
                  />
                    {branchError.branch ? (
                    <span className="h6 text-danger">Branch Required * </span>
                  ) : null}
                </div>
                <div>
                  <EmpInput
                    width="250px"
                    height="40px"
                    lable="Date and Time"
                    type="datetime-local"
                    value={branchDateTime}
                    message={branchDateTimeFunc}
                  />
                    {branchError.date ? (
                    <span className={`h6 text-danger`}>Date and Time Required * </span>
                  ) : null}
                </div>
                <Button variant="primary" onClick={handleBranch}>
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="my-4">
            <Card style={{ width: "21rem" }}>
              <Card.Body className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <Card.Title className="text-center">Qualification</Card.Title>
                <div>
                  <EmpInput
                    width="250px"
                    height="40px"
                    lable="Type"
                    placeholder="Qualification"
                    type="text"
                    value={qualification}
                    message={qualificationFunc}
                  />
                    {qualiError.quali ? (
                    <span className="h6 text-danger">Qualification Required * </span>
                  ) : null}
                </div>
                <div>
                  <EmpInput
                    width="250px"
                    height="40px"
                    lable="Date and Time"
                    type="datetime-local"
                    value={qualificationDateTime}
                    message={qualificationDateTimeFunc}
                  />
                   {qualiError.date ? (
                    <span className={`h6 text-danger`}>Date and Time Required * </span>
                  ) : null}
                </div>
                <Button variant="primary" onClick={handleQualification}>
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </DashboardLayout>
    </div>
  );
};

export default Leaveapproval;
