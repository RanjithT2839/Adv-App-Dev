import { useState } from 'react';
import { Button, Layout } from 'antd';
import "../assets/css/Sidebar.css";
import { Link } from 'react-router-dom';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header, Sider } = Layout;

function Sidebar() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setcollapsed] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

    return (
      <div>
      <div>
    <Layout>
      <Sider collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? 'dark' : 'light'}
        className='sidebar'>
        <Layout>
          <Header style={{
            width: '210vh',
            backgroundColor:'#001529'
          }}>
          <Button
          type='text'
          className='toggle'
          style={{ color: 'white', ':hover': { color: '#2E8BC0' } }}
          onClick={() => setcollapsed(!collapsed)}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        />        
              <Link to="/Profile" className="link">Profile</Link>
            <Link to="/About" className="link">About Us</Link>{'    '}
            <Link to="/Contact" className="link">Contact Us</Link>
          </Header>
        </Layout>
        <center>
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme}
        toggleTheme={toggleTheme} />
        </center>
        </Sider>
        </Layout>
    </div>
    </div>
  );
}

export default Sidebar;