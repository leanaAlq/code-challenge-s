import React from "react";
import { CancelToken, http } from "./api/httpHandler";
interface IHOTEL {
	name: string;
	price: string;
	city: string;
	available_on: string;
}
export class HotelsService {
	getHotels(cancel?: any, cancelations?: any[]): Promise<any> {
		return http.instance
			.get("http://www.mocky.io/v2/5eb8fcb12d0000d088357f2a", {
				cancelToken: new CancelToken((c: any) => {
					cancel = c;
					if (cancelations) {
						cancelations.push(cancel);
					}
				}),
			})
			.then((res: any) => {
				let data = res.data.replace(/\s/g, "");
				data = data.replace("},]", "}]");
				return JSON.parse(data);
			})
			.catch(() => {
				console.log("err");

				return [];
			});
	}
}
