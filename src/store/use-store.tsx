import React from 'react';
import makeInspectable from 'mobx-devtools-mst';
import { useLocalStore } from 'mobx-react';

import { AppStore, AppStoreInstance } from './app-store';

const storeContext = React.createContext<AppStoreInstance | null>(null);

interface StoreProviderProps {
	children: JSX.Element;
}

function createStore() {
	const store = AppStore.create();
	makeInspectable(store);
	return store;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
	const store = useLocalStore(createStore);
	return (
		<storeContext.Provider value={store}>{children}</storeContext.Provider>
	);
};

export const useStore = () => {
	const store = React.useContext(storeContext);
	if (!store) {
		// This is especially useful in TypeScript so you don't need to be checking for null all the time
		throw new Error('You have forgot to use StoreProvider, shame on you.');
	}
	return store;
};
