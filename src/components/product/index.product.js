import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { store, history } from '../../redux-saga/store/store';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisibal: false,
            loginRedirect:false,
        }
    }

    componentDidMount() {
        // console.log('ProductImages',this.props.product_items.ProductImages[0].ImagePath)
    }
    setModalVisibal(modalVisibal) {
        // console.log(this.props.item)
        this.setState({ modalVisibal: !modalVisibal })
    }
    addCartHandler = (modalVisibality, itemDetail) => {
        let checkLogin = localStorage.getItem('login_detail');
        if (checkLogin) {
            console.log('True')
            console.log(checkLogin, 'Modal item detail', itemDetail)
            alert('Thank you for')
            this.setModalVisibal(modalVisibality);
        } else {
            this.setState({loginRedirect:true})
            
        }
    }
    //props
    //product_items
    render() {
        const { modalVisibal } = this.state;
        if(this.state.loginRedirect){
            return <Redirect  to={{pathname:'/login'}} />
        }
        // console.log(this.props.item)
        if (this.props.product_items === null) {
            return <h1>No Data Here</h1>
        } else {
            const { ProductImages, Name, VendorName, BrandName,
                price, rating, DiscountPercentage, RetailPrice,
                category } = this.props.product_items;

            return (
                <Link onClick={(e) => e.preventDefault()} >
                    {/* this tag replaced by uper wala div */}
                    <span onClick={() => this.setModalVisibal(modalVisibal)}>
                        <Modal isOpen={modalVisibal} toggle={() => this.setModalVisibal(modalVisibal)} className={'this.this.props.className'}>
                            <ModalBody>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="boxImage">
                                                {/* <img src={require('../../assets/products/3.png')} alt="" /> */}
                                                <img src={ProductImages[0].ImagePath} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="contnetOne">
                                                <h6>{Name}</h6>
                                                <p> {`${VendorName} From ${BrandName}`}</p>
                                                <span>{'newProduct' ? 'New !' : null}</span>
                                            </div>
                                            <div className="contnetTwo">
                                                <h6> PKR {RetailPrice}</h6>
                                                {DiscountPercentage ? <p>With  additional <span>+{DiscountPercentage}%</span> discount</p> : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => this.addCartHandler(modalVisibal, this.props.product_items)}>Buy-Now</Button>
                            </ModalFooter>
                        </Modal>
                        <div className="standardBox1">
                            <div className="boxImage">
                                {/* <img src={require('../../assets/products/3.png')} alt="" /> */}
                                <img src={ProductImages[0].ImagePath} alt="" />
                            </div>
                            <div className="contentWrap">
                                <div className="contnetOne">
                                    <h6>{Name}</h6>
                                    <p> {`${VendorName} From ${BrandName}`}</p>
                                    <span>{'newProduct' ? 'New !' : null}</span>
                                </div>
                                <div className="contnetTwo">
                                    <h6>starting at <span> PKR {RetailPrice}</span></h6>
                                    {DiscountPercentage ? <p>With  additional <span>+{DiscountPercentage}%</span> discount</p> : null}
                                </div>
                            </div>
                        </div>
                    </span>
                </Link>
            )
        }
    }
}

export default Product;