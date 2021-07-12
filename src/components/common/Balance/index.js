import React from "react";
import styled from 'styled-components';

const SessionHeader = styled.div(({ theme }) => ({
	display: "flex",
	backgroundColor: '#ff6f23',
	color: 'white',
	height: '56px',
	fontSize: '17px',
	fontWeight: 500,
	justifyContent: 'center',
	alignItems: 'center',
	width: '375px'
}));


const Balance = ({ title }) => {
	return (
			<SessionHeader>
				{title}
			</SessionHeader>
	);
};

export default Balance