import React from "react";
import { CancelToken, http } from "./api/httpHandler";

export class HotelsService {
	getHotels(cancel?: any, cancelations?: any[]): Promise<any> {
		return http.instance
			.get("http://www.mocky.io/v2/5eb8fcb12d0000d088357f2a", {
				cancelToken: new CancelToken((c) => {
					cancel = c;
					if (cancelations) {
						cancelations.push(cancel);
					}
				}),
			})
			.then((res) => {
				console.log("res", res);
				return res;
			});
	}
}
