import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.span`
	font-size: 13px;
	color: #d60348;
`;

const _LabelError = (props) => {
	return <Label>{props.label}</Label>;
};
_LabelError.propTypes = {
	label: PropTypes.string.isRequired,
};

export const LabelError = React.memo(_LabelError);
