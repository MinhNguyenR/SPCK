import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import TrangChu from './TrangHoatDong/TrangChu.jsx';
import Setting, { ThemeProvider } from './Setting/Setting.jsx';
import TinNhan from './TrangHoatDong/TinNhan.jsx';
import ThongBao from './TrangHoatDong/ThongBao.jsx';
import CuaHang from './TrangHoatDong/CuaHang.jsx';
import Nhom from './TrangHoatDong/Nhom.jsx';
import BanBe from './TrangHoatDong/BanBe.jsx';
import DangNhap from './TrangHoatDong/DangNhap.jsx';
import DangKy from './TrangHoatDong/DangKy.jsx';
import GiaoDien from './TrangHoatDong/GiaoDien.jsx';
import QuyenRiengTu from './TrangHoatDong/QuyenRiengTu.jsx';
import CaiDatTaiKhoan from './TrangHoatDong/CaiDatTaiKhoan.jsx';
import ThemDonHang from './TrangHoatDong/ThemDonHang.jsx';
import ThemNhom from './TrangHoatDong/ThemNhom.jsx';
import ThemBaiViet from './TrangHoatDong/ThemBaiViet.jsx'; 

const { Content } = Layout;

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout className="min-h-screen">
          <Content>
            <Routes>
              <Route path="/" element={<TrangChu />} />
              <Route path="/messages" element={<TinNhan />} />
              <Route path="/notifications" element={<ThongBao />} />
              <Route path="/marketplace" element={<CuaHang />} />
              <Route path="/marketplace/add" element={<ThemDonHang />} />
              <Route path="/groups" element={<Nhom />} />
              <Route path="/groups/add" element={<ThemNhom />} />
              <Route path="/friends" element={<BanBe />} />
              <Route path="/login" element={<DangNhap />} />
              <Route path="/register" element={<DangKy />} />

              <Route path="/settings" element={<Setting />} />
              <Route path="/settings/theme" element={<GiaoDien />} />
              <Route path="/settings/privacy" element={<QuyenRiengTu />} />
              <Route path="/settings/account" element={<CaiDatTaiKhoan />} />
              <Route path="/create-post" element={<ThemBaiViet />} /> 
            </Routes>
          </Content>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;