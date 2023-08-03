import styled from 'styled-components';
const breakpoint = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
export const Container = styled.div`
    padding: 0 15px;
    width: 100%;
    margin: auto;
    @media (min-width: ${breakpoint.xs}px) {
        width: 100%;
    }
    @media (min-width: ${breakpoint.sm}px) {
        width: 540px;
    }
    @media (min-width: ${breakpoint.md}px) {
        width: 720px;
    }
    @media (min-width: ${breakpoint.lg}px) {
        width: 960px;
    }
    @media (min-width: ${breakpoint.xl}px) {
        width: 1140px;
    }
`;