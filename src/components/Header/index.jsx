import React from 'react';
import { connect, useSelector } from 'react-redux'

import { Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import MyNavLink from '../MyNavLink'

import './index.css'


function Header() {

  const count = useSelector(state => state.length)

  return (
    <header>
      {/* 分頁按鈕 */}
      <Row style={{textAlign: 'center'}}>
        <Col className="navbar" xs={6}  sm={8} md={6} lg={6}>
          {/* <img src={process.env.REACT_APP_URL + '/img/logo.png'} alt="" /> */}
          <MyNavLink to="/">
            <img src="/logo.png" alt="" className="logo-btn"/>
          </MyNavLink>
        </Col>
        <Col className="navbar2" xs={12} sm={8} md={12} lg={12}>
          TB 收藏區
        </Col>
        <Col className="navbar" xs={6} sm={8} md={6} lg={6}>
          <div className="likes-btn">
            <MyNavLink to="/likes">
              <FontAwesomeIcon icon={faHeart} style={{color: '#7d879c', height: "100%", width: '35px'}}/>
            </MyNavLink>
              <span className="likes-qty">{count}</span>
          </div>
        </Col>
      </Row>
    </header>
  )
}

export default connect()(Header)