import { LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message } from 'antd';
import { FC, useContext } from 'react';
import { logout } from '../../Config/Action';
import { AppContext } from '../../Config/Context';
import { useLocalStorage } from '../../Helper/Hooks/useLocalStorage';
import { IHeaderProps } from '../../types/Header';
import HeaderStyle from './HeaderStyle';


const Header: FC<IHeaderProps> = ({ label }) => {
    const { state, dispatch } = useContext(AppContext);
    const { clearItem } = useLocalStorage()

    const handleLogout = () => {
        dispatch(logout())
        clearItem()
        message.success("Successfully Logged Out!")

    }

    const items: MenuProps['items'] = [
        {
            type: 'group',
            label: <p>WELCOME!</p>,
            key: '0',
            children: [
                {
                    label: (
                        <Button type="link" style={{ color: '#555' }} onClick={handleLogout}>
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
                    <Button type="link" className="logout-button">
                        {`${state.email} (${state.typeUser}) - ${state.locationUser}`}
                    </Button>
                </Dropdown>
            </div>
        </HeaderStyle>
    );
};
export default Header;
