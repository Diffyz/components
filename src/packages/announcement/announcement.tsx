import { observer } from 'mobx-react';
import React from 'react';
import { ModalWindow } from '../components/src/modal-window';

import { AnnouncementStoreInstance } from './store/announcement-store';
import { Null } from '../components';

interface AnnouncementProps {
	store: AnnouncementStoreInstance;
}

export const Announcement = observer((props: AnnouncementProps) => {
	const handleClose = () => props.store.toggleAnnouncement();
	return props.store.isOpened !== null ? (
		<ModalWindow
			title={'Announcements'}
			isOpen={props.store.isOpened}
			close={handleClose}
		>
			<Null />
		</ModalWindow>
	) : (
		<Null />
	);
});
