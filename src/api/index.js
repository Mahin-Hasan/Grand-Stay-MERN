import axios from "axios";
import { clearCookie } from "./auth";


const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

// implementing interceptor and checking for unauthorized responses.
axiosSecure.interceptors.response.use(response=> response,
    async error=>{
        console.log('Error tracked in interceptor', error.response)
        if(
            error.response &&
            (error.response.status === 401 || error.response.status === 403)
        ){
            await clearCookie()// logging out USer
            window.location.replace('/login')//as it is a js file so useLocation hook will not work
        }
        return Promise.reject(error) // this line retures the error which will show in catch block used in login and signup
    }
)// need to return response explicitely or else called axiosSecure will not function properly


export default axiosSecure;