import React from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'rgb(31, 32, 36)'
    }
  }));

const About = () => {
    const classes = useStyles();
    return (
        <div className={`About`, classes.root}>
            <Container>
              <div>
                <h1>About Organization</h1>

            </div>  
            </Container>
            
        </div>
    )
}

export default About;