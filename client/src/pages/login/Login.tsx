import React from 'react';
import { TextField, Button, Grid, Paper, Box, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  userName: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
   defaultValues: {
    userName: "shashi",
    password: "tol1992"
   }
  });
  const onSubmit = (data: IFormInput) => {
    console.log(data)
  };

  return (
    // <Grid container justifyContent="center" alignContent="center">
    //   <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ padding: '2rem' }} style={{width: '80%'}}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <Box>Welcome Back</Box>
                <Typography>Please enter your details</Typography>
                <TextField
                  label="Username"
                  variant="outlined"
                  {...register('userName', { required: true, maxLength: 20 })}
                  error={!!errors.userName}
                  helperText={errors.userName?.message as string}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  {...register('password', { required: true, minLength: 6 })}
                  error={!!errors.password}
                  helperText={errors.password?.message as string }
                />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" type="submit">
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
    //   </Grid>
    // </Grid>
  );
};

export default Login;
