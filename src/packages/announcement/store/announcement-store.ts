import { Instance, types } from 'mobx-state-tree';

export const AnnouncementStore = types
	.model('AnnouncementStore', {
		isOpened: types.maybeNull(types.boolean),
	})
	.actions(self => ({
		toggleAnnouncement: () => (self.isOpened = !self.isOpened),
	}));

export interface AnnouncementStoreInstance
	extends Instance<typeof AnnouncementStore> {}
