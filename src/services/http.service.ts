import axiosInstance from "../config/axios.config";

abstract class HttpService {
	private headers = {};
	private params = {};

	private getHeaders = (config: any) => {
		// updated auth code for login and logout
		if (config && config.Auth) {
			this.headers = {
				...this.headers,
				Authorization: `Bearer ${config.token}`,
			};
		}

		if (config && (config.file || config.files)) {
			this.headers = {
				...this.headers,
				"Content-Type": "multipart/form-data",
			};
		}

		if (config && config.params) {
			this.params = {
				...this.params,
				...config.params,
			};
		}
	};

	postRequest = async (
		url: string,
		data: any = {},
		config: any = null
	): Promise<any> => {
		try {
			this.getHeaders(config);
			const response = await axiosInstance.post(url, data, {
				headers: { ...this.headers },
			});
			return response;
		} catch (exception) {
			console.log("PostRequestException", exception);
			throw exception;
		}
	};

	getRequest = async (url: string, config: unknown = null): Promise<any> => {
		try {
			this.getHeaders(config);
			const response = await axiosInstance.get(url, {
				headers: { ...this.headers },
				params: { ...this.params },
			});
			return response;
		} catch (error) {
			console.log("GetRequestException", error);
			throw error;
		}
	};

	// putRequest = async(url: string, data: unknown = {}, config: unknown = null):Promise<any> => {
	// 	// complete the code
	// };

	// patchRequest = async(url: string, data: unknown = {}, config: unknown = null):Promise<any> => {
	// 	// complete the code
	// };

	// deleteRequest = async(url: string, config: unknown = null):Promise<any> => {
	// 	// complete the code
	// };
}

export default HttpService;
