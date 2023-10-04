import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthLayoutProps } from '../../../types/Layout/Auth';
import Header from '../../Header';
import Loading from '../../Loading';
import Sidebar from '../../Sidebar';
import LayoutStyle from '../Style';
import useAuthLayoutHandler from './Handler';

const AuthLayout: FC<AuthLayoutProps> = (route) => {
    const { header, sidebar, label } = route;
    const { isLoading } = useAuthLayoutHandler();

    if (isLoading) {
        return <Loading />;
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
