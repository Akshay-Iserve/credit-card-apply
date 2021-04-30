import axios from 'axios';

export const crm = axios.create({
    baseURL: 'https://iservecrm.iservefinancial.com/'
});

export const site = axios.create({
    baseURL: 'https://www.iservefinancial.com/'
});