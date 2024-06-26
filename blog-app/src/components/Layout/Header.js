import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BookIcon from '@mui/icons-material/Book';

const drawerWidth = 240;
const navItems = ["Home", "Create Blog"];

const Header = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleRoute = (e) => {
    let target = e.target.innerText.toLowerCase();
    if (target === "home") {
      navigate("/");
    } else if (target === "create blog") {
      navigate("/create-blog");
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
      <ListItem
          key="toggleButton"
          disablePadding
          onClick={() => setDarkMode(!darkMode)}
        >
          <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText primary={darkMode?<WbSunnyIcon/>:<DarkModeIcon/>} />
          </ListItemButton>
        </ListItem>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding onClick={handleRoute}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" >
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
            sx={{
              flexGrow: 1,
              display: { sm: "block" },
              textAlign: { xs: "right", sm: "left" },
            }}
          >
            <Typography variant="h5" sx={{display:"flex",alignItems:"center"}}>BLOGGER <BookIcon/></Typography>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button
              key="Toggle-Theme"
              sx={{ color: "#fff" }}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode?<WbSunnyIcon/>:<DarkModeIcon/>}
            </Button>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }} onClick={handleRoute}>
                {item}
              </Button>
            ))}
            
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
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
    </>
  );
};

export default Header;
