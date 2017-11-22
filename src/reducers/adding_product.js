import {ENABLE_ADDING, CANCEL_ADDING} from '../actions';

export default function(st = false, action) {
	switch (action.type){
		case ENABLE_ADDING:
			return true;
		case CANCEL_ADDING:
			return false;
		default:
			return st;
	}
};