import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import {Formik} from "formik";
import {InputField, toErrorMap} from "./FormComponents";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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
    
    console.log(values);
  
    try {
      const response = await axios(config);
      const result = response.data;
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
    <Formik
        initialValues={{email: '', username: '', password: ''}}
        onSubmit={async (values, {setErrors}) => {
          const errors = await asyncValidate(values);
          setErrors(toErrorMap(errors));
          if (!errors) {
            const org = await getOrg(values);
            setOrgName(org.name);
          }
        }}
      >
        {({ errors, isSubmitting, values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <InputField name='email'
                          placeholder='email'
                          type='email'
                          onChange={handleChange}
                          error={errors.email}
                          label='Email' />
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
      {orgName ? <Redirect push to={"/org/"+orgName} /> : null }
      </Box> 
  )
}

export default Login;