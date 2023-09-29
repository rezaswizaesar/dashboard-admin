import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Authenticated from '../components/Authenticated';
import AuthLayout from '../components/Layout/AuthLayout';
import GuestLayout from '../components/Layout/GuestLayout';
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
                                    <Authenticated>
                                        <AuthLayout {...route} />
                                    </Authenticated>
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
                                            <Authenticated>
                                                <AuthLayout {...childroute} />
                                            </Authenticated>
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
        </Routes>
    );
};
export default RouteLayout;
