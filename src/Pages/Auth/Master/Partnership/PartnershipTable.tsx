import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import DataTablePartnershipType from '../../../../types/DataTablePartnershipType';

interface PartnershipTableProps {
    dataTable: any; // Define the dataTable prop
}
const columnsPartnershipTable: ColumnsType<DataTablePartnershipType> = [
    {
        title: 'Name',
        dataIndex: 'personName',
        key: 'personName',
        render: (text) => <a>{text}</a>
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
        title: 'Create Date',
        key: 'createdDate',
        dataIndex: 'createdDate'
    }
];

const PartnershipTable: React.FC<PartnershipTableProps> = (props) => {
    const { dataTable } = props;
    return <Table columns={columnsPartnershipTable} dataSource={dataTable} />;
};
export default PartnershipTable;
