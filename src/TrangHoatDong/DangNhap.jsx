import React, { useContext, useState } from 'react';
import { Layout, Card, Input, Button, Typography, Form } from 'antd';
import { UserOutlined, LockOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../Setting/Setting';

const { Content } = Layout;
const { Title, Text } = Typography;

function DangNhap() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    navigate('/');
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Layout className="min-h-screen flex items-center justify-center" style={{ backgroundColor: theme.colors.background }}>
      <Content className="p-6 w-full max-w-md flex items-center justify-center">
        <Card
          className="shadow-lg rounded-lg w-full"
          style={{ backgroundColor: theme.colors.siderBackground, color: theme.colors.text }}
        >
          <Title level={2} className="text-center mb-6" style={{ color: theme.colors.primary }}>
            Đăng nhập
          </Title>

          <Form
            form={form}
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            className="login-form"
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
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: theme.colors.text + '80' }} />}
                placeholder="Mật khẩu"
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
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center mt-4">
            <Text style={{ color: theme.colors.text }}>Chưa có tài khoản?</Text>{' '}
            <Link to="/register" style={{ color: theme.colors.primary }}>
              Đăng ký ngay!
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

export default DangNhap;
