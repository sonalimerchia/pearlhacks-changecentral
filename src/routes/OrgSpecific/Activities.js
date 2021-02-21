import React, { useEffect, useState } from 'react';
import {getOrgInfo} from '../../utils/getOrgInfo';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import OrgBar from './OrgBar';
import logo from '../../logo.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'rgb(31, 32, 36)'
    },
    paper: {
        backgroundColor: 'rgba(213, 234, 242, 0.3)',
        padding: '0.3rem',
        height: '100%'
    }, 
    grid: {
        width: '90%',
        margin: '0 5%'
    },
    card: {
        maxWidth: 345,
        width: '100%'
    }, 
    media: {
        height: 140
    }
  }));

const Activities = (props) => {
    const classes = useStyles();
    const [info, setInfo] = useState();

    useEffect(async () => {
        const response = await getOrgInfo(props.name);
        const result = response.data;
        setInfo(result);
    },[]);

    return (
        <div className={`Activities`, classes.root}>
            <OrgBar name={props.name}/>
            { !(info?.volunteer.roles) ? <h2>No Activities Posted</h2> :(
              <>
                <h2>Activities</h2>
                <Grid container className={classes.grid} spacing={3}>
                    {info.activities.map((element, i) => {
                        return (
                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardMedia
                              className={classes.media}
                              image={logo}
                              title="Activity Image"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                {element.name}
                              </Typography>
                              <Typography gutterBottom variant="h6" component="h4">
                                {element.day}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                               {element.description}
                              </Typography>
                            </CardContent>
                        </Card>
                        </Grid>
                      )
                    })}
                </Grid>
              </>
            )}
        </div>
    )
}

export default Activities;