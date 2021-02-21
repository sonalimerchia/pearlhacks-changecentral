import React, { useEffect, useState } from 'react';
import {getOrgInfo} from '../../utils/getOrgInfo';
import { makeStyles } from '@material-ui/core/styles';
import OrgBar from './OrgBar';
import {Redirect} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'rgb(31, 32, 36)'
    },
    paper: {
        backgroundColor: 'rgba(213, 234, 242, 0.3)',
        padding: '0.3rem',
        height: '100%'
    }
  }));

const Donate = (props) => {
    const classes = useStyles();
    const [info, setInfo] = useState();

    useEffect(async () => {
        const response = await getOrgInfo(props.name);
        const result = response.data;
        setInfo(result);
        if (result?.links.donation) {
            window.location.href = result.links.donation;
        }
    },[]);

    return (
        <div className={`Donate`, classes.root}>
            <OrgBar name={props.name}/>
            {info?.links.donation ? <h2>Redirecting...</h2>
                : <h2>No donation link available</h2>}
        </div>
    )
}

export default Donate;