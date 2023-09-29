import { Link, Outlet } from 'react-router-dom';
import CSTransaction from '../pages/Auth/CSTransaction';
import Checkin from '../pages/Auth/Checkin';
import PartnershipPage from '../pages/Auth/Master/Partnership';
import LoginPage from '../pages/Guest/Login/index';
import { RouteType } from '../types/RouteList.type';

const Routelist: RouteType[] = [
    {
        label: '',
        icon: null,
        sidebar: false,
        header: false,
        component: <LoginPage />,
        path: '/login',
        children: [],
        routeType: 'guest',
        role: [],
        layout: (
            <>
                <Outlet></Outlet>
            </>
        )
    },
    {
        label: <Link to="/transaction">CS Transaction</Link>,
        icon: null,
        sidebar: true,
        header: true,
        component: <CSTransaction />,
        path: '/transaction',
        routeType: 'auth',
        role: [],
        layout: (
            <>
                <Outlet></Outlet>
            </>
        ),
        children: []
    },
    {
        label: <Link to="/">Check-in</Link>,
        icon: null,
        sidebar: true,
        header: true,
        component: <Checkin />,
        path: '*',
        routeType: 'auth',
        role: [],
        layout: (
            <>
                <Outlet></Outlet>
            </>
        ),
        children: []
    },
    {
        label: 'Master',
        icon: null,
        sidebar: true,
        header: false,
        component: null,
        path: '/master',
        routeType: 'auth',
        role: [],
        layout: (
            <>
                <Outlet></Outlet>
            </>
        ),
        children: [
            {
                label: <Link to="/master/pos-management">POS Management</Link>,
                icon: null,
                sidebar: true,
                header: true,
                component: <div />,
                path: '/master/pos-management',
                routeType: 'auth',
                layout: (
                    <>
                        <Outlet></Outlet>
                    </>
                )
            },
            {
                label: <Link to="/master/partnership">Partnership</Link>,
                icon: null,
                sidebar: true,
                header: true,
                component: <PartnershipPage />,
                path: '/master/partnership',
                routeType: 'auth',
                layout: (
                    <>
                        <Outlet></Outlet>
                    </>
                )
            }
        ]
    }
];
export default Routelist;