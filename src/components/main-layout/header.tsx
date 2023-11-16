import React from 'react';
import { Col,Image } from 'antd';
import Logo from 'assets/svg/logo.svg';
import Profile from './profile';
import StyledHeaderRow from './header.styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <StyledHeaderRow align='middle' justify='space-between'>
      <Col>
        <Link to='/'>
          <Image src={Logo} height={20} preview={false} />
        </Link>
      </Col>
      <Col>
        <Profile />
      </Col>
    </StyledHeaderRow>
  );
};

export default Header;
