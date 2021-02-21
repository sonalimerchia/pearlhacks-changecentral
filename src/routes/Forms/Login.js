import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import {Formik} from "formik";
import {InputField, toErrorMap} from "./FormComponents";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {getOrgInfo} from '../../utils/getOrgInfo';
import { COOKIE_NAME } from '../../constants';

const Login = (props) => {
  const [orgName, setOrgName] = useState("");

  async function asyncValidate(values, setErrors) {
    console.log("validating...");
    var config = {
      method: 'post',
      url: 'http://localhost:4000/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : values
    };
  
    try {
      const response = await axios(config, {withCredentials: true});
      const result = response.data;
      console.log("response: ", response);
      console.log("result: ", result);
      if (result.field) {
        return result;
      }
    } catch(error) {
      console.log("error: ", error)
    }
  }

  return (
    <Box mt={10}>
      {orgName ? <Redirect push to={"/edit/"+orgName} /> : null }
    <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={async (values, {setErrors}) => {
          const errors = await asyncValidate(values);
          setErrors(toErrorMap(errors));
          if (!errors) {
            var config = {
              method: 'post',
              url: 'http://localhost:4000/login',
              headers: { 
                'Content-Type': 'application/json', 
              },
              data : values
            };
            const response = await axios(config);
            const org = response.data;
            setOrgName(org.name);
          }
        }}
      >
        {({ errors, isSubmitting, values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <Box mt={4}>
                <InputField name='username'
                            placeholder='username'
                            onChange={handleChange}
                            error={errors.username}
                            label='Username' />
              </Box>
              <Box mt={4}>
                <InputField name='password'
                            placeholder='password'
                            error={errors.password}
                            onChange={handleChange}
                            label='Password'
                            type='password' />
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
                Log In
              </Button>
            </form>
        )}
      </Formik>
      </Box> 
  )
}

export default Login;