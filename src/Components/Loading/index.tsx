import { Spin } from 'antd';

const Loading = () => {
    return (
        <div
            data-testid="loading-table-partnership"
            className="loading-container">
            <Spin size="large" />
        </div>
    );
};

export default Loading;
