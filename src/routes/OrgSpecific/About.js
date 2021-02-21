import React, { useEffect, useState } from 'react';
import {getOrgInfo} from '../../utils/getOrgInfo';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import OrgBar from './OrgBar';
import logo from '../../logo.svg';

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
    }
  }));

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
                    </Box>
                }
                { !(info?.description.text) ? null :
                    <Box className={classes.paper}>
                        <img src={logo} alt="react Logo" width='100%'/>
                        <img src={logo} alt="react Logo" width='100%'/>
                        <img src={logo} alt="react Logo" width='100%'/>
                    </Box>
                }
            </Box>
        </div>
    )
}

export default About;