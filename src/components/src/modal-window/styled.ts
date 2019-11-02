import styled from 'styled-components';
import { IconStyled } from '../icon';

const HEIGHT_HEADER = 50;
const HEIGHT_FOOTER = 72;

const Container = styled.div`
	right: 0;
	top: 0;
	position: absolute;
	width: 500px;
	min-height: 100%;
	overflow: hidden;
	border-left: 1px solid;
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
	font-weight: 700;
	padding: 15px 25px;
	height: ${HEIGHT_HEADER}px;
	background: #8ac858;
	${IconStyled.Icon} {
		width: 10px;
		height: 10px;
	}
`;

const Body = styled.main`
	position: fixed;
	overflow-y: auto;
	top: ${HEIGHT_HEADER}px;
	bottom: ${HEIGHT_FOOTER}px;
`;

const Footer = styled.footer`
	height: ${HEIGHT_FOOTER};
	padding: 20px 25px;
	background: white;
	position: fixed;
	width: 100%;
	bottom: 0px;
	border-top: 1px solid black;
`;

export const Styled = {
	Container,
	Header,
	Body,
	Footer,
};
