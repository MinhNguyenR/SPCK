import React, { useContext } from 'react';
import { Layout, Input, Button, Avatar, Card, Menu } from 'antd';
import {
    UserOutlined,
    SettingOutlined,
    UsergroupAddOutlined,
    ShopOutlined,
    BellOutlined,
    PictureOutlined,
    TagOutlined,
    MessageOutlined, 
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../ChucNang/Navbar';
import { ThemeContext } from '../Setting/Setting';

const { Content, Sider } = Layout;
const { Search } = Input;

function TrangChuDN() {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const menuItems = [
        {
            key: 'friends',
            icon: <UserOutlined style={{ color: theme.colors.text }} />,
            label: <Link to="/friends" style={{ color: theme.colors.text }}>Bạn bè</Link>,
            className: 'hover:bg-opacity-10 rounded-lg transition-colors duration-200 ease-in-out'
        },
        {
            key: 'groups',
            icon: <UsergroupAddOutlined style={{ color: theme.colors.text }} />,
            label: <Link to="/groups" style={{ color: theme.colors.text }}>Nhóm</Link>,
            className: 'hover:bg-opacity-10 rounded-lg transition-colors duration-200 ease-in-out'
        },
        {
            key: 'marketplace',
            icon: <ShopOutlined style={{ color: theme.colors.text }} />,
            label: <Link to="/marketplace" style={{ color: theme.colors.text }}>Cửa hàng</Link>,
            className: 'hover:bg-opacity-10 rounded-lg transition-colors duration-200 ease-in-out'
        },
        {
            key: 'settings',
            icon: <SettingOutlined style={{ color: theme.colors.text }} />,
            label: <Link to="/settings" style={{ color: theme.colors.text }}>Cài đặt</Link>,
            className: 'hover:bg-opacity-10 rounded-lg transition-colors duration-200 ease-in-out'
        },
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

    const commonCardShadow = theme.mode === 'light' ? '0 8px 20px rgba(0,0,0,0.08)' : '0 8px 20px rgba(0,0,0,0.3)';

    return (
        <Layout className="min-h-screen" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
            <Navbar />

            <Layout className="pt-16">
                <Sider width={200} className="p-4"
                    style={{
                        backgroundColor: theme.colors.siderBackground,
                        color: theme.colors.text,
                        borderRadius: '0 16px 16px 0',
                        boxShadow: commonCardShadow,
                        transition: 'all 0.3s ease-in-out'
                    }}>
                    <Menu
                        mode="vertical"
                        items={menuItems}
                        style={{ backgroundColor: theme.colors.siderBackground, color: theme.colors.text }}
                        className="custom-menu-styles"
                    />
                </Sider>
                <Content className="p-6" style={{ backgroundColor: theme.colors.background }}>
                    <div className="max-w-3xl mx-auto">
                        <Card
                            className="mb-6 transition-all duration-300 ease-out hover:shadow-lg transform hover:scale-[1.01]"
                            style={{
                                backgroundColor: theme.colors.siderBackground,
                                color: theme.colors.text,
                                borderRadius: '16px',
                                boxShadow: commonCardShadow,
                                border: 'none'
                            }}>
                            <div className="flex items-center gap-4">
                                <Avatar icon={<UserOutlined />} style={{ backgroundColor: theme.colors.primary, boxShadow: 'none' }} />
                                <div
                                    className="flex-1 cursor-pointer p-3 rounded-lg hover:bg-opacity-10 transition-colors duration-200 ease-in-out"
                                    onClick={() => navigate('/create-post')}
                                    style={{
                                        backgroundColor: theme.colors.background,
                                        color: theme.colors.text + '80',
                                        minHeight: '44px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        border: '1px solid ' + theme.colors.text + '20',
                                        boxShadow: 'none',
                                    }}
                                >
                                    Bạn đang nghĩ gì?
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center items-center gap-6">
                                <Button
                                    type="text"
                                    icon={<PictureOutlined style={{ fontSize: '20px', color: theme.colors.primary }} />}
                                    onClick={() => navigate('/create-post')}
                                    style={{ color: theme.colors.text }}
                                    className="hover:bg-opacity-10 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.01]"
                                >
                                    Ảnh/Video
                                </Button>
                                <Button
                                    type="text"
                                    icon={<TagOutlined style={{ fontSize: '20px', color: theme.colors.primary }} />}
                                    onClick={() => navigate('/create-post')}
                                    style={{ color: theme.colors.text }}
                                    className="hover:bg-opacity-10 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.01]"
                                >
                                    Tag tên
                                </Button>
                                <Button
                                    type="primary"
                                    style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.primary, borderRadius: '10px' }}
                                    className="hover:opacity-80 transition-opacity duration-200 ease-in-out transform hover:scale-[1.01]"
                                >
                                    Đăng bài
                                </Button>
                            </div>
                        </Card>
                        <Card
                            className="mb-4 transition-all duration-300 ease-out hover:shadow-lg transform hover:scale-[1.01]"
                            style={{
                                backgroundColor: theme.colors.siderBackground,
                                color: theme.colors.text,
                                borderRadius: '16px',
                                boxShadow: commonCardShadow,
                                border: 'none'
                            }}>
                            <div className="flex items-start gap-4">
                                <Avatar icon={<UserOutlined />} style={{ backgroundColor: theme.colors.primary, boxShadow: 'none' }} />
                                <div>
                                    <h4 className="font-bold" style={{ color: theme.colors.text }}>Người dùng mẫu</h4>
                                    <p className="text-sm" style={{ color: theme.colors.text + 'B0' }}>2 giờ trước</p>
                                    <p className="mt-2" style={{ color: theme.colors.text }}>Đây là một bài đăng mẫu trên mạng xã hội của chúng ta!</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Content>
                <Sider width={300} className="p-4"
                    style={{
                        backgroundColor: theme.colors.siderBackground,
                        color: theme.colors.text,
                        borderRadius: '16px 0 0 16px',
                        boxShadow: commonCardShadow,
                        transition: 'all 0.3s ease-in-out'
                    }}>
                    <Card
                        title={<span style={{ color: theme.colors.text }}>Tiện ích</span>}
                        className="mb-4 transition-all duration-300 ease-out hover:shadow-lg transform hover:scale-[1.01]"
                        style={{
                            backgroundColor: theme.colors.background,
                            color: theme.colors.text,
                            borderRadius: '16px',
                            boxShadow: commonCardShadow,
                            border: 'none'
                        }}>
                        <div className="space-y-4">
                            <div
                                className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-opacity-10 transition-colors duration-200 ease-in-out transform hover:scale-[1.01]"
                                onClick={handleNotificationClick}
                                style={{ color: theme.colors.text, backgroundColor: theme.colors.background }}
                            >
                                <BellOutlined style={{ color: theme.colors.text }} />
                                <span style={{ color: theme.colors.text }}>Thông báo mới</span>
                            </div>
                            <div
                                className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-opacity-10 transition-colors duration-200 ease-in-out transform hover:scale-[1.01]"
                                onClick={handleMessageClick}
                                style={{ color: theme.colors.text, backgroundColor: theme.colors.background }}
                            >
                                <MessageOutlined style={{ color: theme.colors.text }} />
                                <span style={{ color: theme.colors.text }}>Tin nhắn chưa đọc</span>
                            </div>
                        </div>
                    </Card>
                    <Card
                        title={<span style={{ color: theme.colors.text }}>Gợi ý kết bạn</span>}
                        className="mb-4 transition-all duration-300 ease-out hover:shadow-lg transform hover:scale-[1.01]"
                        style={{
                            backgroundColor: theme.colors.background,
                            color: theme.colors.text,
                            borderRadius: '16px',
                            boxShadow: commonCardShadow,
                            border: 'none'
                        }}>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <Avatar icon={<UserOutlined />} style={{ backgroundColor: theme.colors.primary, boxShadow: 'none' }} />
                                    <div>
                                        <p className="font-medium" style={{ color: theme.colors.text }}>Người dùng {i}</p>
                                        <Button
                                            size="small"
                                            type="primary"
                                            style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.primary, borderRadius: '10px' }}
                                            className="hover:opacity-80 transition-opacity duration-200 ease-in-out transform hover:scale-[1.01]"
                                        >
                                            Kết bạn
                                        </Button>
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

export default TrangChuDN;