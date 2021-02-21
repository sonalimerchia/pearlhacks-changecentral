import React from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
  }));

const Volunteer = () => {
    const classes = useStyles();
    return (
        <div className="Home">
            <Container>
              <div>
                <h1>Volunteer Opportunities</h1>

            </div>  
            </Container>
            
        </div>
    )
}

export default Volunteer;