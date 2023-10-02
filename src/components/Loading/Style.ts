import { styled } from "styled-components";
import { ILoading } from "../../types/Component/Loading";

const LoadingStyle = styled.div<ILoading>`
${({ fullPage }) => fullPage && `
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #333;
`}
`

export default LoadingStyle;
