import React from 'react';

import { Buttons } from './buttons/buttons';
import { ModalWindow } from './modal-window';

export const Components = () => {
	const [isModalWindowOpen, setIsModalWindowOpen] = React.useState(false);

	const handleCollapseClick = () => {
		setIsModalWindowOpen(!isModalWindowOpen);
	};
	return (
		<>
			<Buttons.Primary onClick={handleCollapseClick}>Collapse</Buttons.Primary>
			<ModalWindow isOpen={isModalWindowOpen} />
		</>
	);
};
