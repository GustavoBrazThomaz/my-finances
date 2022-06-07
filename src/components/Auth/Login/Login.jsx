import React from 'react'
import { Typography, TextField, InputAdornment, OutlinedInput, IconButton, Button, Grid, Paper, Avatar } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { Link, useNavigate } from 'react-router-dom';

function Login() {

    let navigate = useNavigate()

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmitLogin = () => {
        navigate('/dashboard')
    }

    const paperStyle = { padding: 20, height: '550px', width: '300px', margin: '20px auto' }


    return (
        <div>
        <Grid align="center">
            <Paper elevation={10} style={paperStyle}>
                <Avatar sx={{ bgcolor: '#c9a602', marginTop: '2rem' }}>$</Avatar>
                <Typography variant="h5">Login</Typography>

                <Typography align="start" style={{ marginTop: '3rem' }}>Login</Typography>
                <TextField
                    color="primary"
                    required
                    id="filled-required"
                    fullWidth
                />

                <Typography align="start" style={{ marginTop: '2rem' }}>Senha</Typography>
                <OutlinedInput
                    id="outlined-adornment-password"
                    required
                    fullWidth
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end">
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />

                <Button type="submit" fullWidth variant="contained"
                    style={{ margin: '1.5rem 0', color: '#fff' }}
                    onClick={handleSubmitLogin}
                >Login</Button>
                <Typography align='center'>Não possui uma conta? <Link to="/Register">Cadastra-se</Link></Typography>

            </Paper>
        </Grid>
            
        </div>
    )
}

export default Login