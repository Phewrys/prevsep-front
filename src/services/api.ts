import axios from 'axios'

const api = axios.create({
    baseURL: "https://prevsep.herokuapp.com/api/v1",
});

export default api;