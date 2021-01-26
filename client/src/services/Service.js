// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
async function authAxios() {
	return axios.create({
		baseURL: '/api/',
		headers: {
			authorization: `Bearer ${localStorage.usertoken}`,
			authorization2: `Bearer ${localStorage.admintoken}`
		}
	})
}


/******************* [URL + PORT] *******************/
async function getSocketBaseUrl() {
	const authAxios = await this.authAxios()

	return (await authAxios.get('/get-socket-base-url')).data
}


// [EXPORT] //
export default {
	authAxios,
	getSocketBaseUrl
}