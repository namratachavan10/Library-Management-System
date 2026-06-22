import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    const res = await API.get("/dashboard");
    setData(res.data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <Typography variant="h4" gutterBottom>
        📚 Library Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h3">
                {data.totalBooks}
              </Typography>
              <Typography>Total Books</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h3">
                {data.issuedBooks}
              </Typography>
              <Typography>Issued Books</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h3">
                {data.returnedBooks}
              </Typography>
              <Typography>Returned Books</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;