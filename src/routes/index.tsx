import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from '../components/Layout/Auth';
import GuestLayout from '../components/Layout/Guest';
import Routelist from './RouteList';

const RouteLayout: React.FC = () => {
    return (
        <Routes>
            {Routelist.map((route: any, key: number) => {
                return (
                    <Route
                        element={
                            route.routeType === 'guest' ? (
                                <GuestLayout {...route} />
                            ) : (
                                route.children.length < 1 && (
                                    <AuthLayout {...route} />
                                )
                            )
                        }
                        key={key}>
                        <Route element={route.layout}>
                            <Route
                                element={route.component}
                                path={route.path}></Route>
                        </Route>
                        {route.children.length > 0 &&
                            route.children.map((childroute: any, i: number) => {
                                return (
                                    <Route
                                        key={i}
                                        element={
                                            <AuthLayout {...childroute} />
                                        }>
                                        <Route
                                            element={childroute.component}
                                            path={childroute.path}></Route>
                                    </Route>
                                );
                            })}
                    </Route>
                );
            })}
            {/* redirect undefined/not found page to index (check-in page) */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
export default RouteLayout;
