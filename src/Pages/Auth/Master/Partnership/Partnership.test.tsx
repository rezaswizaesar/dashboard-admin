import { render, fireEvent, screen } from '../../../../test-utils';
import PartnershipPage from './index';
import { renderHook, act } from '@testing-library/react-hooks';
import usePartnershipHandler from './handler';

describe('renders the PartnershipPage component', () => {
    beforeAll(() => {
        // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
        window.matchMedia =
            window.matchMedia ||
            function () {
                return {
                    matches: false,
                    addListener: () => {},
                    removeListener: () => {}
                };
            };
    });
    it('renders the component without errors', () => {
        render(<PartnershipPage />);
    });
    it('selects a partnership type from the dropdown', async () => {
        render(<PartnershipPage />);
        const selectElement = await screen.findByTestId('select-type');
        expect(selectElement).toBeInTheDocument();

        fireEvent.change(selectElement, { target: { value: 'OWNERSHIP' } });

        const tableElement = await screen.findByRole('table-showing');
        expect(tableElement).toBeInTheDocument();
    });
    // it('handles error response', async () => {
    //     server.use(
    //         rest.get(
    //             'https://web.svc.staging.fithubdev.com/v1/partnerships',
    //             (_, res, ctx) => {
    //                 return res(
    //                     ctx.status(500),
    //                     ctx.json({ message: 'Internal Server Error' })
    //                 );
    //             }
    //         )
    //     );

    //     render(<PartnershipPage />);
    //     const warningElement = await screen.findByText('error fetching data !');
    //     expect(warningElement).toBeInTheDocument();
    // });
    it('usePartnershipHandler handles state changes', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            usePartnershipHandler()
        );

        act(() => {
            result.current.onChangeType('OWNERSHIP');
        });
        expect(result.current.isLoading).toBe(true);

        await waitForNextUpdate();

        expect(result.current.isLoading).toBe(false);
        expect(result.current.dataTable.length).toBe(1);
        expect(result.current.isSuccess).toBe(true);
    });
});
