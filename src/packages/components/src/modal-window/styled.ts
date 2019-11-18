import styled, { keyframes } from 'styled-components';
import { IconStyled } from '../icon';

const HEIGHT_HEADER = 50;
const HEIGHT_FOOTER = 72;
const MODAL_WINDOW_WIDTH = 500;

const modalWindowOpen = keyframes`
  from {
	right: -${MODAL_WINDOW_WIDTH}px;
	opacity: 0;
  }

  to {
	opacity: 1;
	right: 0px
  }
`;

const modalWindowClose = keyframes`
  from {
	right: 0;
	opacity: 1;
  }

  to {
	opacity: 0;
	right: -${MODAL_WINDOW_WIDTH}px
  }
`;

const Container = styled.div<{ isOpen: boolean }>`
	animation: ${props => (props.isOpen ? modalWindowOpen : modalWindowClose)}
		0.4s linear;
	top: 0;
	right: ${props => (props.isOpen ? 0 : -MODAL_WINDOW_WIDTH)}px;
	position: fixed;
	width: ${MODAL_WINDOW_WIDTH}px;
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
		cursor: pointer;
		width: 10px;
		height: 10px;
	}
`;

const Body = styled.main`
	width: ${MODAL_WINDOW_WIDTH}px;
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
