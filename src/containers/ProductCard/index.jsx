import React from 'react';
import { Row, Col, Layout } from 'antd';
import { Button, Card, Image } from 'antd';
import Loading from '../../components/Loading'

import { createAddLikes } from '../../redux/actions/likes'
import { connect } from 'react-redux'

import './index.css'

const { Content } = Layout;
const { Meta } = Card;

class ProductCard extends React.Component{

  state = {
    products: [],
    loading: true
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true })
    try{
      // const url = `${process.env.REACT_APP_API}/api/${process.env.REACT_APP_PATH}/products/all`
      const url = `https://vue3-course-api.hexschool.io/api/tb-ecommerce/products/all`
      const response = await fetch(url)
      const resObj = await response.json()
      this.setState({
        products: resObj.products,
        loading: false
      })
    }
    catch(error) {
      this.setState({ loading: false })
    }
  }

  addLikes = (prodObj) => {
    this.props.addToLikes(prodObj);
  }

  render() {
    const { products, loading } = this.state
    return (
      <>
        {
          loading ? 
          (
            <main>
              <Loading />
            </main>
          ) :
          <Content className="card-content">
            <Row gutter={16}>
              {
                products.map((prodObj) => {
                  return (
                    <Col span={8} xs={12} sm={12} md={8} lg={4} key={prodObj.id}>
                      <Card
                        cover={<Image src={prodObj.imageUrl}/>}
                        className="card-custom"
                      >
                        <Meta title={prodObj.title} style={{marginBottom: '1rem'}} />
                        <Button style={{fontWeight: 'bold' }} onClick={() => this.addLikes(prodObj)}>加入最愛</Button>
                      </Card>
                    </Col>
                  )
                })
              }
            </Row>
          </Content>
        }
    </>
    )
  }
}

export default connect(
  state => ({ products: state }),
  { addToLikes: createAddLikes }
)(ProductCard)