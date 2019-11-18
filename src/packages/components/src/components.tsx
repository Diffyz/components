import React from 'react';

import { Buttons } from './buttons/buttons';
import { useStore } from '../../../store/use-store';
import { Announcement } from './../../announcement';

export const Components = () => {
	const store = useStore();

	const handleCollapseClick = () => {
		store.announcement.toggleAnnouncement();
	};

	return (
		<>
			<Buttons.Primary onClick={handleCollapseClick}>Collapse</Buttons.Primary>
			<Announcement store={store.announcement} />
		</>
	);
};
