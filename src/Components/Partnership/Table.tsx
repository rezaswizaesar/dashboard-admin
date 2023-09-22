import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
    TypePartnershipResp,
    TypePartnershipTableProps
} from '../../types/Partnership';
// import { TypePartnershipResp, TypePartnershipTableProps } from '@/types/Partnership';

const TablePartnership = ({
    dataTable,
    showDetail
}: TypePartnershipTableProps) => {
    const columnsPartnershipTable: ColumnsType<TypePartnershipResp> = [
        {
            title: 'Name',
            dataIndex: 'personName',
            key: 'personName',
            render: (text, data) => (
                <Button
                    type="link"
                    style={{ color: 'blue' }}
                    onClick={() => {
                        console.log(data);
                        showDetail(data);
                    }}>
                    {text}
                </Button>
            )
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Created Date',
            key: 'createdDate',
            dataIndex: 'createdDate'
        }
    ];
    return <Table columns={columnsPartnershipTable} dataSource={dataTable} />;
};

export default TablePartnership;
