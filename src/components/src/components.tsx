import React from 'react';

import { Buttons } from './buttons/buttons';
import { ModalWindow } from './modal-window';

export const Components = () => {
	const [isModalWindowOpen, setIsModalWindowOpen] = React.useState(true);

	const handleCollapseClick = () => {
		setIsModalWindowOpen(!isModalWindowOpen);
	};
	return (
		<>
			<Buttons.Primary onClick={handleCollapseClick}>Collapse</Buttons.Primary>
			<ModalWindow
				handleCancelClick={handleCollapseClick}
				isOpen={isModalWindowOpen}
			/>
		</>
	);
};
