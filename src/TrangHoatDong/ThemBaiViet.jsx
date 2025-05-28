import React, { useContext } from 'react';
import { Layout, Typography, Input, Button, Avatar, Select } from 'antd'; // Import Select
import { CloseOutlined, SmileOutlined, PlusOutlined, PictureOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Navbar from '../ChucNang/Navbar';
import { ThemeContext } from '../Setting/Setting';

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select; // Destructure Option from Select

function ThemBaiViet() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Quay lại trang chủ
  };

  const handlePost = () => {
    console.log('Đăng bài clicked!');
    // Logic để xử lý bài đăng
    navigate('/'); // Quay lại trang chủ sau khi đăng bài
  };

  return (
    <Layout className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      <Navbar />
      <Content className="flex items-center justify-center p-6 flex-1 pt-16"> {/* pt-16 để tránh bị Navbar che */}
        <div
          className="bg-white rounded-lg shadow-lg w-full max-w-xl flex flex-col"
          style={{ backgroundColor: theme.colors.siderBackground, color: theme.colors.text }}
        >
          {/* Header của Modal */}
          <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: theme.colors.text + '20' }}>
            <Title level={4} className="mb-0" style={{ color: theme.colors.text }}>Tạo bài viết</Title>
            <Button
              type="text"
              icon={<CloseOutlined style={{ color: theme.colors.text }} />}
              onClick={handleClose}
              className="hover:bg-gray-200 rounded-full"
            />
          </div>

          {/* Thông tin người dùng và lựa chọn quyền riêng tư */}
          <div className="flex items-center p-4">
            <Avatar icon={<PictureOutlined />} style={{ backgroundColor: theme.colors.primary }} />
            <div className="ml-3">
              <Paragraph className="font-bold mb-0" style={{ color: theme.colors.text }}>Minh Nguyễn</Paragraph>
              {/* Thay thế Paragraph "Công khai" bằng Select */}
              <Select
                defaultValue="public"
                style={{ width: 120, color: theme.colors.text }}
                bordered={false} // Bỏ viền để trông tự nhiên hơn
                dropdownStyle={{ backgroundColor: theme.colors.siderBackground }} // Màu nền dropdown
              >
                <Option value="public" style={{ color: theme.colors.text }}>Công khai</Option>
                <Option value="friends" style={{ color: theme.colors.text }}>Bạn bè</Option>
              </Select>
            </div>
          </div>

          {/* Ô nhập nội dung */}
          <div className="p-4 flex-1">
            <TextArea
              placeholder="Minh ơi, bạn đang nghĩ gì thế ?"
              autoSize={{ minRows: 4, maxRows: 10 }}
              className="w-full border-none focus:ring-0 resize-none"
              style={{
                backgroundColor: 'transparent',
                color: theme.colors.text,
                fontSize: '1.125rem', // text-lg
              }}
            />
            <div className="flex justify-end mt-2">
              <SmileOutlined style={{ fontSize: '20px', color: theme.colors.text + '80' }} />
            </div>
          </div>

          {/* Phần thêm ảnh/video */}
          <div className="p-4 mx-4 mb-4 border rounded-lg flex flex-col items-center justify-center" style={{ borderColor: theme.colors.text + '40', backgroundColor: theme.colors.background }}>
            <div className="text-center p-4">
              <PlusOutlined style={{ fontSize: '40px', color: theme.colors.text + '80' }} />
              <Paragraph className="mt-2" style={{ color: theme.colors.text }}>Thêm ảnh/video</Paragraph>
              <Paragraph className="text-sm" style={{ color: theme.colors.text + 'B0' }}>hoặc kéo và thả</Paragraph>
            </div>
            {/* Đã bỏ nút "Thêm ảnh và video từ thiết bị di động." */}
            <Button
              type="primary"
              className="mt-2"
              style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.primary }}
            >
              Thêm
            </Button>
          </div>

          {/* Nút Đăng */}
          <div className="p-4 border-t" style={{ borderColor: theme.colors.text + '20' }}>
            <Button
              type="primary"
              className="w-full"
              size="large"
              onClick={handlePost}
              style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.primary }}
            >
              Đăng
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default ThemBaiViet;