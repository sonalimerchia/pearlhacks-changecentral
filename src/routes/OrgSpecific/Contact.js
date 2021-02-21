import React, { useEffect, useState } from 'react';
import {getOrgInfo} from '../../utils/getOrgInfo';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import OrgBar from './OrgBar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'rgb(31, 32, 36)'
    },
    paper: {
        backgroundColor: 'rgba(213, 234, 242, 0.3)',
        padding: '0.3rem',
        margin: '25px 5%',
        width: '90%',
        height: '100%'
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

const Contact = (props) => {
    const classes = useStyles();
    const [info, setInfo] = useState();

    useEffect(async () => {
        const response = await getOrgInfo(props.name);
        const result = response.data;
        setInfo(result);
    },[]);

    return (
        <div className={`Contact`, classes.root}>
          {console.log(info)}
          <OrgBar name={props.name}/>
          {info?.contact.phone || info?.contact.email ? <h2>Contact Information</h2> : <h2>No Contact Information Provided</h2>}
          <Grid container className={classes.paper} spacing={2}>
            {info?.contact.phone ? (
              <Grid item xs>
                <PhoneIcon className={classes.phone}></PhoneIcon><br />
                <p><a className={classes.subtitle} href={'tel:'+formatPhoneNumber(info.contact.phone)}>
                  {formatPhoneNumber(info.contact.phone)}
                </a></p>
              </Grid>
            ) : null}
            {info?.contact.email ? (
              <Grid item xs>
                <EmailIcon className={classes.email}></EmailIcon>
                <p><a className={classes.subtitle} href={'mailto:'+info.contact.email}>
                  {info.contact.email}
                </a></p> 
              </Grid>
            ): null}
          </Grid>
        </div>
    )
}

export default Contact;