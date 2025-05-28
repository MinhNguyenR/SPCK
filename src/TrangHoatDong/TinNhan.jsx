import React, { useContext } from 'react';
import { Layout, Typography, Button } from 'antd'; 
import { ArrowLeftOutlined } from '@ant-design/icons'; 
import Navbar from '../ChucNang/Navbar'; 
import { ThemeContext } from '../Setting/Setting'; 
import { useNavigate } from 'react-router-dom'; 

const { Content } = Layout;
const { Title } = Typography;

function TinNhan() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <Layout className="min-h-screen" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
      <Navbar />

      <Content className="flex flex-col items-center justify-center p-6 flex-1"> 
        <div
          className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md"
          style={{ backgroundColor: theme.colors.siderBackground, color: theme.colors.text }}
        >
          <Title level={3} style={{ color: theme.colors.text }}>Chưa có tin nhắn nào</Title>
          <p style={{ color: theme.colors.text + 'B0' }}>Hãy bắt đầu cuộc trò chuyện mới!</p>
          
          <Button
            type="primary"
            size="large"
            icon={<ArrowLeftOutlined />}
            onClick={handleGoBack}
            className="mt-6"
            style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.primary }}
          >
            Quay lại Trang chủ
          </Button>
        </div>
      </Content>
    </Layout>
  );
}

export default TinNhan;
