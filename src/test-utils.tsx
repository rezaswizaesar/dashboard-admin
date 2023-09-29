import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { mswServer } from './_helper/Mock/MockHttpServer';
import { ConfigProvider } from 'antd';

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

const customRender = (ui: React.ReactElement, options = {}) =>
    render(ui, {
        wrapper: ({ children }) => (
            <ConfigProvider prefixCls="fhd">{children}</ConfigProvider>
        ),
        ...options
    });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
