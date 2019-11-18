import React, { PropsWithChildren } from 'react';

import { Buttons } from '../buttons';
import { Icon, IconType } from '../icon';

import { Styled } from './styled';

interface ModalWindowProps {
	title: string;
	isOpen: boolean;
	close: () => void;
}

export const ModalWindow = (props: PropsWithChildren<ModalWindowProps>) => {
	return (
		<Styled.Container isOpen={props.isOpen}>
			<Styled.Header>
				{props.title}
				<div onClick={props.close}>
					<Icon type={IconType.ModalWindowCross} />
				</div>
			</Styled.Header>
			<Styled.Body>{props.children}</Styled.Body>
			<Styled.Footer>
				<Buttons.Primary onClick={props.close}>Cancel</Buttons.Primary>
			</Styled.Footer>
		</Styled.Container>
	);
};
