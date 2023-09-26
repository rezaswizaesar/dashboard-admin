import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteLayout from './Routes';
import { AppProvider } from './Config/Context';

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
