import config from "./config.js"
export function request(url,data,method="GET"){
	
	return new Promise((resolve, reject) => {
		uni.request({
			//http://localhost:3001/index
			url:config.host + config.basePath + url, 
			data,
			method,
			success:(response) => {
				resolve(response.data)
			},
			fail: (error) => {
				reject(error)
			}
		})
	});
}