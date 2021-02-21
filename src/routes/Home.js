import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: 'rgba(32, 122, 255, 0.39)'
        
      },
      paper: {
        height: 140,
        width: 100,
      }
  }));

const Home = () => {
    const [data, setData] = useState({})
    const classes = useStyles();

    useEffect(()=> {
        var config = {
          method: 'get',
          url: 'http://localhost:4000/',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
  
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setData(JSON.stringify(response.data))
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [])


    console.log(data)
    return (
        <div className='Home'>
            <Container>
              <div>
                <h1>Home</h1>
                <div>
                    <p>Welcome to Change Central! Let us be your one-stop-shop for nonprofits, charities, and social activist organizations to spread awareness, collect donations, and search for volunteers. Search for specific organizations, or browse organizations below to find out how to volunteer, donate, or attend events. </p>
                </div>
                <h2>Our Organizations</h2>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                        {[0, 1, 2].map((value) => (
                            <Grid key={value} item>
                            <Paper className={classes.paper} />
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>  
            </Container>
        </div>
    )
}

export default Home;