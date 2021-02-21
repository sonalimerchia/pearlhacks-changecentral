import React, {useState, useEffect} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import {getOrgInfo} from '../../utils/getOrgInfo';
import pic1 from '../../images/activism.jpg';
import pic2 from '../../images/cartoonroads.jpg';
import pic3 from '../../images/charity.jpg';

const useStyles = makeStyles((theme) => ({
    tabs: {
      color: 'white',
      textDecoration: 'none'
    },
    toolBar: {
      backgroundColor: 'rgb(52, 88, 235)',
      width: '91.5%',
      padding: '0.3rem',
      margin: '0% 5%'
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
        margin: '0% 5% 0% 5%', 
        borderRadius: "0px 0px 0px 0px"
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
            <Grid container>
              <Grid item xs>
                <img src={pic1} alt="activism" width='100%' height='100%'/>
              </Grid>
              <Grid item xs>
              <img src={pic2} alt="cartoonRoads" width='100%' height='100%'/>
              </Grid>
              <Grid item xs>
              <img src={pic3} alt="charity" width='100%' height='100%'/>
              </Grid>
            </Grid>
        </Paper>
        <Grid container spacing={2} className={classes.toolBar}>
          <Grid item xs>
            <Button>
              <Link className={classes.tabs} to={`/org/about/${props.name}`}>About</Link>
            </Button>
          </Grid>
          <Grid item xs>
            <Button>
              <Link className={classes.tabs} to={`/org/donate/${props.name}`}>Donate</Link>
            </Button>
          </Grid>
          <Grid item xs>
            <Button>
              <Link className={classes.tabs} to={`/org/events/${props.name}`}>Events</Link>
            </Button>
          </Grid>
          <Grid item xs>
            <Button>
              <Link className={classes.tabs} to={`/org/activities/${props.name}`}>Activities</Link>
            </Button>
          </Grid>
          <Grid item xs>
            <Button>
              <Link className={classes.tabs} to={`/org/volunteer/${props.name}`}>Volunteer</Link>
            </Button>
          </Grid>
        </Grid>
    </Box>
    )
}

export default OrgBar;