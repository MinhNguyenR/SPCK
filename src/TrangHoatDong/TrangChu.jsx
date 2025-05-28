import React, { useContext } from 'react';
import { Layout, Menu, Input, Button, Avatar, Card } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  BellOutlined,
  MessageOutlined,
  HomeOutlined,
  PictureOutlined,
  TagOutlined
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../ChucNang/Navbar';
import { ThemeContext } from '../Setting/Setting';

const { Content, Sider } = Layout;
const { Search } = Input;

function TrangChu() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const menuItems = [
    { key: 'friends', icon: <UserOutlined style={{ color: theme.colors.text }} />, label: <Link to="/friends" style={{ color: theme.colors.text }}>Bạn bè</Link> },
    { key: 'groups', icon: <UsergroupAddOutlined style={{ color: theme.colors.text }} />, label: <Link to="/groups" style={{ color: theme.colors.text }}>Nhóm</Link> },
    { key: 'marketplace', icon: <ShopOutlined style={{ color: theme.colors.text }} />, label: <Link to="/marketplace" style={{ color: theme.colors.text }}>Cửa hàng</Link> },
    { key: 'settings', icon: <SettingOutlined style={{ color: theme.colors.text }} />, label: <Link to="/settings" style={{ color: theme.colors.text }}>Cài đặt</Link> },
  ];

  const handleCreatePostClick = () => {
    navigate('/create-post'); 
  };

  const handleNotificationClick = () => {
    navigate('/notifications');
  };

  const handleMessageClick = () => {
    navigate('/messages');
  };

  return (
    <Layout className="min-h-screen" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
      <Navbar />

      <Layout> 
        <Sider width={200} className="p-4" style={{ backgroundColor: theme.colors.siderBackground, color: theme.colors.text }}>
          <Menu
            mode="vertical"
            items={menuItems}
            style={{ backgroundColor: theme.colors.siderBackground, color: theme.colors.text }}
            className="custom-menu-styles"
          />
        </Sider>

        <Content className="p-6" style={{ backgroundColor: theme.colors.background }}>
          <div className="max-w-3xl mx-auto">
            <Card className="mb-6" style={{ backgroundColor: theme.colors.siderBackground, color: theme.colors.text }}>
              <div className="flex items-center gap-4">
                <Avatar icon={<UserOutlined />} style={{ backgroundColor: theme.colors.primary }} />
                <div
                  className="flex-1 cursor-pointer p-2 rounded-md" 
                  onClick={handleCreatePostClick} 
                  style={{
                    backgroundColor: theme.colors.background,
                    color: theme.colors.text + '80', 
                    minHeight: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid ' + theme.colors.text + '40', 
                  }}
                >
                  Bạn đang nghĩ gì?
                </div>
              </div>
              <div className="mt-4 flex justify-center items-center gap-6">
                <Button
                  type="text"
                  icon={<PictureOutlined style={{ fontSize: '20px', color: theme.colors.primary }} />}
                  onClick={handleCreatePostClick} 
                  style={{ color: theme.colors.text }}
                >
                  Ảnh/Video
                </Button>
                <Button
                  type="text"
                  icon={<TagOutlined style={{ fontSize: '20px', color: theme.colors.primary }} />}
                  onClick={handleCreatePostClick}
                  style={{ color: theme.colors.text }}
                >
                  Tag tên
                </Button>
                <Button type="primary" style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.primary }}>Đăng bài</Button>
              </div>
            </Card>

            <Card className="mb-4" style={{ backgroundColor: theme.colors.siderBackground, color: theme.colors.text }}>
              <div className="flex items-start gap-4">
                <Avatar icon={<UserOutlined />} style={{ backgroundColor: theme.colors.primary }} />
                <div>
                  <h4 className="font-bold" style={{ color: theme.colors.text }}>Người dùng mẫu</h4>
                  <p className="text-sm" style={{ color: theme.colors.text + 'B0' }}>2 giờ trước</p>
                  <p className="mt-2" style={{ color: theme.colors.text }}>Đây là một bài đăng mẫu trên mạng xã hội của chúng ta!</p>
                </div>
              </div>
            </Card>
          </div>
        </Content>

        <Sider width={300} className="p-4" style={{ backgroundColor: theme.colors.siderBackground, color: theme.colors.text }}>
          <Card title={<span style={{ color: theme.colors.text }}>Tiện ích</span>} className="mb-4" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
            <div className="space-y-4">
              <div
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={handleNotificationClick}
                style={{ color: theme.colors.text, backgroundColor: theme.colors.background }}
              >
                <BellOutlined style={{ color: theme.colors.text }} />
                <span style={{ color: theme.colors.text }}>Thông báo mới</span>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={handleMessageClick}
                style={{ color: theme.colors.text, backgroundColor: theme.colors.background }}
              >
                <MessageOutlined style={{ color: theme.colors.text }} />
                <span style={{ color: theme.colors.text }}>Tin nhắn chưa đọc</span>
              </div>
            </div>
          </Card>

          <Card title={<span style={{ color: theme.colors.text }}>Gợi ý kết bạn</span>} className="mb-4" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <Avatar icon={<UserOutlined />} style={{ backgroundColor: theme.colors.primary }} />
                  <div>
                    <p className="font-medium" style={{ color: theme.colors.text }}>Người dùng {i}</p>
                    <Button size="small" type="primary" style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.primary }}>Kết bạn</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Sider>
      </Layout>
    </Layout>
  );
}

export default TrangChu;