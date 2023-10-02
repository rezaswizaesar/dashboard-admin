import { FC } from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import useAuthLayoutHandler from './Handler';
import Loading from '../../Loading';
import LayoutStyle from '../Style';
import { Outlet } from 'react-router-dom';
import { AuthLayoutProps } from '../../../types/Layout/Auth';

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
