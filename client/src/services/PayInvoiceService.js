// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
const authAxios = async () => {
	return axios.create({
		baseURL: '/api/pay-invoice',
		headers: {
			authorization: `Bearer ${localStorage.usertoken}`,
			authorization2: `Bearer ${localStorage.admintoken}`
		}
	})
}

async function s_({ card, invoiceNumber }) {
	try {
		const authAxios = await this.authAxios()

		return (await authAxios.post('/', { card, invoiceNumber })).data
	}
	catch(e) {
		return {
			executed: false,
			status: false,
			error: e
		}
	}
}


export default {
	authAxios,
	s_
}
