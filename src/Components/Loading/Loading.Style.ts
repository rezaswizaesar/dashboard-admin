import { styled } from "styled-components";
interface ILoading {
  fullPage: boolean
}
const LoadingStyle = styled.div<ILoading>`
${({ fullPage }) => fullPage && `
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`}
`
export default LoadingStyle