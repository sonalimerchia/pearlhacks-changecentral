import React, { useEffect, useState } from 'react';
import {getOrgInfo} from '../../utils/getOrgInfo';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import OrgBar from './OrgBar';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';
import pic1 from '../../images/activism.jpg';
import pic2 from '../../images/cartoonroads.jpg';
import pic3 from '../../images/charity.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'rgb(31, 32, 36)'
    },
    grid : {
        width: "90%",
        margin: '0 5%'
    },
    paper: {
        backgroundColor: 'rgba(213, 234, 242, 0.3)',
        padding: '0.3rem',
        height: '100%',
        width: '45%',
        margin: "0 5%"
    }, 
    phone: {
      padding: '0.3rem',
      width: '20%', 
      height: '50%'
    }, 
    email: {
      padding: '0.3rem',
      width: '20%', 
      height: '50%'
    }, 
    subtitle: {
      textDecoration: 'none', 
      color: 'rgb(52, 88, 235)',
    }
  }));

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '')
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
    }
    return null
  }

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
            <OrgBar name={props.name}/>
            {!(info?.description.text) ? <h2>No Description Available</h2> : <h2>About Us</h2>}
            <Box display='flex' className={classes.grid}>
                { !(info?.description.text) ? null :
                    <Box className={classes.paper}>
                        <h4>Description:</h4>
                        <p>{info.description.text}</p>
                        <div height='100px'></div>
                        {info?.contact.phone ? (
                            <Box marginTop='50px'>
                                <PhoneIcon className={classes.phone}></PhoneIcon><br />
                                <p><a className={classes.subtitle} href={'tel:'+formatPhoneNumber(info.contact.phone)}>
                                {formatPhoneNumber(info.contact.phone)}
                                </a></p>
                            </Box>
                        ) : null}
                        {info?.contact.email ? (
                            <Box  marginTop='50px'>
                                <EmailIcon className={classes.email}></EmailIcon>
                                <p><a className={classes.subtitle} href={'mailto:'+info.contact.email}>
                                {info.contact.email}
                                </a></p> 
                            </Box>
                        ): null}
                    </Box>
                }
                { !(info?.description.text) ? null :
                    <Box className={classes.paper}>
                        <Grid item xs>
                            <img src={pic1} alt="activism" width='100%' height='100%'/>
                        </Grid>
                        <Grid item xs>
                            <img src={pic2} alt="cartoonRoads" width='100%' height='100%'/>
                        </Grid>
                        <Grid item xs>
                            <img src={pic3} alt="charity" width='100%' height='100%'/>
                        </Grid>
                    </Box>
                }
            </Box>
        </div>
    )
}

export default About;