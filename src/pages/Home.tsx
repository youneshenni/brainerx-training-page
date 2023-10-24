import {
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Person, School, SupervisorAccount } from "@mui/icons-material";

export default function Home() {
  return (
    <Box>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Welcome to BrainerX
      </Typography>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        The best place to learn
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Card>
            <CardHeader
              title="Students"
              subheader="Our proud students"
              avatar={<School color="primary" />}
            ></CardHeader>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <SupervisorAccount color="secondary" />
                  </ListItemAvatar>
                  <ListItemText primary="600" secondary="Total Students" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={6}>
          <Card>
            <CardHeader title="Trainers"></CardHeader>
          </Card>
        </Grid>
        <Grid xs={12} md={6}>
          <Card>
            <CardHeader title="Trainings"></CardHeader>
          </Card>
        </Grid>
        <Grid xs={12} md={6}>
          <Card>
            <CardHeader title="Average Rating"></CardHeader>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
