import { http } from '../../utils';
import { URLs } from '../../constants';

export const RegisterService = {
	async register(data) {
		try {
			const resp = await http.post(URLs.REGISTER, data);
			return resp.data;
		} catch (error) {
			return Promise.reject({ message: error?.message || error });
		}
	},
};
