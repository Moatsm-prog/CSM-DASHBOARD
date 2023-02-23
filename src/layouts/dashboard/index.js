/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsBarChart from "../../examples/Charts/BarCharts/ReportsBarChart";

function Dashboard() {
  const cardStats = {
    labels: ["Visa", "Master Card", "American Express", "Discover"],
    datasets: { label: "Cards", data: [2, 4, 8, 5] },
    total: 19,
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="ev_station"
                title="Stations"
                count={17}
                active={{
                  color: "success",
                  label: "Avalibale Stations",
                  count: 12,
                }}
                inactive={{
                  color: "error",
                  label: "Offline Stations",
                  count: 5,
                }}
                chartType="circular-progress-bar"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="people"
                title="Users"
                count={31}
                active={{
                  color: "success",
                  label: "Active Users",
                  count: 15,
                }}
                inactive={{
                  color: "error",
                  label: "Inactive Users",
                  count: 16,
                }}
                chartType="circular-progress-bar"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="cable"
                title="Connectors"
                count={52}
                active={{
                  color: "success",
                  label: "Avalibale Connectors",
                  count: 40,
                }}
                inactive={{
                  color: "error",
                  label: "Offline Connectors",
                  count: 12,
                }}
                chartType="circular-progress-bar"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ReportsBarChart
                color="info"
                title="Cards"
                count={cardStats.total}
                chart={cardStats}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
