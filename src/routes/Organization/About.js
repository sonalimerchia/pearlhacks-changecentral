import React from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
  }));

const About = () => {
    const classes = useStyles();
    return (
        <div className="About">
            <Container>
              <div>
                <h1>About Organization</h1>

            </div>  
            </Container>
            
        </div>
    )
}

export default About;