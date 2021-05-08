import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import axiosInstance from './axios/login';
import { useHistory, withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from './axios/googlelogin';
import { useStateValue } from './StateProvider';
import axios from './axios';
import { actionTypes } from './reducer';
// import { useHistory } from "react-router-dom"



//Material
// import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const LContainer = styled.div`
    
    text-align: center;
    /* background-color: white; */
    padding:20px;
    border-radius: 10px;
    box-shadow: 1px -2px 46px 2px rgba(0,0,0,0.75);

    
`
const Cimg = styled.img`
    
    object-fit: contain;
    width:55%;
    margin-bottom: 40px;

`













function Login() {

    const [isLogin, setIsLogin] = useState(false);
    const [{ }, dispatch] = useStateValue();
    var history = useHistory();


    // useEffect(() => {
    if (localStorage.getItem('access_token')) {

        axios.get('user/me').then((result) => {
            console.log(result);

            dispatch({
                type: actionTypes.SET_USER,
                user: result.data[0],
            })
            // history.push('/');
            // setIsLogin(true);
            // window.location.reload(false);
            // window.location.reload();



        }).catch(err => console.log(err.message))
    }
    // }, [isLogin])






    const initialFormData = Object.freeze({
        email: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance
            .post(`api/magicauth/token`, {
                grant_type: 'password',
                username: formData.email,
                password: formData.password,
                client_id: 'Dt6C27y0B0n5zKPBRXB9KYjKuwvDDDbLCDxguTkp',
                client_secret:
                    'zr7lSH5EDIVaEcoXEzIT7bf62NHn4J1XMiKI51OjrFxHq0Oh1cxcUbeSk7o7RyHkSqyCMpPF4cGbdT1tlmkqsc8bqfm8ERA4LFxzCwxPiILiHcDcCRJeYZH70BTX9S7Y',
            })
            .then((res) => {
                console.log(res);
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);
                console.log(localStorage.getItem('access_token'));

                axios.get('user/me').then((result) => {
                    console.log(result);

                    dispatch({
                        type: actionTypes.SET_USER,
                        user: result.data[0],
                    })
                    history.push('/');
                    window.location.reload();

                }).catch(err => alert(err.message))




                // window.location.reload();
            }).catch(err => alert(err.message))
    };

    const responseFacebook = async (response) => {
        FacebookLogin(response.accessToken);
    };

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res, res.profileObj);
        // alert(
        //     `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );
        responseFacebook(res);

    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        // (
        //     `Failed to login. 😢`
        // );
    };



    const classes = useStyles();



    return (
        <LContainer>
            {/* <Button />
            <img width='70%' src="" alt="intro" /> */}

            <div className="login_container">
                {isLogin ? "Logout" : "login first"}

                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Cimg src="https://trello-attachments.s3.amazonaws.com/5f81c78bb4c7951c3be5060c/5fb1d3656e20326524242704/fd6debd661d28abc2d9fda3d18261af8/NLP_WATTSAPP.png" alt="" />
                    </div>

                </Container>
                <GoogleLogin
                    clientId='423744903736-2n1vqfvaqm4jti1vccikf10jcgrtbf1t.apps.googleusercontent.com'
                    buttonText="Login With Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{ marginTop: '100px' }}
                    isSignedIn={false}
                />

                {/* 
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleSubmit}
                            >
                                Sign In
					</Button>
                            
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
							</Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    */}


                {/* <Button type="submit" style={{ color: 'white', backgroundColor: 'green' }}>Sign in With Google</Button> */}
            </div>

        </LContainer >
    )
}

export default Login
