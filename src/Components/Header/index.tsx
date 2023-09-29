import React, { ReactNode } from 'react';
import HeaderStyle from './Header.Style';
import { Button, Dropdown, type MenuProps } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import useHeaderHandler from './handler';
interface IHeaderProps {
    label: ReactNode;
}
const Header: React.FC<IHeaderProps> = ({ label }) => {
    const {
        state,
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
                    <Button type="link" className="header-button">
                        {`${state.email} (${state.typeUser}) - ${state.locationUser}`}
                    </Button>
                </Dropdown>
            </div>
        </HeaderStyle>
    );
};
export default Header;
