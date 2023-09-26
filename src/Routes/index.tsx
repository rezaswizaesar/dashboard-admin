import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../Components/Layout/AuthLayout';
import GuestLayout from '../Components/Layout/GuestLayout';
import Routelist from './RouteList';
import Authenticated from '../Components/Authenticated';
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
        </Routes>
    );
};
export default RouteLayout;
