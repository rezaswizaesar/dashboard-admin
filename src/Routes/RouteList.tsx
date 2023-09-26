import { Link, Outlet } from 'react-router-dom';
import Checkin from '../Pages/Auth/Checkin';
import PartnershipPage from '../Pages/Auth/Master/Partnership';
import LoginPage from '../Pages/Guest/Login/index';
import { RouteType } from '../types/RouteList.type';
import CSTransaction from '../Pages/Auth/Transaction';

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
        label: <Link to="/transactions">CS Transaction</Link>,
        icon: null,
        sidebar: true,
        header: true,
        component: <CSTransaction />,
        path: '/transactions',
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
