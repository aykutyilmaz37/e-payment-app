import React from 'react';
import { Avatar, Space, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { LOGOUT } from 'store/app/types';
import { useNavigate } from 'react-router';
import { UserOutlined } from '@ant-design/icons';
const { Text, Link } = Typography;

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.app.user);
  const navigate = useNavigate();
  const logout = () => {
    dispatch({
      type: LOGOUT,
      payload: null,
    });
    localStorage.removeItem('user');
    navigate('/signup');
  };
  return (
    <Space>
      <Avatar icon={<UserOutlined />} />
      <Text>{user.fullName}</Text>
      <Text>|</Text>
      <Link onClick={logout}>Logout</Link>
    </Space>
  );
};

export default Header;
