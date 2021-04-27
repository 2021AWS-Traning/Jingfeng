import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost'
});

instance.get('/users', (data) => {
    console.log(data);
});