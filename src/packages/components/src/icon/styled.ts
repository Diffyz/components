import styled from 'styled-components';

const Icon = styled.i`
	display: inline-block;
	font-style: normal;
	line-height: 0;
	height: 20px;
	width: 20px;
	text-align: center;
	position: relative;
	svg {
		max-width: 100%;
		display: inline-block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
	}
`;

export const Styled = {
	Icon,
};
