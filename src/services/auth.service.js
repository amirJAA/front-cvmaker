import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const AuthService = {
    signup: (username, email, password) => {
        return axios.post(API_URL + 'signup', {
            username,
            email,
            password
        });
    },

    login: (email, password) => {
        return axios.post(API_URL + 'signin', {
            email,
            password
        });
    }
};

export default AuthService;
