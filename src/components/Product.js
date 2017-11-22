import React from 'react';
import {connect} from 'react-redux';
import {editProduct, deleteProduct, updateProduct} from '../actions';

class Product extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			Product: this.props
		}
	}

	editProduct(){
		this.props.editProduct(this.props.id);
	}

	submitProduct(){
		this.props.updateProduct(this.state.Product);
	}

	cancelEditing(){
		this.props.editProduct(null);
	}

	deleteProduct(){
		this.props.deleteProduct(this.props.id);
	}

	handleChange(propertyName){
		return e => {
			const { Product } = this.state;
			const newProduct = {
				...Product,
				[propertyName]: e.target.value
			};
			this.setState({ Product: newProduct });
		}
	}

	render(){
		if (this.props.product == this.props.id){
			return <div className='flex-inline'>
					<input className='product-edit-input' onChange={this.handleChange('id')} value={this.state.Product.id} disabled/>
					<input className='product-edit-input' onChange={this.handleChange('name')} value={this.state.Product.name}/>
					<input className='product-edit-input' onChange={this.handleChange('amount')} value={this.state.Product.amount}/>
					<input className='product-edit-input' onChange={this.handleChange('price')} value={this.state.Product.price}/>
					<div className='cancel-button' onClick={this.cancelEditing.bind(this)}>Cancel</div>
					<div className='submit-button' onClick={this.submitProduct.bind(this)}>Submit</div>
				</div>
		}else{
			return <div className='product-row'>
				<div className='flex-inline'>
					<div>{this.props.id}</div>
					<div>{this.props.name}</div>
					<div>{this.props.amount}</div>
					<div>{this.props.price}</div>
					<div className='edit-button' onClick={this.editProduct.bind(this)}>edit</div>
					<div className='delete-button' onClick={this.deleteProduct.bind(this)}>delete</div>
				</div>
			</div>
		}
	}
};

function mapStateToProps(state) {
	return {
		product: state.currentProduct
	}
}

export default connect(mapStateToProps, {editProduct, deleteProduct, updateProduct})(Product);

