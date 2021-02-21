import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {getOrgInfo} from '../../utils/getOrgInfo';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'rgb(31, 32, 36)'
    },
    paper: {
        backgroundColor: 'rgba(213, 234, 242, 0.3)',
        padding: '0.3rem',
        height: '100%'
    }
  }));

const About = (props) => {
    const classes = useStyles();
    const [info, setInfo] = useState();

    useEffect(async () => {
        const response = await getOrgInfo(props.name);
        const result = response.data;
        setInfo(result);
    },[]);

    return (
        <div className={`About`, classes.root}>
            <Container>
              <div>
                <h1>{info.name}</h1>
                <Paper className={classes.paper}>
                    <Grid>

                    </Grid>
                </Paper>
            </div>  
            </Container>
            
        </div>
    )
}

export default About;