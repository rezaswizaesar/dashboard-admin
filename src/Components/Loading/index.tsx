import { Spin } from 'antd';
import LoadingStyle from './Loading.Style';
interface ILoading {
    fullPage: boolean;
}
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
