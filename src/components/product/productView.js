import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,ButtonGroup} from 'reactstrap';
import ProductImage from './image.product';


class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisibal: false,
        }
    }

    setModalVisibal(modalVisibal) {
        // console.log(this.props.item)
        this.setState({ modalVisibal: !modalVisibal })
    }

    render() {
        const { modalVisibal } = this.state;
        if (this.props.item === null) {
            return <h1>No Data Here</h1>
        } else {
            const { name, size, newProduct, brand, price, rating, images, discount, category, imagesArr } = this.props.item;

            return (
                <div className="col-md-4 col-sm-12">
                    <span onClick={() => this.setModalVisibal(modalVisibal)}>
                        <Modal isOpen={modalVisibal} toggle={!modalVisibal} className={'this.this.props.className'}>
                            <ModalBody>

                                <div className="row">
                                    <div className="col-md-6" style={{ border: 'solid black' }}>
                                        <ProductImage p_img={images} imagesArr={imagesArr} zoom={false} />
                                    </div>
                                    <div className="col-md-6" style={{ border: 'solid red' }}>
                                        <p>{newProduct}</p>
                                        <p>{name}</p>
                                        <p>{brand}</p>
                                        <p>{price}</p>
                                        <p>{rating}</p>
                                        <ButtonGroup>
                                            <Button>Left</Button>
                                            <Button>Middle</Button>
                                            <Button>Right</Button>
                                        </ButtonGroup>
                                        <Link
                                            to={{
                                                pathname: `/details/${this.props.item.category.type}/${this.props.item.category.subCat}/${this.props.item.id}`,
                                                // pathname: `/details/:category/:subcategory/:id`,
                                                state: {
                                                    // route: this.this.props.route,
                                                    data: this.props.item,
                                                }
                                            }}
                                        >View Full Details</Link>
                                    </div>
                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => this.setModalVisibal(modalVisibal)}>Add to Cart</Button>
                            </ModalFooter>
                        </Modal>
                        {/* <Link
                    to={{
                        pathname: `/details/${this.props.item.category.type}/${this.props.item.category.subCat}/${this.props.item.id}`,
                        // pathname: `/details/:category/:subcategory/:id`,
                        state: {
                            // route: this.this.props.route,
                            data: this.props.item,
                        }
                    }}
                > */}
                        <div className="standardBox2">
                            <div className="boxImage">
                                <img src={this.props.item.images.image1} alt="" />
                            </div>
                            <h6>{this.props.item ? this.props.item.name : 'Sample'}</h6>
                            <div className="ratingStars">
                                <StarRatings rating={this.props.item ? this.props.item.rating : 3.5}
                                    starDimension="15px"
                                    starRatedColor="green"
                                    starSpacing="2px" />
                            </div>
                            <div className="price">
                                <p>PKR 1,500</p>
                                <h5>PKR 3,500</h5>
                            </div>
                        </div>
                    </span >
                    {/* </Link> */}
                </div >
            )
        }
    }
}


export default ProductView;