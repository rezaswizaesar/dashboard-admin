import { Link, Outlet } from 'react-router-dom';
import { RouteType } from '../types/RouteList.type';
import LoginPage from '../pages/Guest/Login/index';
import CSTransactionPage from '../pages/Auth/CSTransaction';
import CheckinPage from '../pages/Auth/Checkin';
import PartnershipPage from '../pages/Auth/Master/Partnership';

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
        component: <CSTransactionPage />,
        path: '/transaction',
        routeType: 'auth',
        role: ['Admin'],
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
        component: <CheckinPage />,
        path: '/',
        routeType: 'auth',
        role: ['Admin', 'CS'],
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
        role: ['Admin', 'CS'],
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
                role: ['Admin'],
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
                role: ['Admin', 'CS'],
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
