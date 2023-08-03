import styled from 'styled-components'
import config from '../../Helper/Variable'

const SidebarStyle = styled.aside`
  background-color: #212529;
  position: fixed;
  overflow: auto;
  width: ${() => `${config.sidebar}px`};
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  z-index: 2;
  padding-top: 15px;
  .sidebar{
    &-top{
      padding: 10px 24px;
      display: flex;
      align-items: center;
      margin-bottom: 50px;
      width: 100%;
      &__logo{
        width: 30px;
        margin-right: 10px;
      }
      span{
        color:#fff;
        font-size: 20px;
        font-weight:300;
      }
    }
  }
.ant-menu{
  background-color: transparent;
  &-item{
    color: #fff;
    background-color: transparent;
    font-weight: 500;
    font-size: 16px;
    border-radius: unset;
    margin: 10px 0px;
    &-selected{
      color: #fff !important;
      background-color: transparent !important;
      position: relative;
      &::after{
        content: "";
        width: 3px;
        position: absolute;
        left: 0;
        background-color: #5e72e4;
        top: 0;
        bottom: 0;
      }
    }
  }
}
`
export default SidebarStyle