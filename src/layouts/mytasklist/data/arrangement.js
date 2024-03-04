/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const taskListTableData = {
  columns: [
    { name: "reference", align: "left" },
    { name: "activity", align: "left" },
    { name: "project", align: "center" },
    { name: "tasktype", align: "center" },
    { name: "workdetails", align: "center" },
    { name: "starttime", align: "center" },
    { name: "endtime", align: "center" },
    { name: "status", align: "center" },
  ],

  rows: [
    {
        reference: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        activity: <Function job="Manager" org="Organization" />,
        project: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      tasktype: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      workdetails: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), starttime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), endtime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), status: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
     
    },
    {
        reference: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        activity: <Function job="Manager" org="Organization" />,
        project: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      tasktype: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      workdetails: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), starttime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), endtime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), status: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
     
    },
    {
        reference: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        activity: <Function job="Manager" org="Organization" />,
        project: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      tasktype: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      workdetails: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), starttime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), endtime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), status: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
     
    },
    {
        reference: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        activity: <Function job="Manager" org="Organization" />,
        project: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      tasktype: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      workdetails: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), starttime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), endtime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), status: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
     
    },
    {
        reference: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        activity: <Function job="Manager" org="Organization" />,
        project: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      tasktype: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      workdetails: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), starttime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), endtime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), status: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
     
    },
    {
        reference: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        activity: <Function job="Manager" org="Organization" />,
        project: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      tasktype: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      workdetails: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), starttime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), endtime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), status: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
     
    },
    {
        reference: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        activity: <Function job="Manager" org="Organization" />,
        project: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      tasktype: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      workdetails: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), starttime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), endtime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), status: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
     
    },
    {
        reference: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        activity: <Function job="Manager" org="Organization" />,
        project: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      tasktype: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      workdetails: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), starttime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), endtime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ), status: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
     
    },
  ],
};

export default taskListTableData;
