import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteLayout from './routes';
import { AppProvider } from './config/Context';

type IApp = {
    children?: ReactNode;
};
const App: React.FC<IApp> = () => {
    return (
        <AppProvider>
            <BrowserRouter>
                <RouteLayout />
            </BrowserRouter>
        </AppProvider>
    );
};

export default App;
