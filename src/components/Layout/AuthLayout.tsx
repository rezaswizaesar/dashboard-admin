import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import AuthLayoutHandler from './AuthLayoutHandler';
import LayoutStyle from './Style';
interface AuthLayoutProps {
    sidebar: boolean;
    header: boolean;
    label: ReactNode;
    children: any;
}
const AuthLayout: React.FC<AuthLayoutProps> = (route) => {
    const { header, sidebar, label } = route;
    const { getConfigAuth, getProfile } = AuthLayoutHandler();
    React.useEffect(() => {
        getConfigAuth({
            url: '/auth/config?appName=Dashboard',
            token: true,
            method: 'GET'
        });
    }, []);
    React.useEffect(() => {
        getProfile({
            url: '/auth/me',
            method: 'GET',
            token: true
        });
    }, []);

    return (
        <LayoutStyle>
            {header && <Header label={label} />}
            <section className="section">
                {sidebar && <Sidebar />}
                <div className="section-page">
                    <Outlet></Outlet>
                </div>
            </section>
        </LayoutStyle>
    );
};
export default AuthLayout;
