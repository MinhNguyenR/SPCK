import React, { useContext, useState } from 'react';
import { Layout, Card, Input, Button, Typography, Form } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../Setting/Setting';

const { Content } = Layout;
const { Title, Text } = Typography;

function DangKy() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    navigate('/login');
  };

  const handleGoBack = () => {
    navigate('/');
  };

  const handleGoogleLogin = () => {
    console.log('Đăng nhập bằng Google clicked!');
  };

  return (
    <Layout className="min-h-screen flex items-center justify-center" style={{ backgroundColor: theme.colors.background }}>
      <Content className="p-6 w-full max-w-md flex items-center justify-center">
        <Card
          className="shadow-lg rounded-lg w-full"
          style={{ backgroundColor: theme.colors.siderBackground, color: theme.colors.text }}
        >
          <Title level={2} className="text-center mb-6" style={{ color: theme.colors.primary }}>
            Tạo tài khoản
          </Title>

          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            className="register-form"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
            >
              <Input
                prefix={<UserOutlined style={{ color: theme.colors.text + '80' }} />}
                placeholder="Tên đăng nhập"
                style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { type: 'email', message: 'Email không hợp lệ!' },
                { required: true, message: 'Vui lòng nhập Email!' },
              ]}
            >
              <Input
                prefix={<MailOutlined style={{ color: theme.colors.text + '80' }} />}
                placeholder="Email"
                style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: theme.colors.text + '80' }} />}
                placeholder="Mật khẩu"
                style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: theme.colors.text + '80' }} />}
                placeholder="Xác nhận mật khẩu"
                style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
                style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.primary }}
              >
                Đăng ký
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center mt-4">
            <Text style={{ color: theme.colors.text }}>Hoặc</Text>
          </div>

          <div className="text-center mt-4">
            <Button
              type="default"
              size="large"
              className="w-full flex items-center justify-center gap-2"
              onClick={handleGoogleLogin}
              style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.text,
                borderColor: theme.colors.text + '40',
              }}
            >
              <img src="https://www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_18dp.png" alt="Google icon" className="w-5 h-5" />
              Đăng ký bằng Google
            </Button>
          </div>

          <div className="text-center mt-4">
            <Text style={{ color: theme.colors.text }}>Đã có tài khoản?</Text>{' '}
            <Link to="/login" style={{ color: theme.colors.primary }}>
              Đăng nhập ngay!
            </Link>
          </div>

          <div className="text-center mt-6">
            <Button
              type="default"
              icon={<ArrowLeftOutlined />}
              onClick={handleGoBack}
              style={{ color: theme.colors.primary, borderColor: theme.colors.primary }}
            >
              Quay lại Trang chủ
            </Button>
          </div>
        </Card>
      </Content>
    </Layout>
  );
}

export default DangKy;