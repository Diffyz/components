import { Instance, SnapshotIn, types } from 'mobx-state-tree';
import { AnnouncementStore } from '../packages/announcement';

export const AppStore = types
	.model('AppStore', {
		isModalWindowOpen: types.maybeNull(types.boolean),
		announcement: types.optional(AnnouncementStore, {
			isOpened: null,
		}),
	})
	.actions(self => ({
		setIsModalWindowOpen: (isModalWindowOpen: boolean) => {
			self.isModalWindowOpen = isModalWindowOpen;
		},
	}));

export interface AppStoreInstance extends Instance<typeof AppStore> {}
export interface AppStoreSnapshot extends SnapshotIn<typeof AppStore> {}
