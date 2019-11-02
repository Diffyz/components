import React from 'react';

import { IconType } from './icon-type';
import { ReactComponent as ModalWindowCross } from './svg/modal-window-cross.svg';

import { Styled } from './styled';

export interface IconProps {
	type: IconType;
}

const icons = {
	[IconType.ModalWindowCross]: () => <ModalWindowCross />,
};

export const Icon = (props: IconProps) => {
	const IconByType = icons[props.type];
	return (
		<Styled.Icon>
			<IconByType />
		</Styled.Icon>
	);
};
