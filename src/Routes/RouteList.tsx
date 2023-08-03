import { Outlet } from 'react-router-dom';
import Checkin from '../Pages/Auth/Checkin';
import LoginPage from '../Pages/Guest/Login/index';
import { RouteType } from './RouteList.type';

const Routelist: RouteType[] = [
    {
        label: '',
        icon: null,
        sidebar: false,
        header: false,
        component: <LoginPage />,
        path: '/',
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
        label: 'Check-in',
        icon: null,
        sidebar: true,
        header: true,
        component: <Checkin />,
        path: '/checkin',
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
        label: '',
        icon: null,
        sidebar: false,
        header: false,
        component: <LoginPage />,
        path: '/',
        routeType: 'guest',
        role: [],
        layout: (
            <>
                <Outlet></Outlet>
            </>
        ),
        children: [
            // { label: '',
            // icon: null,
            //     sidebar: false,
            //     header: false,
            //     component: <LoginPage />,
            //     path: '/',
            //     routeType: 'guest',
            //     layout: (
            //         <>
            //             <Outlet></Outlet>
            //         </>
            //     )
            // }
        ]
    }
];
export default Routelist;
