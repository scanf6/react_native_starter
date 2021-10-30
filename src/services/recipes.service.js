import {spoonacularInstance as axios} from './index';

const api = {
    get: () => axios.get('/complexSearch'),
    show: (id) => axios.get(`/${id}`),
    delete: (id) => axios.delete(`/${id}`),
};

export default api;