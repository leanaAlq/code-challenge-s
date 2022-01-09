import axios from "axios";
import * as qs from "qs";
export const CancelToken = axios.CancelToken;
class HttpHandler {
	public instance = axios.create({
		paramsSerializer(params: any) {
			return qs.stringify(params, { indices: false });
		},
		timeout: 600000,
	});
	public constructor() {
	
		

		this.instance.interceptors.request.use(
			(config: any) => {
				const originalRequest = config;
				originalRequest.headers["Accept-Language"] = "ar";
				return Promise.resolve(originalRequest);
			},
			(err: any) => {
				return Promise.reject(err);
			}
		);

		
	}

}

export default HttpHandler;
export const http = new HttpHandler();
