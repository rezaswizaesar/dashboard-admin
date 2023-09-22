import { fireEvent, render } from '@testing-library/react';
import PartnershipPage from '.';
// import PartnershipTable from './PartnershipTable';
// import '@testing-library/jest-dom/extend-expect';
describe('PartnershipHandler', () => {
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
    it('renders without errors', () => {
        render(<PartnershipPage />);
    });
    it('should call onChangeType when select value changes', () => {
        // Membuat mock untuk fungsi onChangeType
        // const mockOnChangeType = jest.fn();

        // Merender komponen PartnershipSelect dengan fungsi onChangeType yang telah di-mock
        const { getByRole } = render(<PartnershipPage />);
        const selectType = getByRole('combobox');

        // Mensimulasikan perubahan pada elemen input
        fireEvent.change(selectType, {
            target: { value: 'CORPORATE MEMBERSHIP' }
        });

        // Memastikan bahwa fungsi onChangeType telah dipanggil dengan benar
        // expect(mockOnChangeType).toHave('CORPORATE MEMBERSHIP');
    });
    // it('shpuld render a table with data', () => {
    //     const data = [
    //         {
    //             ownAsset: false,
    //             investmentPlan: '\u003c Rp 500 Mio',
    //             createdDate: '2022-05-09T00:57:47.628Z',
    //             personName: 'Kevin Kurniawan',
    //             partnershipType: 'OWNERSHIP',
    //             employeeNumber: null,
    //             email: 'kevkurniawan96@gmail.com',
    //             contactTime: 'EVENING',
    //             phone: '(+62) 8112228854',
    //             dialCode: '+62',
    //             companyName: 'company name'
    //         }
    //     ];
    //     const { getByText } = render(<PartnershipTable dataTable={data} />);
    //     expect(getByText('Kevin Kurniawan ')).toBeInTheDocument();
    //     expect(getByText('Name')).toBeInTheDocument();
    // });
    // it('should handle empty data', () => {
    //     const { getByText } = render(<PartnershipTable dataTable={[]} />);

    //     // Memeriksa apakah pesan "Tidak ada data" ditampilkan ketika data kosong
    //     expect(getByText('Tidak ada data')).toBeInTheDocument();
    // });
});
