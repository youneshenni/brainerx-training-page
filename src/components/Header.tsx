import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}

const drawerWidth = 240;
const navItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  {
    label: "Users",
    url: "/users",
  },
  {
    label: "Test",
    url: "https://facebook.com",
  },
];

export default function DrawerAppBar(props: Props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ label, url }) => (
          <ListItem key={url} disablePadding>
            <Link to={url}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.url}>
                <Button key={item.url} sx={{ color: "#fff" }}>
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3, mt: 6, width: "100%" }}>
        {children}
      </Box>
      <Paper
        style={{
          width: "100%",
          marginTop: 8,
        }}
        elevation={5}
      >
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid xs={12} md={4} sx={{ padding: "8px 24px" }}>
            <List>
              <ListItem>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem>
                <ListItemText primary="About" />
              </ListItem>
            </List>
          </Grid>
          <Grid xs={12} md={4}>
            <List>
              <ListItem>
                <ListItemText primary="Our team" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Contact Us" />
              </ListItem>
            </List>
          </Grid>
          <Grid xs={12} md={4}>
            <List>
              <ListItem>
                <ListItemText primary="+213656848888" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Rue G, Les crêtes, Hydra" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider />
        <Typography sx={{ textAlign: "center", padding: "8px 0" }}>
          © 2023 - Made with ❤️ By BrainerX
        </Typography>
      </Paper>
    </Box>
  );
}
