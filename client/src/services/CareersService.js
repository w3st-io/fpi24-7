// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
const authAxios = async () => {
	return axios.create({
		baseURL: '/api/careers',
		headers: {
			authorization: `Bearer ${localStorage.usertoken}`,
			authorization2: `Bearer ${localStorage.admintoken}`
		}
	})
}


async function s_apply(formData) {
	console.log(formData)
	try {
		const authAxios = await this.authAxios()

		return (
			await authAxios.post('/apply', { formData })
		).data
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			error: err
		}
	}
}


export default {
	authAxios,
	s_apply,
	
}
