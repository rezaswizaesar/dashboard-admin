
import styled from 'styled-components'
import config from '../../helper/constant'
const LayoutStyle = styled.div`
  padding: 6.5rem 0;
  background: linear-gradient(87deg,#f5365c,#f56036);
  .section{
    position: absolute;
    left: ${() => `${config.sidebar}px`};
    right: 0;
    bottom: 0;
    padding: 20px 30px;
    height: 100%;
    top: 40px;
  }
`
export default LayoutStyle