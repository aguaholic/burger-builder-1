import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-481b6.firebaseio.com'
});

export default instance;