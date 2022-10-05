import React, {  } from 'react';
import ReactDOM from 'react-dom/client';

import { Root } from './root';
import { getStore } from './store';

const {store, history} = getStore();

const root = ReactDOM.createRoot(
    document.getElementById('react-app') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Root store={store} history={history}></Root>
    </React.StrictMode>
);