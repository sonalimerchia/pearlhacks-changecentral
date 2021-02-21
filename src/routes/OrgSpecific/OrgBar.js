import React, {useState, useEffect} from "react";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import {getOrgInfo} from '../../utils/getOrgInfo';
import logo from '../../logo.svg';

const useStyles = makeStyles((theme) => ({
    tabs: {
      color: 'white',
      textDecoration: 'none'
    },
    toolBar: {
      backgroundColor: 'rgb(52, 88, 235)',
      width: '90%',
      margin: '0% 5% 0% 5%'
    },
    menuButton: {
      color: 'white',
      textDecoration: 'none'

    },
    paper: {
        backgroundColor: 'rgba(213, 234, 242, 0.3)',
        padding: '0.3rem',
        height: '100%',
        width: '90%',
        margin: '0% 5% 0% 5%'
    }
  }))

const OrgBar = (props) => {
    const classes = useStyles();
    const [info, setInfo] = useState();

    useEffect(async () => {
      const response = await getOrgInfo(props.name);
      const result = response.data;
      setInfo(result);
    },[]);

    return (
    <Box justifyContent='center'>
      <h1>{props.name}</h1>
        <Paper className={classes.paper}>
            <Grid>
                        <img src={logo} alt="react Logo" width='30%'/>
                        <img src={logo} alt="react Logo" width='30%'/>
                        <img src={logo} alt="react Logo" width='30%'/>
            </Grid>
        </Paper>
        <Grid justifyContent='auto' className={classes.toolBar}>
            <Button item xs>
              <Link className={classes.tabs} to={"/org/"+props.name}>About</Link>
            </Button>
            <Button item xs>
              <Link className={classes.tabs} to={"/donate/"+props.name}>Donate</Link>
            </Button>
            <Button item xs>
              <Link className={classes.tabs} to={"/events/"+props.name}>Events</Link>
            </Button>
            <Button item xs>
              <Link className={classes.tabs} to={"/contact/"+props.name}>Contact</Link>
            </Button>
            <Button item xs>
              <Link className={classes.tabs} to={"/volunteer/"+props.name}>Volunteer</Link>
            </Button>
          </Grid>
    </Box>
    )
}

export default OrgBar;