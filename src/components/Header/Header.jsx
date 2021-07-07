import React from "react";
import styled from 'styled-components';

const SessionHeader = styled.div(({ theme }) => ({
	display: "flex",
	margin: "0 0 16px 0",
	backgroundColor: '#ff6f23',
	color: 'white',
	height: '56px',
	fontSize: '17px',
	fontWeight: 500,
	justifyContent: 'center',
	alignItems: 'center'
}));


const Header = ({ title }) => {
	return (
		<SessionHeader>
			{title}
		</SessionHeader>
	);
};

export default Header