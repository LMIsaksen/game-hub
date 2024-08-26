import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '60798195e0fe4155a5c784473ed559eb'
    }
})