import { FETCH_PRODUCTS } from '../actions';
import { PRODUCT_DELETE } from '../actions';
import { NEW_PRODUCT } from '../actions';
import { UPDATE_PRODUCT } from '../actions';

export default function(prevState=[], action) {
	switch (action.type){
		case FETCH_PRODUCTS:
			return action.payload.data;
		case PRODUCT_DELETE:
			return action.payload.data;
		case NEW_PRODUCT:
			return [...prevState, action.payload];
		case UPDATE_PRODUCT:
			return [...action.payload];
		default:
			return prevState;
	}
};