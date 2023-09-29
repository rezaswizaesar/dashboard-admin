import React from 'react';
import Style from './Style';
interface ISelectCostume {
    options: {
        value: number | string;
        label: string;
    }[];
    name?: string;
    dataTestId: string;
    onChange: (value: string) => Promise<void>;
}
const SelectCostume: React.FC<ISelectCostume> = ({
    options = [{ value: '', label: '' }],
    onChange = () => {},
    name = '',
    dataTestId = ''
}) => {
    const onGetValue = (e: any) => {
        let value = e.target.value;
        onChange(value);
    };
    return (
        <Style data-testid={dataTestId} name={name} onChange={onGetValue}>
            {options.map((item: any, key: number) => {
                return (
                    <option value={item.value} key={key}>
                        {item.label}
                    </option>
                );
            })}
        </Style>
    );
};
export default SelectCostume;
