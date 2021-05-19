import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AWSbaseURL from '../constants';

const facebookLogin = (accesstoken) => {
    // var history = useHistory();
    console.log(accesstoken);
    axios
        .post(`${AWSbaseURL}/api/magicauth/convert-token`, {
            token: accesstoken,
            backend: 'google-oauth2',
            grant_type: 'convert_token',
            client_id: 'Dt6C27y0B0n5zKPBRXB9KYjKuwvDDDbLCDxguTkp',
            client_secret:
                'zr7lSH5EDIVaEcoXEzIT7bf62NHn4J1XMiKI51OjrFxHq0Oh1cxcUbeSk7o7RyHkSqyCMpPF4cGbdT1tlmkqsc8bqfm8ERA4LFxzCwxPiILiHcDcCRJeYZH70BTX9S7Y',
        })
        .then((res) => {
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('refresh_token', res.data.refresh_token);

            // history.push('/');
            // window.location.href = '/';
            alert("Logged In!! Please Refersh the page :)")
        });

    // window.location.href = '/'
};

export default facebookLogin;