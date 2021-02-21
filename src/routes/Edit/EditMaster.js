import React, { useEffect, useState } from 'react';
import {getOrgInfo} from '../../utils/getOrgInfo';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import OrgBar from '../OrgSpecific/OrgBar';
import {InputField, ImageField} from '../Forms/FormComponents';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import {Formik, Field} from 'formik';

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


const EditMaster = (props) => {
    const classes = useStyles();

    const updateInBackend = async (values) => {
        var config = {
            method: 'post',
            url: `http://localhost:4000/org/${props.name}/edit`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : values
          };
          
          console.log(values);
        
          try {
            const response = await axios(config);
            const result = response.data;
            return result;
          } catch(error) {
            console.log("error: ", error)
          }
    }

    return (
        <Formik
        initialValues={async () => await getOrgInfo(props.name).data}
        onSubmit={async (values, {setErrors}) => {
          const result = await updateInBackend(values);
          console.log(result);
        }}
      >
        {({ errors, isSubmitting, values, handleSubmit, handleChange }) => (
        <Box>
            <form onSubmit={handleSubmit}>
            <OrgBar name={props.name}/>
            <Box display='flex' className={classes.grid}>
                <Box className={classes.paper}>
                    <Field 
                        name='description.text'
                        placeholder='description'
                        component='textarea'
                        type='text'
                        onChange={handleChange}
                    />
                </Box>
                <Box className={classes.paper}>
                    <ImageField name='description.images.1' label='Chose Feature Image' width='100%'/>
                    <ImageField name='description.images.2' label='Chose Feature Image' width='100%'/>
                    <ImageField name='description.images.3' label='Chose Feature Image' width='100%'/>
                </Box>
            </Box>

              <Button mt={4}
                type='submit'
                isLoading={isSubmitting}
                style={{
                  backgroundColor: "#4359e6", 
                  margin: '60px',
                  width: '60%',
                  color: "#ffffff"
                }}>
                Save
              </Button>
            </form>
            </Box>
        )}
      </Formik>

    )
}

export default EditMaster;