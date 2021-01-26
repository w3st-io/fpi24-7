// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
const authAxios = async () => {
	return axios.create({
		baseURL: '/pages',
		headers: {
			authorization: `Bearer ${localStorage.usertoken}`,
			authorization2: `Bearer ${localStorage.admintoken}`
		}
	})
}


async function s_() {
	try {
		const authAxios = await this.authAxios()

		return (await authAxios.get('/')).data
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			error: err
		}
	}
}


async function s_about() {
	try {
		const authAxios = await this.authAxios()

		return (await authAxios.get('/about')).data
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			error: err
		}
	}
}


async function s_admin_functions_commentReports(sort, limit, page) {
	try {
		const authAxios = await this.authAxios()

		return (
			await authAxios.get(
				`/admin/functions/comment-reports/${sort}/${limit}/${page}`
			)
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


async function s_post(sort, limit, page) {
	try {
		const authAxios = await this.authAxios()

		return (await authAxios.get(`/post/${sort}/${limit}/${page}`)).data
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			error: err
		}
	}
}


async function s_comment_edit(comment_id) {
	try {
		const authAxios = await this.authAxios()

		const reqData = (await authAxios.get(`/comment/edit/${comment_id}`))

		return reqData.data
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `PageService: Error --> ${err}`
		}
	}
}



export default {
	authAxios,
	s_,
	s_about,
	s_admin_functions_commentReports,
	s_post,
	s_comment_edit,
}
