import React from 'react';
import {connect} from 'react-redux';
import {cancelAdding, enableAdding, addNewProduct} from '../actions';

class ProductForm extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			Product: {
				id:'',
				name:'',
				amount:'',
				price:''
			}
		}
	}

	cancelAdding(){
		this.setState({
			Product: {
				id:'',
				name:'',
				amount:'',
				price:''
			}
		});
		this.props.cancelAdding();
	}

	enableAdding(){
		this.props.enableAdding();
	}

	addNewProduct(){
		this.setState({
			Product: {
				id:'',
				name:'',
				amount:'',
				price:''
			}
		});
		this.props.addNewProduct(this.state.Product);
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
		if (this.props.isAdding){
			return <div className='input-group'>
					<div className='flex-inline'>
						<input value={this.state.Product.id} onChange={this.handleChange('id')}/>
						<input value={this.state.Product.name} onChange={this.handleChange('name')}/>
						<input value={this.state.Product.amount} onChange={this.handleChange('amount')}/>
						<input value={this.state.Product.price} onChange={this.handleChange('price')}/>
						<div type='submit' className='cancel-button' onClick={this.cancelAdding.bind(this)}>Cancel</div>
						<div type='submit' className='submit-button' onClick={this.addNewProduct.bind(this)}>Submit</div>
					</div>
				</div>
		}else{
			return <div className='add-button' onClick={this.enableAdding.bind(this)}>Add</div>
		}
		return 
	}
}

function mapStateToProps({isAdding}) {
	return {
		isAdding
	};
};

export default connect(mapStateToProps, {cancelAdding, enableAdding,addNewProduct})(ProductForm);