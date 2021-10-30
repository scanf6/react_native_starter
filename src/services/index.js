// This file contains the default Axios configuration

import axios from "axios";

export const spoonacularInstance = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes',
    params: {
        apiKey: '69020026736b4664ada6b901c5e888ec'
    }
});