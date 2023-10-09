import React, { ChangeEvent } from 'react';
import Style from './Style';
interface ISelectCostume {
    options: {
        value: number | string;
        label: string;
    }[];
    name?: string;
    value?: string;
    dataTestId: string;
    onChange: (value: string) => Promise<void>;
}
const SelectCostume: React.FC<ISelectCostume> = ({
    options = [{ value: '', label: '' }],
    onChange = () => {},
    name = '',
    value = '',
    dataTestId = ''
}) => {

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        let value = e.target.value;
        onChange(value);
    };

    return (
        <Style data-testid={dataTestId} name={name} onChange={handleChange} value={value}>
            <option disabled selected value="">Select an option</option>
            {options.map((item, key) => {
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
