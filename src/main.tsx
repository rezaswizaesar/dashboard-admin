// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//     <React.Fragment>
//         <App />
//     </React.Fragment>
// );

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // The main component of the application.
import './index.css';
import { setupWorker } from 'msw';
import { handlers } from './Mock/MockHandler';

// The root element where React will be mounted.
const root = createRoot(document.getElementById('root') as HTMLElement);
// if (import.meta.env.MODE === 'development') {
if (import.meta.env.VITE_MSW === 'true') {
    // digunakan di file unit test jika terjadi error
    setupWorker(...handlers).start();
    // When development, setup the MSW.
    // When development, setup the MSW.
    // import the worker (under the browser.ts file)
    import('./Mock/MockBrowser')
        .then(({ worker }) => {
            // Start the worker.
            worker.start();
        })
        .then(() => {
            // Render the application.
            root.render(
                <StrictMode>
                    <App />
                </StrictMode>
            );
        });
} else {
    // Render the application in production without the MSW.
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}
