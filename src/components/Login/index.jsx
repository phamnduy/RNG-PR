import React from "react";
import styled from 'styled-components';
import Header from '../Header/Header'
import LoginLogo from '../../assets/images/logo.png'
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import InputAdornment from "@material-ui/core/InputAdornment";
import Link from '@material-ui/core/Link'

const LoginContainer = styled.div(({ theme }) => ({
	display: "flex",
	flexDirection: 'column',
	width: '375px',
	minHeight: '100vh',

}))

const CustomLink =  styled(Link)(({ theme }) => ({
	cursor: 'context-menu',
    color: '#ff6f23 !important'
}))
const CustomButton =  styled.button(({ theme }) => ({
	background: '#ff6f23 !important',
    borderColor: '#ff6f23 !important',
    color: '#ffffff !important',
	width: '100%',
	height: '54px'
}))

const ButtonContainer = styled.div(() => ({
	position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    paddingLeft: '16px',
    paddingRight: '16px',
    background:' #FFF',
    minHeight: '84px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
	width: '414px',
    marginLeft: 'auto',
    marginRight: 'auto'
}))

const CustomImage = styled.img(() => ({
	width: '100%',
	maxWidth: '140px',
	height: 'auto',
	display: 'block',
	marginLeft: 'auto',
	marginRight: 'auto'
}))

const Login = ({ }) => {
	return (
		<LoginContainer>
			<Header title='WINLUCK'></Header>
			<CustomImage src={LoginLogo} alt="Dress Picture"></CustomImage>
			<TextField
				placeholder='Số điện thoại'
				type="search"
				variant="outlined"
				margin="normal"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							{/* <SearchIcon /> */}
						</InputAdornment>
					)
				}}
			/>
			<TextField
				placeholder='Mật khẩu'
				type="search"
				variant="outlined"
				margin="normal"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							{/* <SearchIcon /> */}
						</InputAdornment>
					)
				}}
			/>
			<Box display='flex' justifyContent='space-between'>
				<CustomLink>Tạo tài khoản</CustomLink>
				<CustomLink>Quên mật khẩu</CustomLink>
			</Box>
			<ButtonContainer>
				<CustomButton>Đăng nhập</CustomButton>
			</ButtonContainer>
		</LoginContainer>
	)
};

export default Login