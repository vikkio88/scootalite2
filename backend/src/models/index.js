const axios = require('axios');
const API_URL = 'https://vikkio.co/scootalite-api/';
const service = axios.create({
    baseURL: API_URL
});

module.exports = {
    service
};
