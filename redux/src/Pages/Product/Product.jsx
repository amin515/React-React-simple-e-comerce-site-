
import React from 'react'
import Tag from './Tag';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Category from './Category';
import ProductTable from './ProductTable';
import Brand from './Brand';

const Product = () => {


  
  return (
    <div className="container my-5">
        <div className="row justify-content-center">
            <div className="col">
             <div className="card">
                <div className="card-body">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" className='my-5'>
                <Row>
                    <Col sm={3} className='justify-content-center'>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Product</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Category</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Tag</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="four">Brand</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <ProductTable/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Category/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Tag/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="four">
                          <Brand/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
                </div>
             </div>
            </div>
        </div>
    </div>
    
  );
}


export default Product;