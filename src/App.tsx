import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteLayout from './Routes';
import { AppProvider } from './Store/Context/MyContext';
// import UserProvider from './Store/Context/AppContext';


type IApp = {
    children?: ReactNode;
};
const App: React.FC<IApp> = () => {
    return (
        // <UserProvider>
        //     <BrowserRouter>
        //         <RouteLayout />
        //     </BrowserRouter>
        // </UserProvider>
        <AppProvider>
            <BrowserRouter>
                <RouteLayout />
            </BrowserRouter>
        </AppProvider>
    );
};

export default App;
