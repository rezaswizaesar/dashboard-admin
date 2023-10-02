import { Spin } from 'antd';
import { ILoading } from '../../types/Component/Loading';
import LoadingStyle from './Style';

const Loading: React.FC<ILoading> = ({ fullPage = false }) => {
    return (
        <LoadingStyle
            fullPage={fullPage}
            data-testid="loading-table-partnership"
            className="loading-container">
            <Spin size="large" />
        </LoadingStyle>
    );
};

export default Loading;
