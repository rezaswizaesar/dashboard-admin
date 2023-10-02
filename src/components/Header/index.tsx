import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps } from 'antd';
import React from 'react';
import { IHeaderProps } from '../../types/Component/Header';
import useHeaderHandler from './Handler';
import HeaderStyle from './Style';

const Header: React.FC<IHeaderProps> = ({ label }) => {
    const {
        userTitle,
        function: { handleLogout }
    } = useHeaderHandler();

    const items: MenuProps['items'] = [
        {
            type: 'group',
            label: <p>WELCOME!</p>,
            key: '0',
            children: [
                {
                    label: (
                        <Button
                            type="link"
                            style={{ color: '#555' }}
                            onClick={handleLogout}>
                            <LogoutOutlined /> Logout
                        </Button>
                    ),
                    key: '1'
                }
            ]
        }
    ];
    return (
        <HeaderStyle>
            <h5 className="header-title">{label}</h5>
            <div className="header-menu">
                <Dropdown
                    menu={{ items }}
                    placement="bottomRight"
                    arrow
                    trigger={['click']}
                    overlayStyle={{ minWidth: '200px' }}>
                    <Button
                        type="link"
                        size="large"
                        icon={<UserOutlined style={{ fontSize: '18px' }} />}
                        className="header-menu__button">
                        {userTitle}
                    </Button>
                </Dropdown>
            </div>
        </HeaderStyle>
    );
};
export default Header;
