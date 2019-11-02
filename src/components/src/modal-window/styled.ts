import styled from 'styled-components';

const Container = styled.div`
	right: 0;
	position: absolute;
	width: 500px;
	min-height: 100%;
	border-left: 1px solid;
`;

const Header = styled.header`
	height: 50px;
	background: #8ac858;
`;

const Body = styled.main`
	bottom: 50px;
`;

const Footer = styled.footer`
	padding: 20px 25px;
	background: white;
	position: sticky;
	bottom: 0px;
	border-top: 1px solid black;
`;

export const Styled = {
	Container,
	Header,
	Body,
	Footer,
};
