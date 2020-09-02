import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar:{
    padding: 5,
  },
  icon:{
    color: '#fff',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Avatar className={classes.avatar} ></Avatar>
          <Typography variant="h6" className={classes.title}>
            EventBook
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Eventos</Button>
          <Button color="inherit">Conferências</Button>
          <Button color="inherit">Palestras</Button>
          <Button color="inherit">Simpósios</Button>
          <Button color="inherit">Workshops</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">logout</Button>
          <IconButton className={classes.icon}/>
          <IconButton/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
