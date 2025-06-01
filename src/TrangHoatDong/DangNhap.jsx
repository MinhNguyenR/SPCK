import React, { useContext, useState } from 'react';
import { Layout, Input, Button, Form, message } from 'antd'; 
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../Setting/Setting';
import { AuthContext } from '../contexts/AuthContext'; 

const { Content } = Layout;

function DangNhap() {
  const { theme } = useContext(ThemeContext);
  const { login } = useContext(AuthContext); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

const onFinish = async (values) => {
  console.log('--- Đăng nhập: Form đã được gửi ---'); 
  console.log('Giá trị nhập vào:', values); 
  setLoading(true);
  const { email, password } = values;
  const result = await login(email, password); 
  setLoading(false);

  if (result.success) {
    message.success('Đăng nhập thành công! Đang chuyển hướng...');
    navigate('/home');
  } else {
    message.error(result.message || 'Đăng nhập thất bại!');
  }
};

  return (
    <Layout className="min-h-screen flex items-center justify-center" style={{ backgroundColor: theme.colors.background }}>
      <Content className="p-6">
        <div
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
          style={{ backgroundColor: theme.colors.containerBackground, color: theme.colors.text }}
        >
          <h2 className="text-3xl font-bold text-center mb-6" style={{ color: theme.colors.primary }}>
            Đăng Nhập
          </h2>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Vui lòng nhập email!' }, { type: 'email', message: 'Email không hợp lệ!' }]}
            >
              <Input
                prefix={<MailOutlined style={{ color: theme.colors.text }} />}
                placeholder="Email"
                style={{ backgroundColor: theme.colors.inputBackground, color: theme.colors.text }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: theme.colors.text }} />}
                placeholder="Mật khẩu"
                style={{ backgroundColor: theme.colors.inputBackground, color: theme.colors.text }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                loading={loading}
                style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.primary }}
              >
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>
          <div className="text-center mt-4">
            <span style={{ color: theme.colors.text }}>Chưa có tài khoản? </span>
            <Link to="/register" style={{ color: theme.colors.primary }}>Đăng ký ngay</Link>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default DangNhap;