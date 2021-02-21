import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import {getAllOrgs} from "../../utils/getOrgInfo";
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import pic1 from '../../images/cartoonroads.jpg';
import pic2 from '../../images/activism.jpg';
import pic3 from '../../images/children.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: 'rgba(32, 122, 255, 0.39)'
        
      },
      paper: {
        height: 140,
        width: 100,
      },
      card: {
          maxWidth: 345,
          minWidth: 300,
          width: '100%'
      }, 
      media: {
          height: 140
      }, 
      link: {
        textDecoration: 'none', 
        color: 'rgb(52, 88, 235)'
      }
  }));

  const getImage = (i) => {
    if (i % 3 == 0) {
        return pic1;
    } else if (i % 3 == 1) {
        return pic2;
    } else return pic3;
}

const Home = () => {
    const classes = useStyles();
    const [info, setInfo] = useState({});
    const [orgCards, setOrgs] = useState([]);

    useEffect(async () => {
      const response = await getAllOrgs();
      const result = response.data;
      console.log(response);
      setInfo(result);
      mapOrgs(result)
    }, [])

    const mapOrgs = (result) => {
      var orgs = [];
      var i = 0;
      while (result[i]) {
        const element = result[i];
        orgs.push({
          name: element.name, 
          description: element.description.text
        })
        i++;
      }
      setOrgs(orgs);
    }

    return (
        <div className='Home'>
            <Container>
              <div>
                <h1>Home</h1>
                <div>
                    <p>Welcome to Change Central! Let us be your one-stop-shop for nonprofits, charities, and social activist organizations to spread awareness, collect donations, and search for volunteers. Search for specific organizations, or browse organizations below to find out how to volunteer, donate, or attend events. </p>
                </div>
                { !(info) ? <h2>Loading Orgs...</h2> :(
                  <>
                    <h2>Our Organizations</h2>
                    <Grid container className={classes.grid} spacing={3}>
                      {orgCards.map((element, i) => {
                        return (<Grid item xs className={classes.card}>
                            <Card>
                              <Link className={classes.link} to={"/org/about/"+element.name}>
                                <CardMedia
                                className={classes.media}
                                image={getImage(i)}
                                title="Org Image"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {element.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                {element.description}
                                </Typography>
                                </CardContent>
                              </Link>
                            </Card>
                        </Grid>)
                      })}
                    </Grid>
                  </>
                )}
              </div>  
            </Container>
        </div>
    )
}

export default Home;