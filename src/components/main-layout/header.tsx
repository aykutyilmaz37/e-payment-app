import React from 'react';
import { Col } from 'antd';
import { Logo } from 'assets';
import Profile from './profile';
import StyledHeaderRow from './header.styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <StyledHeaderRow align='middle' justify='space-between'>
      <Col>
        <Link to='/'><Logo width='218' /></Link>
      </Col>
      <Col>
        <Profile />
      </Col>
    </StyledHeaderRow>
  );
};

export default Header;
