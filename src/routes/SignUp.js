import React from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  }));

const SignUp = () => {
    const classes = useStyles();
    return (
        <div className={`SignUp`, classes.root}>
            <Container>
              <div>
                <h1>Create Account</h1>

            </div>  
            </Container>
            
        </div>
    )
}

export default SignUp;