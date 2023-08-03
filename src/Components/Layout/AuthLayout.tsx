import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import AuthLayoutHandler from './AuthLayoutHandler';
import LayoutStyle from './LayoutStyle';
interface AuthLayoutProps {
    sidebar: boolean;
    header: boolean;
    label: string | null;
}
const AuthLayout: React.FC<AuthLayoutProps> = (route) => {
    const { header, sidebar, label } = route;
    const { getConfigAuth } = AuthLayoutHandler();
    React.useEffect(() => {
        getConfigAuth({
            url: '/auth/config',
            token: true,
            method: 'GET'
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
