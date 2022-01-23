import React from 'react';
import { useState, useEffect } from 'react'
import { createDislikes } from '../../redux/actions/likes'
import { connect, useSelector, useDispatch } from 'react-redux'

import { Row, Col, Layout, Empty } from 'antd';
import { Button, Card, Image } from 'antd';
import Loading from '../Loading'
import MyNavLink from '../MyNavLink'

import '../ProductCard/index.css'

const { Content } = Layout;
const { Meta } = Card;

function LikesCard() {

  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const likes = useSelector(state => state)

  function getLikes() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  useEffect(() => {
    getLikes()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  function disLikes(likesObj) {
    dispatch(createDislikes(likesObj))
  }

  return (
    <>
      {
        likes.length === 0 ? (
          <Content className="card-content likes-content">
            <Row gutter={16}>
              <Empty 
                imageStyle={{
                  height: 'auto',
                }}
                description={
                  <>
                    <span>沒有喜好商品</span>
                    <MyNavLink className="empty-link" to="/">回去收藏</MyNavLink>
                  </>
                }
                className="card-empty"
              />
            </Row>
          </Content>
        ) :
        (
          <Content className="card-content" style={{height: '100vh'}}>
              <Row gutter={16}>
                {
                  likes.map((prodObj) => {
                    return (
                      <Col span={8} xs={12} sm={12} md={8} lg={4} key={prodObj.id}>
                        <Card
                          cover={<Image src={prodObj.imageUrl}/>}
                          className="card-custom"
                        >
                          <Meta title={prodObj.title} style={{marginBottom: '1rem'}} />
                          <Button style={{fontWeight: 'bold' }} onClick={() => disLikes(prodObj)}>取消最愛</Button>
                        </Card>
                      </Col>
                    )
                  })
                }
            </Row>
          </Content>
        )
      }
    </>
  )
}

export default connect()(LikesCard)