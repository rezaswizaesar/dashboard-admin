import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteLayout from './Routes';
type IApp = {
    children?: ReactNode;
};
const App: React.FC<IApp> = () => {
    return (
        <BrowserRouter>
            <RouteLayout />
        </BrowserRouter>
    );
};

export default App;
