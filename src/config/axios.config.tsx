import axios from "axios";

// http:/localhost:5500/
const  axiosInstance = axios.create({
	// cra => process.env.REACT_APP_URL
	// vite => import.meta.env.VITE_API_URL

	baseURL: import.meta.env.VITE_API_URL,
	timeout: 50000,
	timeoutErrorMessage: "Server TimeOut",
	headers: {
		"Content-Type": "application/json",
	}

})

axiosInstance.interceptors.response.use(
	(response) => {
		console.log("Success Interceptor");
		return response.data;
	},
	(exception) => {
		console.log("Error Interceptor");
		throw exception.response;
	}
)

export default axiosInstance