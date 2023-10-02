import React, { ReactNode, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppContext } from '../../config/Context';
import handleAccessRole from '../../Helper/Handler/handleAccessRole';
// import useAccessRole from '../../Helper/Hooks/useAccessRole';
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
    const { state } = useContext(AppContext);
    const navigate = useNavigate();
    const { header, sidebar, label } = route;
    const { handleGetProfile, handleGetConfigAuth, checkAccessRole } =
        AuthLayoutHandler();
    React.useEffect(() => {
        handleGetProfile();
        handleGetConfigAuth();
    }, []);
    React.useEffect(() => {
        if (state?.profile?.typeUser?.length > 0) {
            handleAccessRole(state?.profile?.typeUser, location.pathname);
        }
    }, [state]);
    React.useEffect(() => {
        if (!checkAccessRole) {
            navigate('/checkin');
        }
    }, [checkAccessRole]);
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
