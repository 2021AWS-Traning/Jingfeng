import axios from "axios";

const instance = axios.create({
    baseURL: 'http:// host.docker.internal:2525'
});

instance.get('/users', (data) => {
    console.log(data);
});