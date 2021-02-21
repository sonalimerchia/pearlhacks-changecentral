import React, { useEffect, useState } from 'react';
import {getOrgInfo} from '../../utils/getOrgInfo';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import OrgBar from './OrgBar';

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
        width: '100%',
        minWidth: 300
    }, 
    media: {
        height: 140
    }
  }));

const Volunteer = (props) => {
    const classes = useStyles();
    const [info, setInfo] = useState();

    useEffect(async () => {
        const response = await getOrgInfo(props.name);
        const result = response.data;
        setInfo(result);
    },[]);

    return (
        <div className={`Events`, classes.root}>
            <OrgBar name={props.name}/>
            { !(info?.volunteer.roles) ? <h2>No Volunteering Opportunities Posted</h2> :(
              <>
                <h2>Volunteering Opportunities</h2>
                <Grid container className={classes.grid} spacing={3}>
                    {info.volunteer.roles.map((element) => {
                        return (
                        <Grid item xs className={classes.card}>
                            <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                {element.title}
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

export default Volunteer;