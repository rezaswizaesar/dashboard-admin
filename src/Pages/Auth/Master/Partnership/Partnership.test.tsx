import {
    render,
    fireEvent,
    screen,
    act,
    renderHook
} from '../../../../test-utils';
import PartnershipPage from './index';
import usePartnershipHandler from './handler';
import TablePartnership from '../../../../Components/Partnership/Table';
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
    it('handles error response', async () => {
        render(<PartnershipPage />);

        const { result } = renderHook(() => usePartnershipHandler());
        // Mock an error API response
        await act(async () => {
            await result.current.onChangeType('error');
        });
        expect(result.current.isLoading).toBe(false);
        expect(result.current.isSuccess).toBe(false);
    });
    it('handles success response', async () => {
        render(<PartnershipPage />);
        const { result } = renderHook(() => usePartnershipHandler());
        // Mock an error API response

        await act(async () => {
            await result.current.onChangeType('OWNERSHIP');
        });
        expect(result.current.isLoading).toBe(false);
        expect(result.current.dataTable.length).toBe(1);
        expect(result.current.isSuccess).toBe(true);
        const mockOpenDetail = jest.fn();
        const { getByTestId } = render(
            <TablePartnership
                dataTable={result.current.dataTable}
                showDetail={mockOpenDetail}
            />
        );
        expect(getByTestId('parnership-phone')).toHaveTextContent(
            '(+62) 8112228854'
        );
    });
});
