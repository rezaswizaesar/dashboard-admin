import { rest } from 'msw';

export const fetchTasks_incompleteTask_response = rest.get(
    'https://web.svc.staging.fithubdev.com/v1/partnerships',

    async (req, res, ctx) => {
        const type = req.url.searchParams.get('type');
        if (type === 'OWNERSHIP') {
            return res(
                ctx.status(200),
                ctx.json({
                    data: [
                        {
                            ownAsset: false,
                            investmentPlan: '\u003c Rp 500 Mio',
                            createdDate: '2022-05-09T00:57:47.628Z',
                            personName: 'Kevin Kurniawan ',
                            partnershipType: 'OWNERSHIP',
                            employeeNumber: null,
                            email: 'kevkurniawan96@gmail.com',
                            contactTime: 'EVENING',
                            phone: '(+62) 8112228854',
                            dialCode: '+62',
                            companyName: ''
                        }
                    ]
                })
            );
        }
        if (type === 'CORPORATE MEMBERSHIP') {
            return res(
                ctx.status(200),
                ctx.json({
                    data: [
                        {
                            ownAsset: false,
                            investmentPlan: '\u003c Rp 500 Mio',
                            createdDate: '2022-05-09T00:57:47.628Z',
                            personName: 'Kevin Kurniawan ',
                            partnershipType: 'CORPORATE MEMBERSHIP',
                            employeeNumber: null,
                            email: 'kevkurniawan96@gmail.com',
                            contactTime: 'EVENING',
                            phone: '(+62) 8112228854',
                            dialCode: '+62',
                            companyName: ''
                        }
                    ]
                })
            );
        }
    }
);

export const handlers = [fetchTasks_incompleteTask_response];
