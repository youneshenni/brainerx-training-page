import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Class, School } from "@mui/icons-material";
import { LineChart } from "@mui/x-charts";
import React from "react";

export default function Home() {
  return (
    <Box>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Welcome to BrainerX
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid xs={12} md={6}>
          <Card>
            <CardHeader
              title="Students"
              subheader="Our proud students"
              avatar={<School color="primary" />}
            ></CardHeader>
            <CardContent>
              {/* <List>
                <ListItem>
                  <ListItemAvatar>
                    <SupervisorAccount color="secondary" />
                  </ListItemAvatar>
                  <ListItemText primary="3000" secondary="Total Students" />
                </ListItem>
                <ListItem> */}
              <LineChart
                xAxis={[
                  {
                    scaleType: "point",
                    data: ["JUN", "JUL", "AUG", "SEP", "OCT"],
                  },
                ]}
                series={[
                  {
                    data: [200, 500, 900, 1700, 3000],
                    label: "Students",
                  },
                ]}
                width={500}
                height={300}
              />
              {/* </ListItem>
              </List> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardHeader
              title="Trainers"
              avatar={<Class color="primary" />}
              subheader="Our well-qualified trainers"
            ></CardHeader>
            <CardContent>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Travis Howard"
                      src="https://mui.com/static/images/avatar/2.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Cindy Baker"
                      src="https://mui.com/static/images/avatar/3.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Sandra Adams
                        </Typography>
                        {" — Do you have Paris recommendations? Have you ever…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </CardContent>
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
