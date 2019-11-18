import React from 'react';

import { Components } from './packages/components';
import { StoreProvider } from './store/use-store';

import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
	return (
		<StoreProvider>
			<Components />
		</StoreProvider>
	);
};
