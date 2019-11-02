import React, { PropsWithChildren } from 'react';

import { Styled } from './styled';

export const Primary = (props: PropsWithChildren<{}>) => {
	return <Styled.Primary>{props.children}</Styled.Primary>;
};
