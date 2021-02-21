import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  useParams
} from "react-router-dom";
import Home from './GeneralPages/Home'
import About from './OrgSpecific/About'
import Donate from './OrgSpecific/Donate'
import Events from './OrgSpecific/Events'
import Volunteer from './OrgSpecific/Volunteer'
import Register from './Forms/Register';
import Activities from './OrgSpecific/Activities';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Login from './Forms/Login';
import EditMaster from './Edit/EditMaster';
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  tabs: {
    color: 'white',
    textDecoration: 'none'
  },
  appBar: {
    backgroundColor: 'white',
    boxShadow: 'none',
    color: 'rgb(31, 32, 36)'
  },
  toolBar: {
    backgroundColor: 'rgb(52, 88, 235)'
  },
  menuButton: {
    marginRight: 0,
    color: 'white',
    textDecoration: 'none',
    right: '0px'
  },
  
}))

export default function Routing() {
  const classes = useStyles();
    return (
    <div className={classes.root}>
      
        <Router>

        <div>
         <AppBar position="static" className={classes.appBar}> 
          <Toolbar className={classes.toolBar}>
            <Box display='flex' flexGrow={1}>
            <Button >
              <Link className={classes.tabs} style={{fontSize: '1.2rem', fontWeight: 'bold'}} to="/">Change Central</Link>
            </Button>
            {/* <Button>
              <Link className={classes.tabs} to="/donate">Donate</Link>
            </Button>
            <Button>
              <Link className={classes.tabs} to="/events">Events</Link>
            </Button>
            <Button>
              <Link className={classes.tabs} to="/volunteer">Volunteer</Link>
            </Button>
            <Button>
              <Link className={classes.tabs} to="/activities">Activities</Link>
            </Button> */}
            </Box>
            <Box display='flex-end' justifyContent='right'>
            <Button className={classes.menuButton}>
              <Link to="/register" className={classes.tabs}>Register</Link>
            </Button>
            <Button className={classes.menuButton}>
              <Link to="/login" className={classes.tabs}>Login</Link>
            </Button>
            </Box>
          </Toolbar>

            <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/org/:viewType/:orgName" children={<Child />} />
          <Route path='/edit/:orgName' children={<EditChild />} />
        </Switch>
      </AppBar>    

      </div>
    </Router>
    </div>
  );
}

function Child() {
  let { orgName, viewType } = useParams();

  switch(viewType){
    case "about": return <About name={orgName}/>
    case "donate": return <Donate name={orgName}/>
    case "events": return <Events name={orgName}/>
    case "volunteer": return <Volunteer name={orgName}/>
    case "activities": return <Activities name={orgName} />
  }
}

function EditChild() {
  console.log("determining org...");
  let { orgName } = useParams();
  return <EditMaster name={orgName}/>
}