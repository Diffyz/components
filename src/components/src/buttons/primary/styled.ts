import styled from 'styled-components';

const Primary = styled.button`
	height: 32px;
	min-width: 80px;
	background: #74ba3c;
	color: white;
	padding: 0px 14px;
	border-radius: 2px;
	outline: none;
	border-width: 0px;
	:hover {
		background: #65ad2b;
	}
	:focus {
		outline: 5px auto;
		outline-color: #69d413;
	}
`;

export const Styled = {
	Primary,
};
