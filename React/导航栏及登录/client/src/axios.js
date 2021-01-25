//axios拦截器
import axios from 'axios';

// axios.defaults.baseURL = "http://127.0.0.1:7001" 这样死活拿不到session，我也不知道为啥
axios.defaults.baseURL = "http://localhost:7001"
axios.defaults.withCredentials = true;


export default axios;