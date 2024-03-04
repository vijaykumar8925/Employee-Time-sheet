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

const permissionRequestTableData = {
  columns: [
    { name: "reason", align: "left",sortable: true },
    { name: "date", align: "left" ,sortable: true },
    { name: "hours", align: "center",sortable: true },
    { name: "fromtime", align: "center",sortable: true },
    { name: "totime", align: "center",sortable: true },
  ],

  rows: [
    {
      reason: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      date: <Function job="Manager" org="Organization" />,
      hours: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      fromtime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      totime: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
     
    },
    {
        reason: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        date: <Function job="Manager" org="Organization" />,
        hours: (
          <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        fromtime: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </SoftTypography>
        ),
        totime: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </SoftTypography>
        ),
     
    },
    {
        reason: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        date: <Function job="Manager" org="Organization" />,
        hours: (
          <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        fromtime: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </SoftTypography>
        ),
        totime: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </SoftTypography>
        ),
     
    },
    {
        reason: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        date: <Function job="Manager" org="Organization" />,
        hours: (
          <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        fromtime: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </SoftTypography>
        ),
        totime: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </SoftTypography>
        ),
     
    },
    {
        reason: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        date: <Function job="Manager" org="Organization" />,
        hours: (
          <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        fromtime: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </SoftTypography>
        ),
        totime: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </SoftTypography>
        ),
     
    },
  ],
};

export default permissionRequestTableData;
