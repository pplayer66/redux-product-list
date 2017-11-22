import {PRODUCT_EDIT} from '../actions';

export default function(prevState = null, action) {
	if (action.type == PRODUCT_EDIT)
		return action.payload;
	return prevState;
};