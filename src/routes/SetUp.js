import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


  const initialData = {
      email: '',
      username: '',
      password: '', 
      name: '',
      description: {
        text: '', 
        images: [{}]
    },
    links: {
        donation: '',
        website: ''
    },
    contact: {
        email: '',
        phone: ''
    }, 
    volunteer: {
        roles: [{
            title: '', 
            description: ''
        }]
    },
    events: [{
        date: '', 
        description: '', 
        images: [{
            data: '', 
            contentType:''
        }]
    }], 
    activities: [{
        day: '', 
        description: '', 
        images: [{
            data: '', 
            contentType:''
        }]
    }]
    }

  const SetUp = () => {
    const classes = useStyles();

    const [data, setData] = useState(initialData)

    // useEffect(()=> {
    //   setData(initialData)
    // })

    const handleChange = (event) => {
      setData({...data, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
      var config = {
        method: 'post',
        url: 'http://localhost:4000/register',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    // const handleChangeLinks = (event) => {
    //   // console.log(event.target.name)
    //   let links = data.links
    //   links[event.target.name] = event.target.value
    //   data.links[event.target.name] = event.target.value
    //   setData({...data.links, [event.target.name]: event.target.value})
    // }
    

      return(
        <Container>
          <h1>Register your organization</h1>
          <form className={classes.root}>
            <div>
              <div>
                <h3>Basic Information</h3>
                <TextField 
                required 
                id="standard-required" 
                label="Organization Name" 
                name="name" 
                onChange={handleChange}/>
              <TextField 
              required 
              id="standard-required" label="Email"
              name="email" 
              onChange={handleChange}/>
              <TextField 
              required 
              id="standard-required" 
              label="Username" 
              name="username" 
              onChange={handleChange}/>
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                name="password" 
                onChange={handleChange}
              />
              <TextField
                id="standard-multiline-flexible"
                label="Description"
                multiline
                rowsMax={4}
                name="description" 
                onChange={handleChange}
              />
              </div>
              <div>
                <h3>Links and contact information</h3>
                <TextField id="standard-input" 
                label="Donation Link" 
                name="donation"
                onChange={handleChange}/>
                <TextField id="standard-input" label="Website" 
                name="website"
                onChange={handleChange}/>
                <TextField id="standard-input" label="Contact Email" 
                name="contactEmail"
                onChange={handleChange}/>
                <TextField id="standard-input" label="Contact Phone Number" 
                name="contactPhone"
                onChange={handleChange}/>
              </div>
              <div>
                <h3>Events and Activities information</h3>
                
                <div>
                  <h5>Event 1</h5>
                    <TextField 
                    id="date"
                    // label="Date"
                    type="date"
                    helperText="Date"
                    style={{marginTop:'1.5rem'}}
                    name="eventDate"
                    onChange={handleChange}
                    />
                    <TextField
                    id="standard-multiline-flexible"
                    label="Description"
                    multiline
                    rowsMax={4}
                    name="eventDescription"
                    onChange={handleChange}
                  />
                </div>
                  <h5>Event 2</h5>
                  <div>
                  <TextField 
                  id="date"
                  // label="Date"
                  type="date"
                  helperText="Date"
                  style={{marginTop:'1.5rem'}}
                  />
                  <TextField
                  id="standard-multiline-flexible"
                  label="Description"
                  multiline
                  rowsMax={4}
                />
                </div>
                <h5>Activity 1</h5>
                <div>
                <TextField 
                id="date"
                // label="Date"
                type="date"
                helperText="Date"
                style={{marginTop:'1.5rem'}}
                name="activityDate"
                onChange={handleChange}
                />
                <TextField
                id="standard-multiline-flexible"
                label="Description"
                multiline
                rowsMax={4}
                name="activityDescription"
                onChange={handleChange}
              />
                </div>
                <h5>Activity 2</h5>
                <div>
                <TextField 
                id="date"
                // label="Date"
                type="date"
                helperText="Date"
                style={{marginTop:'1.5rem'}}
                />
                <TextField
                id="standard-multiline-flexible"
                label="Description"
                multiline
                rowsMax={4}
              />
                </div>
              </div>
            </div>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Register
            </Button>
          </form>
        </Container>
          
      )
  }
  
  export default SetUp;