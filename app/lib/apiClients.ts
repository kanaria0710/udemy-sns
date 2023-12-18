import axios from 'axios';

const apiClients = axios.create({
    // baseURL: 'http://localhost:8080/api',
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClients;