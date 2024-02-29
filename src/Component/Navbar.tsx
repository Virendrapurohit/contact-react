import React from 'react';
import { Breadcrumb, Button, Layout, } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

//import { Link } from 'react-router-dom';

const { Content, } = Layout;

const Navbar1 = () => {

  return (

    <Layout>
      {/* <Link to={'/Getdata'}><Button>Data</Button></Link>  */}
      <Content
        style={{
          padding: '0 48px',
        }}>

        <Breadcrumb className='Navfixed'>
          <Breadcrumb.Item> <NavLink to={'/TabelData'}><Button icon={<SearchOutlined />}> Dashboard</Button></NavLink>  </Breadcrumb.Item>
        </Breadcrumb>
      </Content>
    </Layout>
  );
};
export default Navbar1;