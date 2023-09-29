import { Spin } from 'antd';
import { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthLayoutProps } from '../../../types/Layout/AuthLayout';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import LayoutStyle from '../Layout.Style';
import useLayoutHandler from './handler';
import Loading from '../../Loading';

const AuthLayout: FC<AuthLayoutProps> = (route) => {
    const { header, sidebar, label } = route;
    const { isLoading } = useLayoutHandler();

    if (isLoading) {
        return <Loading fullPage />;
    }

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
