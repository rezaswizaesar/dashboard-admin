import { Button, Card, Form, Input } from 'antd';
import LoginHandler from '../LoginHandler';

const FormCard = () => {
    const { onSubmit, responseSubmit } = LoginHandler();
    return (
        <Card>
            <span className="login-section__card-top">
                Sign in with credentials
            </span>
            <Form onFinish={onSubmit}>
                <Form.Item
                    name={'email'}
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'The input is not valid E-mail!'
                        }
                    ]}>
                    <Input
                        size="large"
                        type="email"
                        autoComplete="new-email"
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    name={'password'}
                    rules={[
                        {
                            required: true
                        }
                    ]}>
                    <Input
                        size="large"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Password"
                    />
                </Form.Item>
                <div className="btn-submit">
                    <Button
                        size="large"
                        htmlType="submit"
                        type="primary"
                        loading={responseSubmit?.isLoading || false}>
                        Submit
                    </Button>
                </div>
            </Form>
        </Card>
    );
};
export default FormCard;
