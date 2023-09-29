import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
interface GuestLayoutProps {
    sidebar: boolean;
    header: boolean;
}
const GuestLayout: React.FC<GuestLayoutProps> = (route) => {
    const { header, sidebar } = route;
    return (
        <div>
            {header && <Header label={''} />}
            <div>
                {sidebar && <Sidebar />}
                <Outlet></Outlet>
            </div>
        </div>
    );
};
export default GuestLayout;
