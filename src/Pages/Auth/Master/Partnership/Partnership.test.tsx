// import { render, waitFor, fireEvent } from '../../../../test-utils';
// import PartnershipPage from '.';
// describe('PartnershipHandler', () => {
//     beforeAll(() => {
//         // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
//         window.matchMedia =
//             window.matchMedia ||
//             function () {
//                 return {
//                     matches: false,
//                     addListener: () => {},
//                     removeListener: () => {}
//                 };
//             };
//     });
//     it('renders without errors', () => {
//         render(<PartnershipPage />);
//     });
//     it('form select type', async () => {
//         const { getByTestId } = render(<PartnershipPage />);
//         const selectElement = getByTestId('select-type');

//         fireEvent.change(selectElement, {
//             target: { value: 'OWNERSHIP' }
//         });
//         await waitFor(() => {
//             expect(selectElement).toHaveValue('OWNERSHIP');
//         });
//     });
// });
import { render, fireEvent, waitFor } from '../../../../test-utils';
import PartnershipPage from './index';
import '@testing-library/jest-dom';

// Mock the usePartnershipHandler hook
jest.mock('./handler', () => ({
    __esModule: true,
    default: () => ({
        selectType: '',
        isLoading: false,
        dataTable: [],
        showModal: false,
        selectedData: null,
        onChangeType: jest.fn(),
        openDetail: jest.fn(),
        closeDetail: jest.fn(),
        isSuccess: true
    })
}));
// Mock the antMessage.warning function
describe('PartnershipPage', () => {
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
        // You can add more specific assertions here based on your component's structure.
    });
    it('selects a partnership type from the dropdown', async () => {
        const { getByTestId } = render(<PartnershipPage />);
        const selectElement = getByTestId('select-type');

        fireEvent.change(selectElement, {
            target: { value: 'OWNERSHIP' }
        });
        await waitFor(() => {
            expect(selectElement).toHaveValue('OWNERSHIP');
        });
    });

    it('displays a table when isLoading is false', () => {
        jest.resetAllMocks();
        jest.mock('./handler', () => ({
            __esModule: true,
            default: () => ({
                selectType: '',
                isLoading: false, // Set isLoading to true
                dataTable: [],
                showModal: false,
                selectedData: null,
                onChangeType: jest.fn(),
                openDetail: jest.fn(),
                closeDetail: jest.fn(),
                isSuccess: true
            })
        }));
        const { getByRole } = render(<PartnershipPage />);
        const table = getByRole('table-showing');
        expect(table).toBeInTheDocument();
    });
});
