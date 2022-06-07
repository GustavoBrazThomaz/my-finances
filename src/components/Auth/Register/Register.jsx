import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Alert, Avatar, Button, Grid, IconButton, InputAdornment, OutlinedInput, Paper, Snackbar, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function Register() {

    const [values, setValues] = React.useState({
        password: '',
        passwordConfirm: '',
        showPassword: false,
    });

    const [open, setOpen] = React.useState({
        errorMsg: false,
        successMsg: false,
        msg: ''
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

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen({
            errorMsg: !open.errorMsg,
            success: !open.successMsg
        });
    };

    const handleSubmit = () => {
        if (values.password === '') {
            setOpen({
                errorMsg: true,
                msg: 'A sua senha não pode ser vazia'
            })
        }
        if (values.passwordConfirm === '') {
            setOpen({
                errorMsg: true,
                msg: 'A sua senha não pode ser vazia'
            })
        }
        if (values.password !== values.passwordConfirm) {
            setOpen({
                errorMsg: true,
                msg: 'As senhas tem q ser iguais'
            })
        }
    }

    const paperStyle = { padding: 20, height: '550px', width: '300px', margin: '0 auto' }

    return (
        <Grid align="center">
            <Paper elevation={10} style={paperStyle}>
                <Avatar sx={{ bgcolor: '#c9a602', marginTop: '2rem' }}>$</Avatar>
                <Typography variant="h5">Cadastrar</Typography>

                <Typography align="start" style={{ marginTop: '2rem' }}>Usuário:</Typography>
                <TextField
                    color="primary"
                    required
                    id="filled-required"
                    fullWidth
                />

                <Typography align="start" style={{ marginTop: '1rem' }}>Escolha a sua senha:</Typography>
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
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />

                <Typography align="start" style={{ marginTop: '1rem' }}>Digite novamente a sua senha:</Typography>
                <OutlinedInput
                    id="outlined-adornment-password"

                    required
                    fullWidth
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.passwordConfirm}
                    onChange={handleChange('passwordConfirm')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />

                <Button type="submit" fullWidth variant="contained" onClick={handleSubmit}
                    style={{ margin: '1.5rem 0', color: '#fff' }}
                >Cadastra-se</Button>
                <Typography align='center'>Já possui uma conta? <Link to="/">Entrar</Link></Typography>

            </Paper>

            <Snackbar open={open.errorMsg} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>
                    {open.msg}
                </Alert>
            </Snackbar>

            <Snackbar open={open.successMsg} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                    {open.msg}
                </Alert>
            </Snackbar>
        </Grid>
    )
}

export default Register