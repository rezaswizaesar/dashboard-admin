import { Outlet, useNavigate } from 'react-router-dom';
import { GuestLayoutProps } from '../../../types/Layout/Guest';
import { useContext } from 'react';
import { AppContext } from '../../../config/Context';
import Header from '../../Header';
import Sidebar from '../../Sidebar';

const GuestLayout: React.FC<GuestLayoutProps> = (route) => {
    const { header, sidebar } = route;
    const navigate = useNavigate();
    const { state } = useContext(AppContext);

    if (state?.authenticated) {
        navigate('/login');
    }
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
