import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import About from './Organization/About'
import Donate from './Organization/Donate'
import Events from './Organization/Events'
import Contact from './Organization/Contact'
import Volunteer from './Organization/Volunteer'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    textDecoration: 'none'
  }
}))

export default function Routing() {
  const classes = useStyles();
    return (
    <div className={classes.root}>
      
        <Router>

        <div>
         <AppBar position="static"> 
          <Toolbar>
            <Button >
              <Link className={classes.root} to="/about">Home</Link>
            </Button>
            <Button>
              <Link className={classes.root} to="/about">About</Link>
            </Button>
            <Button>
              <Link className={classes.root} to="/donate">Donate</Link>
            </Button>
            <Button>
              <Link className={classes.root} to="/events">Events</Link>
            </Button>
            <Button>
              <Link className={classes.root} to="/contact">Contact</Link>
            </Button>
            <Button>
              <Link className={classes.root} to="/volunteer">Volunteer</Link>
            </Button>
          </Toolbar>
        </AppBar>

          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/volunteer">
            <Volunteer />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
      
      
    </div>

      
  );
}