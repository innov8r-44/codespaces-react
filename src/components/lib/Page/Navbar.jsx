import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  MenuItem,
  Toolbar,
  IconButton,
  Typography,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { AccountCircle } from "@mui/icons-material";

// Custom styling...may remove?
const useStyles = makeStyles({
  root: {
    borderBottomRightRadius: "10%",
    borderBottomLeftRadius: "10%",
  },
  title: {
    fontSize: 14,
  },
  link: {
    textDecoration: "none",
    display: "block",
    color: "black",
  },
});

const NavBar = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const open = Boolean(anchorElNav);
  const handleClick = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" className={classes.root} enableColorOnDark>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorElNav}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link to="/home" className={classes.link}>
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
          <Link to="/about" className={classes.link}>
            <MenuItem onClick={handleClose}>About</MenuItem>
          </Link>
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EverBrand
        </Typography>
        {auth ? (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        ) : (
          <Button color="inherit">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
