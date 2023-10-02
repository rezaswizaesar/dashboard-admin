import { Outlet } from 'react-router-dom';
import { GuestLayoutProps } from '../../../types/Layout/Guest';
import Header from '../../Header';
import Loading from '../../Loading';
import Sidebar from '../../Sidebar';
import useGuestLayoutHandler from './Handler';

const GuestLayout: React.FC<GuestLayoutProps> = (route) => {
    const { header, sidebar } = route;
    const { isLoading } = useGuestLayoutHandler();

    if (isLoading) {
        return <Loading />;
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
