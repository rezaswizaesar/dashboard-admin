import { Menu } from 'antd';
import React from 'react';
import SidebarHandler from './SidebarHandler';
import SidebarStyle from './SidebarStyle';
import Logo from '../../Assets/Images/fithub-tp.png';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const { NavList } = SidebarHandler();

    return (
        <SidebarStyle>
            <Link className="sidebar-top" to={'/checkin'}>
                <img src={Logo} alt="Fithub" className="sidebar-top__logo" />{' '}
                <span> Admin-Dashboard</span>
            </Link>
            <Menu
                defaultSelectedKeys={['0']}
                defaultOpenKeys={['sub1']}
                mode={'inline'}
                theme={'dark'}
                items={NavList()}
            />
        </SidebarStyle>
    );
};

export default Sidebar;
