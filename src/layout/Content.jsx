import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentStyled = styled.div`
	min-height: 500px;
`;

export const Content = (props) => {
	return <ContentStyled>{props.children}</ContentStyled>;
};

Content.propTypes = {
	children: PropTypes.node.isRequired,
};
