import React, { Component } from 'react';
import Product from '../components/Product';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectProduct } from './../actions/product-select';
import ProductDetails from './ProductDetails';
import { fetchProducts } from "../actions/product-actions";


class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    var self = this;
    
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="ui segment" style={{ height: 100 + '%' }}>
        <div className="ui column stackable center aligned grid" style={{ height: 100 + '%' }}>
          <div className="top aligned row" style={{ height: 100 + '%' }}>
            <div className="three wide column" style={{ height: 100 + '%' }}>
              <div className="ui cards" style={{ overflow: 'auto', height: 100 + '%' }}>
                {this.props.products.map(function (product, index) {
                  return <Product key={index} product={product} onProductSelectCallback={self.props.selectProduct}></Product>;
                })}
              </div>
            </div>
            <div className="eleven wide column">
              <ProductDetails></ProductDetails>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectProduct: selectProduct,
    fetchProducts: fetchProducts
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Products);