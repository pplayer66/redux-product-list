import { combineReducers } from 'redux';
import products from './products_reducer';
import isAdding from './adding_product';
import id from './current_product';

const rootReducer = combineReducers({
	products,
	isAdding,
	currentProduct: id
});

export default rootReducer;