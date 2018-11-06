import { combineReducers } from 'redux';
import productReducer from './products';
import ActiveProduct from './active-product';

const allReducers = combineReducers({
    products: productReducer,
    activeProduct: ActiveProduct
})

export default allReducers;