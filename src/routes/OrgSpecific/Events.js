import React from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
  }));

const Events = () => {
    const classes = useStyles();
    return (
        <div className="Events">
            <Container>
              <div>
                <h1>Organization Events</h1>
              </div>  
            </Container>
            
        </div>
    )
}

export default Events;