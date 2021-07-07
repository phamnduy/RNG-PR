import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(
	async (config) => {
		config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export const http = instance;
