import React, { useContext } from 'react';
import { Layout, Input, Button } from 'antd';
import {
  HomeOutlined,
  MessageOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { ThemeContext } from '../Setting/Setting';

const { Header } = Layout;
const { Search } = Input;

function Navbar() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleMessageClick = () => {
    navigate('/messages');
  };

  const handleNotificationClick = () => {
    navigate('/notifications');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Header className="shadow-md flex items-center px-6" style={{ backgroundColor: theme.colors.background }}>
      <div className="flex items-center flex-1">
        <div className="text-2xl font-bold mr-8" style={{ color: theme.colors.primary }}>
          MXH
        </div>

        <Search
          placeholder="Tìm kiếm bạn bè, bài viết..."
          className="max-w-xs"
          style={{
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
          }}
        />
      </div>

      <div className="flex items-center justify-center gap-16 mx-auto">
        <div
          className={`flex flex-col items-center justify-center relative pb-2 ${isActive('/') ? 'border-b-2' : ''}`}
          style={{ borderColor: isActive('/') ? theme.colors.primary : 'transparent' }}
        >
          <Button
            type="text"
            icon={<HomeOutlined style={{ fontSize: '24px', color: theme.colors.text }} />}
            onClick={handleHomeClick}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          />
        </div>
        <div
          className={`flex flex-col items-center justify-center relative pb-2 ${isActive('/messages') ? 'border-b-2' : ''}`}
          style={{ borderColor: isActive('/messages') ? theme.colors.primary : 'transparent' }}
        >
          <Button
            type="text"
            icon={<MessageOutlined style={{ fontSize: '24px', color: theme.colors.text }} />}
            onClick={handleMessageClick}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          />
        </div>
        <div
          className={`flex flex-col items-center justify-center relative pb-2 ${isActive('/notifications') ? 'border-b-2' : ''}`}
          style={{ borderColor: isActive('/notifications') ? theme.colors.primary : 'transparent' }}
        >
          <Button
            type="text"
            icon={<BellOutlined style={{ fontSize: '24px', color: theme.colors.text }} />}
            onClick={handleNotificationClick}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          />
        </div>
      </div>

      <div className="flex items-center gap-4 flex-1 justify-end">
        <Link to="/login" className="mr-4" style={{ color: theme.colors.primary }}>
          Đăng nhập
        </Link>
        <Link to="/register" style={{ color: theme.colors.primary }}>
          Tạo tài khoản
        </Link>
      </div>
    </Header>
  );
}

export default Navbar;
