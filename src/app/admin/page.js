"use client"
import React, { useState, useEffect } from 'react';
import { deleteUserApi, getAllUserApi } from '../action/service/userApi';
import { Layout, Table, Input, Button, Pagination, Form, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

const page = () => {
  const [dataSource, setDataSource] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [show, setShow] = useState(false);

  const handleDelete = async (id) => {
    try {
      await deleteUserApi(id);
      setDataSource(prevDataSource => prevDataSource.filter(user => user.id !== id));
      setFilteredData(prevFilteredData => prevFilteredData.filter(user => user.id !== id));
      setDataSource(currentData)
      setShow(true)
    } catch (error) {
      alert('Delete failed');
    }
  };

  const columns = [
    { title: 'id', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { 
      title: 'Image', 
      dataIndex: 'avatar', 
      key: 'avatar', 
      render: (text) => <img src={text} alt="avatar" style={{ width: 50, height: 50 }} /> 
    },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Position', dataIndex: 'role', key: 'role' },
    {
      title: 'Action', 
      dataIndex: 'id', 
      key: 'action', 
      render: (value, record) => (
        <span>
          <Button type="link" onClick={() => alert(`Detail for ${record.name}`)}>Detail</Button>
          <Button type="link" onClick={() => alert(`Update ${record.name}`)}>Update</Button>
          <Button type="link" onClick={() => handleDelete(record.id)
          } danger>Delete</Button>
        </span>
      )
    },
  ];

  useEffect(() => {
    let timer;
    if (show) {
      timer = setTimeout(() => {
        setShow(false);
      }, 2500); // 3000ms tương đương 3 giây
    }
    return () => clearTimeout(timer);
  }, [show]);

  const text = (
    <div id='toast'>
      <div className="popup toast--success">
        <div className="toast__icon">
          <i className="fa fa-check-circle"></i>
        </div>
        <div className="toast__body">
          <h4 className='toast_title'>Success</h4>
          <p className='toast_msg'>Delete User Success</p>
        </div>
        <div className="toast__close">
          <i className="fa fa-times"></i>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const dataUser = await getAllUserApi();
      setDataSource(dataUser);
      setFilteredData(dataUser);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = dataSource.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const currentData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <Layout>
      <Header>
        <div style={{ color: 'white', fontSize: '24px' }}>User Management</div>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Title level={3}>Thêm quản trị viên</Title>
        <Form layout="inline" style={{ marginBottom: '20px' }}>
          <Form.Item>
            <Input
              placeholder="Nhập vào tên tài khoản hoặc tên người dùng"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSearch}>Search</Button>
          </Form.Item>
        </Form>
        {show && text}
        <h6>{filteredData.length} Members</h6>
        <Table
          dataSource={currentData}
          columns={columns}
          rowKey="id"
          pagination={false}
          loading={loading}
        />
        <Pagination
          style={{ marginTop: '20px', textAlign: 'right' }}
          total={filteredData.length}
          showSizeChanger
          defaultPageSize={10}
          pageSizeOptions={['5', '10', '20', '50', '70']}
          current={currentPage}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </Content>
    </Layout>
  );
};

export default page;




