import faker from 'faker';

import { AnnouncementStore } from './announcement-store';

describe('AnnouncementStore', () => {
	it('should have closed announcement slider initially', () => {
		const store = AnnouncementStore.create({
			isOpened: false,
			url: faker.random.word(),
			announcements: [],
		});

		expect(store.isOpened).toBeFalsy();
	});

	it('should have opened announcement slider if it was opened', () => {
		const store = AnnouncementStore.create({
			isOpened: false,
			url: faker.random.word(),
			announcements: [],
		});

		store.openAnnouncementSlider();

		expect(store.isOpened).toBeTruthy();
	});

	it('should have closed announcement slider if it was closed', () => {
		const store = AnnouncementStore.create({
			isOpened: false,
			url: faker.random.word(),
			announcements: [],
		});

		store.openAnnouncementSlider();
		store.closeAnnouncementSlider();

		expect(store.isOpened).toBeFalsy();
	});
});
