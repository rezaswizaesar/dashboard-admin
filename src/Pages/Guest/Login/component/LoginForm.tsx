import { Button, Card, Form, Input } from 'antd';
import useLoginHandler from '../handler';

const LoginForm = () => {
    const { onSubmit, isLoading, form } = useLoginHandler();
    return (
        <Card>
            <span className="login-section__card-top">
                Sign in with credentials
            </span>
            <Form form={form} onFinish={onSubmit}>
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
                        size="middle"
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
                        size="middle"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Password"
                    />
                </Form.Item>
                <div className="btn-submit">
                    <Form.Item shouldUpdate className="submit">
                        {() => (
                            <Button
                                size="middle"
                                htmlType="submit"
                                type="primary"
                                loading={isLoading || false}
                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    form
                                        .getFieldsError()
                                        .filter(({ errors }) => errors.length)
                                        .length > 0
                                }>
                                Sign in
                            </Button>
                        )}
                    </Form.Item>
                </div>
            </Form>
        </Card>
    );
};
export default LoginForm;
