import React, { useState } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Divider,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Hidden
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  title: {
    marginRight: "auto"
  },
  drawer: {
    width: drawerWidth
  },
  content: {
    padding: theme.spacing(3)
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  }
}));

const ResponsiveDrawer = () => {
  const classes = useStyles();
  const drawerItems = (
    <>
      <Toolbar />
      <Divider />
      <List disablePadding className={classes.drawer}>
        <ListItem button>
          <ListItemText primary="First Item" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Second Item" />
        </ListItem>
      </List>
    </>
  );
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden smDown implementation="css">
        <Drawer open={open} onClose={() => setOpen(false)}>
          {drawerItems}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer open={open} onClose={() => setOpen(false)} variant="permanent">
          {drawerItems}
        </Drawer>
      </Hidden>
      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            toofaniCoder
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Toolbar />
        <Typography variant="h2">New ReactJs Features!</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          ducimus magnam. Laudantium, pariatur alias numquam tempore error, ipsa
          id quos sed porro sapiente tenetur inventore, consectetur eius. Magni
          quasi, error ipsum nobis dicta totam amet ducimus ea omnis, illo nemo
          reprehenderit dignissimos quod odit nisi deserunt perspiciatis
          corporis adipisci ullam at fugit explicabo minima. Delectus voluptas,
          corrupti hic reprehenderit magnam ipsa explicabo rem suscipit, rerum
          impedit facere laboriosam minima? Delectus libero distinctio sapiente,
          dolores consequatur molestiae. Earum reprehenderit sint ea quisquam
          consequatur recusandae eos, cum itaque eaque unde quibusdam rem
          quaerat officia quia dicta tenetur sapiente ut, magni voluptatum
          atque!
        </Typography>
      </main>
    </div>
  );
};

export default ResponsiveDrawer;
