import styled from 'styled-components'
import config from '../../Helper/Variable'

const HeaderStyle = styled.header`
    position: absolute;
    padding: 20px 30px;
    left: ${() => `${config.sidebar}px`};
    right: 0;
    bottom: 0;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;
    .header-menu {
        .logout-button {
            color: #ebebeb;
            font-size: 14px;
            cursor: pointer;
            font-size:14px;
            font-weight: 500;
            
            &:hover {
                color: #dbd7d7;
            }
        }
        
    }
    
    .header{
        &-title{
            font-size: 14px;
            margin:0;
            text-transform: uppercase;
            font-weight: 400;
            a{
                color: #fff;
            }
        }
    }
`
export default HeaderStyle