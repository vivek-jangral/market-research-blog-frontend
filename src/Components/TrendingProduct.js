import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import ShowComment from './ShowComment';
import FadingLoader from './FadingLoader';

import { Link, Redirect } from 'react-router-dom';

const TrendingProduct = (props) => {
	const token = Cookies.get('session-id');
	// const [ products, setProducts ] = React.useState('');

	const ProductCard = (props) => {
		const product = props.product;
		const weblink = props.weblink;
		return (
			<div>
				<ul className='collection product-container'>
					<li className='collection-item avatar trending-product-container'>
						<Link
							to={{
								pathname: `/p${product._id}`,
								state: { product: product, weblink: weblink }
							}}
						>
							<img
								style={{ left: '0px !important' }}
								className='circle trend-img'
								src={product.logo}
								alt={product.name}
							/>
						</Link>

						<div className='trending-product-left-container'>
							<Link
								style={{ color: 'black' }}
								className=' product-content product-name'
								to={{
									pathname: `/p${product._id}`,
									state: { product: product, weblink: weblink }
								}}
							>
								{product.name}
							</Link>
							<div className='product-desc'>{product.briefDescription}</div>

							<div className='row product-link-container'>
								<div className='col l2 s4 comment-box'>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href={weblink}
										className='waves-effect waves-light btn-small visit-btn'
									>
										{/* <span className='comment-count'>visit</span> */}
										<span
											className='material-icons chat-icon'
											style={{
												position: 'relative',
												padding: '0 5px',
												fontSize: '16px'
											}}
										>
											near_me
										</span>
									</a>
								</div>
								<div className='col l3 s4 comment-box'>
									<Link
										to={{
											pathname: `/p${product._id}`,
											state: { product: product, weblink: weblink }
										}}
										className='waves-effect waves-light btn-small visit-btn'
									>
										<span className='comment-count'>{product.comments.length}</span>
										<span
											className='material-icons chat-icon'
											style={{
												position: 'relative',
												padding: '0 5px',
												fontSize: '16px'
											}}
										>
											chat
										</span>
									</Link>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		);
	};

	const showProducts = props.trending.length ? (
		props.trending.slice(0).reverse().map((product, index) => {
			if (!/^https?:\/\//.test(product.websiteLink)) {
				let weblink = 'https://' + product.websiteLink;
				return <ProductCard key={index} product={product} weblink={weblink} />;
			} else return <ProductCard key={index} product={product} weblink={product.websiteLink} />;
		})
	) : (
		<div className='center' />
	);

	return (
		<div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
			{props.trending && <div>{showProducts}</div>}
			{props.trending.length == 0 && (
				<div>
					<FadingLoader imagetype='circle' loadno={3} />
				</div>
			)}
		</div>
	);
};

export default TrendingProduct;
