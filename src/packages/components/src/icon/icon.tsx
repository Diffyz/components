import React, { HTMLProps } from 'react';

import { Null } from '../null-component';
import { IconType } from './icon-type';
import { ReactComponent as ModalWindowCross } from './svg/modal-window-cross.svg';

import { Styled } from './styled';

export interface IconProps extends HTMLProps<{}> {
	type: IconType;
}

const icons = {
	[IconType.ModalWindowCross]: () => (
		<Styled.Icon>
			<ModalWindowCross />
		</Styled.Icon>
	),
	[IconType.Empty]: () => <Null />,
};

const Icon = (props: IconProps) => {
	const IconByType = icons[props.type];
	return <IconByType />;
};

export { Icon };
