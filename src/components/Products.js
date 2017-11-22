import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions';
import Product from './Product';
import ProductForm from './ProductForm';

class Products extends React.Component{

	componentDidMount(){
		this.props.fetchProducts();
	}

	renderProducts(){
		return this.props.products.map(p=>{
			return <Product {...p} key={p.id}/>;
		});
	}

	render(){
		return(
			<div>
				<h1>Product list</h1>
				<div className='product-list'>
					<div className='header'>
						<div>ID</div>
						<div>Name</div>
						<div>Amount</div>
						<div>Price</div>
						<div>Action</div>
						<div>Action</div>
					</div>
					{this.renderProducts()}
				</div>
				<ProductForm />
			</div>
		)
	}
}

function mapStateToProps({products}) {
	return {products};
}

export default connect(mapStateToProps, {fetchProducts})(Products);