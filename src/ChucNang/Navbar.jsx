import React, { useContext, useState, useRef, useEffect } from 'react';
import { Layout, Input, Button, Avatar } from 'antd'; 
import {
  HomeOutlined,
  MessageOutlined,
  BellOutlined,
  SearchOutlined,
  UserOutlined, 
} from '@ant-design/icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../Setting/Setting';
import { AuthContext } from '../contexts/AuthContext'; 

const { Header } = Layout;
const { Search } = Input;

function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { isAuthenticated, logout } = useContext(AuthContext); 
  const navigate = useNavigate();
  const location = useLocation();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const handleHomeClick = () => {
    navigate(isAuthenticated ? '/home' : '/'); 
  };

  const handleMessageClick = () => {
    navigate('/messages');
  };

  const handleNotificationClick = () => {
    navigate('/notifications');
  };

  const handleProfileClick = () => {
    navigate('/profile'); 
  };

  const handleLogout = () => {
    logout(); 
    navigate('/'); 
  };

  const isActive = (path) => {
    if (isAuthenticated && path === '/') {
        return location.pathname === '/home';
    }
    return location.pathname === path;
  };

  const handleSearchFocus = () => {
    setShowSuggestions(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Header
        className="shadow-sm flex items-center justify-between px-6 fixed top-0 w-full z-50"
        style={{
          backgroundColor: theme.colors.background,
          boxShadow: theme.mode === 'light' ? '0 2px 10px rgba(0,0,0,0.05)' : '0 2px 10px rgba(0,0,0,0.2)',
          borderRadius: '0',
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <div className="flex items-center flex-1 relative" ref={searchRef}>
          <div className="text-2xl font-bold mr-4" style={{ color: theme.colors.primary }}>
            MXH
          </div>

          <Input
            placeholder="Tìm kiếm bạn bè, bài viết..."
            className="rounded-lg w-[180px]"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              border: '1px solid ' + theme.colors.text + '20',
              boxShadow: 'none',
            }}
            prefix={<SearchOutlined style={{ color: theme.colors.text + '80' }} />}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />

          {showSuggestions && (
            <div
              className="absolute top-full left-[80px] mt-2 w-[180px] rounded-lg shadow-lg p-4"
              style={{
                backgroundColor: theme.colors.siderBackground,
                color: theme.colors.text,
                zIndex: 100,
                border: '1px solid ' + theme.colors.text + '20',
              }}
            >
              <div className="text-sm" style={{ color: theme.colors.text + '80' }}>
                Không có tìm kiếm nào gần đây
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-16">
          <div
            className={`flex flex-col items-center justify-center relative pb-2 transition-all duration-200 ease-in-out cursor-pointer
              ${isActive('/') ? 'border-b-2' : ''}`}
            style={{
              borderColor: isActive('/') ? theme.colors.primary : 'transparent',
              boxShadow: 'none',
            }}
            onClick={handleHomeClick}
          >
            <Button
              type="text"
              icon={<HomeOutlined style={{ fontSize: '24px', color: theme.colors.text }} />}
              onClick={handleHomeClick}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            />
          </div>

          <div
            className={`flex flex-col items-center justify-center relative pb-2 transition-all duration-200 ease-in-out cursor-pointer
              ${isActive('/messages') ? 'border-b-2' : ''}`}
            style={{
              borderColor: isActive('/messages') ? theme.colors.primary : 'transparent',
              boxShadow: 'none',
            }}
          >
            <Button
              type="text"
              icon={<MessageOutlined style={{ fontSize: '24px', color: theme.colors.text }} />}
              onClick={handleMessageClick}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            />
          </div>

          <div
            className={`flex flex-col items-center justify-center relative pb-2 transition-all duration-200 ease-in-out cursor-pointer
              ${isActive('/notifications') ? 'border-b-2' : ''}`}
            style={{
              borderColor: isActive('/notifications') ? theme.colors.primary : 'transparent',
              boxShadow: 'none',
            }}
          >
            <Button
              type="text"
              icon={<BellOutlined style={{ fontSize: '24px', color: theme.colors.text }} />}
              onClick={handleNotificationClick}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            />
          </div>
        </div>
        <div className="flex items-center gap-4 justify-end flex-1">
          {isAuthenticated ? (
            <>
              <Avatar
                size={40}
                icon={<UserOutlined />}
                className="cursor-pointer"
                style={{
                  backgroundColor: theme.colors.primary,
                  boxShadow: 'none',
                }}
                onClick={handleProfileClick}
              />
              <Button
                type="text"
                onClick={handleLogout}
                style={{
                  color: theme.colors.primary,
                  border: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                Đăng xuất
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="mr-4 px-4 py-2 rounded-md transition-all duration-200 ease-in-out hover:bg-opacity-10"
                style={{
                  color: theme.colors.primary,
                  border: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                Đăng nhập
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-md transition-all duration-200 ease-in-out hover:bg-opacity-10"
                style={{
                  backgroundColor: 'transparent',
                  color: theme.colors.primary,
                  border: 'none',
                }}
              >
                Tạo tài khoản
              </Link>
            </>
          )}
        </div>
      </Header>
    </>
  );
}

export default Navbar;