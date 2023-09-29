import React, { ReactNode } from 'react';
import HeaderStyle from './Style';
interface IHeaderProps {
    label: ReactNode;
}
const Header: React.FC<IHeaderProps> = ({ label }) => {
    return (
        <HeaderStyle>
            <h5 className="header-title">{label}</h5>
        </HeaderStyle>
    );
};
export default Header;
