import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const PRODUCT_EDIT = 'PRODUCT_EDIT';
export const PRODUCT_DELETE = 'PRODUCT_DELETE';
export const ENABLE_ADDING = 'ENABLE_ADDING';
export const CANCEL_ADDING = 'CANCEL_ADDING';
export const NEW_PRODUCT = 'NEW_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export function fetchProducts() {
	const request = axios.get('/getlist');
	return {
		type: FETCH_PRODUCTS,
		payload: request
	}
};

export function editProduct(id) {
	return {
		type: PRODUCT_EDIT,
		payload: id
	}
};

export function deleteProduct(id) {
	const request = axios.get(`/delete?id=${id}`);
	return {
		type: PRODUCT_DELETE,
		payload: request
	}
};

export function enableAdding() {
	return {
		type: ENABLE_ADDING
	}
}

export function cancelAdding() {
	return {
		type: CANCEL_ADDING
	}
}

export function addNewProduct(p) {
	const {id, name, amount, price} = p;
	if (!id || !name || !amount || !price)
		return alert('Пожалуйста, заполните все поля!');
	return function(dispatch, getState) {
		axios.get(`/addproduct?id=${id}&name=${name}&amount=${amount}&price=${price}`)
			.then(function (r) {
				dispatch({type: NEW_PRODUCT, payload: r.data});
				dispatch({type: CANCEL_ADDING});
			})
	}
};

export function updateProduct(p) {
	const {id, name, amount, price} = p;
	if (!id || !name || !amount || !price)
		return alert('Пожалуйста, заполните все поля!');
	return function(dispatch, getState) {
		axios.get(`/updateproduct?id=${id}&name=${name}&amount=${amount}&price=${price}`)
			.then(function (r) {
				dispatch({type: UPDATE_PRODUCT, payload: r.data});
				dispatch({type: PRODUCT_EDIT, payload: null});
			})
	}
};
