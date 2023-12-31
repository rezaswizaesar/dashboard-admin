import { Menu } from 'antd';
import React from 'react';
import SidebarHandler from './SidebarHandler';
import SidebarStyle from './Style';
import Logo from '../../assets/Images/fithub-tp.png';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const { NavList, handleClickSidebar, current, openKey } = SidebarHandler();
    return (
        <SidebarStyle>
            <Link className="sidebar-top" to={'/'}>
                <img src={Logo} alt="Fithub" className="sidebar-top__logo" />{' '}
                <span> Admin-Dashboard</span>
            </Link>
            <Menu
                onOpenChange={handleClickSidebar}
                selectedKeys={[current]}
                openKeys={openKey}
                mode={'inline'}
                theme={'dark'}
                items={NavList()}
            />
        </SidebarStyle>
    );
};

export default Sidebar;
