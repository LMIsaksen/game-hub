import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6bf101064752481cb85a426e0b709226'
    }
})