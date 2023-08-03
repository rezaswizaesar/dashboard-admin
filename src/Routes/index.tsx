import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../Components/Layout/authLayout';
import GuestLayout from '../Components/Layout/GuestLayout';
import Routelist from './RouteList';
const RouteLayout: React.FC = () => {
    return (
        <Routes>
            {Routelist.map((route, key) => {
                return (
                    <Route
                        element={
                            route.routeType === 'guest' ? (
                                <GuestLayout {...route} />
                            ) : (
                                <AuthLayout {...route} />
                            )
                        }
                        key={key}>
                        <Route element={route.layout}>
                            <Route
                                element={route.component}
                                path={route.path}></Route>
                        </Route>
                    </Route>
                );
            })}
        </Routes>
    );
};
export default RouteLayout;
