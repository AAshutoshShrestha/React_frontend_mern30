import axiosInstance from "../config/axios.config";

abstract class HttpService {
	private headers = {};
	private params = {};

	private getHeaders = (config: any) => {
		// auth
		if (config.auth) {
			this.headers = {
				...this.headers,
				Authorization: "Bearer ",
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

	// putRequest = async(url: string, data: unknown = {}, config: unknown = null):Promise<any> => {};

	// patchRequest = async(url: string, data: unknown = {}, config: unknown = null):Promise<any> => {};

	// deleteRequest = async(url: string, config: unknown = null):Promise<any> => {};
}

export default HttpService;
