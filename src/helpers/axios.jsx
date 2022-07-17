import axios from "axios"
const token=window.localStorage.getItem("token");

const axiosInstance=axios.create({
    headers:{
        "Authorization":token ? `Bearer ${token}` :""
    }
})

export default axiosInstance;