export const API_BASE =
	process.env.REACT_APP_API_BASE || 'http://localhost:7171/local/api/v1';

export const URLs = {
	SIGN_IN: `${API_BASE}/auth/login`,
	REGISTER: `${API_BASE}/auth/register`,
};
