import axios from 'axios';

import { API_URL } from '../../config';

const http = axios.create({
    baseURL: API_URL,
    timeout: 10000
});

export const services = {
    show: {
        getAll(p = 1, l = 30) {
            return http.get('/shows', { params: { p, l } }).then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        },
        getBySlug(slug) {
            return http.get(`/shows/${slug}`).then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        },
        parse(feed) {
            return http.post(`/feeds/parse`, { feed }).then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        }
    },
    podcast: {
        getBySlug(slug) {
            return http.get(`/podcasts/${slug}`).then(body => {
                return new Promise(resolve => resolve((body.data.payload)));
            });
        },
    }
};
