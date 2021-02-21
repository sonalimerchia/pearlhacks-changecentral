import React from 'react'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import {Field} from 'formik';
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

export const InputField = (props) => {
  const style = {
    border:'none',
    borderBottom: '2px solid #808080',
    padding: '10px 10px',
    outline: 'none'
  }
  
  return (
    <FormControl style={{width:'60%', margin: "10px"}} isInvalid={!!props.error}>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <Field style={style} type={props.type} id={props.name} name={props.name} placeholder={props.placeholder} />
      {props.error ? <FormHelperText error={true}> {props.error} </FormHelperText> : null}
    </FormControl>
  );
}

export const toErrorMap = (errors) => {
  var errorMap = {}
  if (errors) {
    errorMap[errors.field] = errors.message;
  }
  return errorMap;
}


export const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )
  
  export const renderCheckbox = ({ input, label }) => (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value ? true : false}
            onChange={input.onChange}
          />
        }
        label={label}
      />
    </div>
  )
  
  export const radioButton = ({ input, ...rest }) => (
    <FormControl>
      <RadioGroup {...input} {...rest}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  )
  
  export const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
      return
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>
    }
  } 
  
  export const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
    <FormControl error={touched && error}>
      <InputLabel htmlFor="age-native-simple">Age</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: 'age',
          id: 'age-native-simple'
        }}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  )