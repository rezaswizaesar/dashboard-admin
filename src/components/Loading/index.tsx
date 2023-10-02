import { Spin } from 'antd';
import LoadingStyle from './Style';

const Loading: React.FC = () => {
    return (
        <LoadingStyle
            data-testid="loading-table-partnership"
            className="loading-container">
            <Spin size="large" />
        </LoadingStyle>
    );
};

export default Loading;
