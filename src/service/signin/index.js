import { http } from "../../utils";
import { URLs } from "../../constants";

export const SigninService = {
	async signin(data) {
		try {
			const resp = await http.post(URLs.SIGN_IN, data);
			return resp.data;
		} catch (error) {
			return Promise.reject({ message: error?.message || error });
		}
	},
};
