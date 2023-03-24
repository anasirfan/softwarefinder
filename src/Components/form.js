import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import {
    FormControlLabel,
    TextField,
    Checkbox,
    Button,
  } from '@material-ui/core';
  const useStyles = makeStyles((theme) => ({

    inputsContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      marginBottom: theme.spacing(2),
    },
    submitButton: {
      marginTop: theme.spacing(3),
      backgroundColor: theme.palette.secondary.main,
      color: '#fff',
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  }));
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   const formData = new FormData(event.target);
  //   const data = {};
  
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  //   console.log(data);
  //   const response = await fetch('/api/contact', {
  //     method: 'POST',
  //     body: data,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  
  //   if (response.ok) {
  //     // Handle successful submission
  //   } else {
  //     // Handle error
  //   }
  // };

  const Form = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);
    const classes = useStyles();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData(event.target);
      const data = {};
  
      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }
  
      console.log(data);
  
      const response = await fetch('/api/form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        setFormSubmitted(true);
        setFormError(false);
      } else {
        setFormSubmitted(false);
        setFormError(true);
      }
    };
  
    return (
      <div>
   
        <form onSubmit={handleSubmit}>
        {formSubmitted && <p>Form submitted successfully!</p>}
    {formError && <p>Error submitting form. Please try again later.</p>}
          <div className='flex flex-col space-y-3 -mr-5 w-full'>
            <div item xs={12} sm={6}>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
              />
            </div>
            <div item xs={12} sm={6}>
              <TextField
                id="phone"
                name="phone"
                label="Phone"
                variant="outlined"
                fullWidth
              />
            </div>
            <div item xs={12} sm={6}>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </div>
            <div item xs={12} sm={6}>
              <TextField
                id="message"
                name="message"
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </div>
            <div item xs={12}>
              <FormControlLabel
                control={<Checkbox name="subscribe" color="primary" />}
                label="Get our best software advice through SMS"
                name="subscribe"
              />
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.submitButton}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  };
  
  export default Form;
  