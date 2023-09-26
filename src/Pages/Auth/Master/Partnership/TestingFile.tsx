import React from 'react';

const initialInputValue = 'initialInputValue';

export default class TestForm extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = { inputValue: initialInputValue };
    }
    render() {
        const { inputValue }: any = this.state;

        return (
            <div>
                <input
                    value={inputValue}
                    onChange={(e) =>
                        this.setState({ inputValue: e.target.value })
                    }
                    placeholder="placeholder"
                />

                {inputValue !== initialInputValue && (
                    <div>Input has changed</div>
                )}
            </div>
        );
    }
}
