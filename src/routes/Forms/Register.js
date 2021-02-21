import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import {Formik} from "formik";
import {InputField, toErrorMap} from "./FormComponents";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const Register= (props) => {
  const [complete, setComplete] = useState(false);

  async function asyncValidate(values, setErrors) {
    console.log("validating...");
    var config = {
      method: 'post',
      url: 'http://localhost:4000/register',
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
        initialValues={{email: '', username: '', name: '', password: '', confirmPassword: ''}}
        onSubmit={async (values, {setErrors}) => {
          const errors = await asyncValidate(values);
          setErrors(toErrorMap(errors));
          if (!errors) {
            setComplete(true);
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
                <InputField name='name'
                            placeholder='name'
                            error={errors.name}
                            onChange={handleChange}
                            label='Organization Name' />
              </Box>
              <Box mt={4}>
                <InputField name='password'
                            placeholder='password'
                            error={errors.password}
                            onChange={handleChange}
                            label='Password'
                            type='password' />
              </Box>
              <Box mt={4}>
                <InputField name='confirmPassword'
                            placeholder='confirm password'
                            error={errors.confirmPassword}
                            onChange={handleChange}
                            label='Confirm Password'
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
                Register
              </Button>
            </form>
        )}
      </Formik>
      {complete ? <Redirect push to="/registered" /> : null }
      </Box> 
  )
}

export default Register;