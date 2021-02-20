import React from 'react';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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

const About = () => {
    const classes = useStyles();
    return (
        <div className={`About`, classes.root}>
            <Container>
              <div>
                <h1>About Organization</h1>
                <Paper className={classes.paper}>
                    <h2>Org name</h2>
                    <p>Hey! bio here</p>
                </Paper>
            </div>  
            </Container>
            
        </div>
    )
}

export default About;