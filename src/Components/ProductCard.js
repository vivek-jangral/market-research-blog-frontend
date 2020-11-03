import React from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		width: '100%',
		margin: '0'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12,
		padding: '0'
	}
});

const ProductCard = (props) => {
	const classes = useStyles();
	const token = Cookies.get('session-id');
	const weblink = props.weblink;
	const product = props.product === undefined ? [] : props.product;
	if (product.upvotesList === undefined) {
		product.upvotesList = [];
	}
	const { setOpenSignin } = props;
	if (token) {
		const token_id = JSON.parse(atob(token.split('.')[1]));
		var user_id = token_id._id;
	}
	const [ upvote, setUpvote ] = React.useState(product.upvotes);
	const [ activeupvote, setactiveupvote ] = React.useState(false);

	const addUpvote = (product_id, product) => {
		if (!token) {
			setOpenSignin(true);
			return;
		}
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		const token_info = JSON.parse(atob(token.split('.')[1]));
		if (product.upvotesList.includes(token_info._id)) {
			alert('already upvoted');
		} else {
			setUpvote(product.upvotes + 1);
			setactiveupvote(true);
			axios
				.post(process.env.REACT_APP_BASEURL + '/api/productdetails/' + product_id + '/upvotes/add', {}, config)
				.then(
					(response) => {
						console.log('added');
					},
					(error) => {
						console.log(error);
						// alert(error);
					}
				);
		}
	};

	return (
		<Card
			className={classes.root}
			style={{
				backgroundImage: `url(${product.theme ||
					'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603981180/Theme/Woovly_wvejpm.jpg'})`,
				backgroundSize: '100% 100%',
				backgroundRepeat: 'no-repeat',
				margin: '10px 0'
			}}
		>
			<CardContent>
				<div style={{ margin: '0', position: 'relative', top: '-35px' }}>
					{product.upvotesList.includes(user_id) && (
						<div className='secondary-content'>
							<div
								style={{
									position: 'absolute',
									right: '30px'
								}}
							>
								<img
									src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603991888/Theme/Upvote_Icon_Clicked_fubsbj.png'
									alt='clickedbulb'
									width='50px'
								/>
							</div>
							<div
								className='right-align'
								style={{
									top: '1.3em',
									fontSize: '16px',
									fontWeight: '800',
									position: 'relative',
									color: 'white',
									borderBottom: '2px solid'
								}}
							>
								{upvote}
							</div>
						</div>
					)}
					{activeupvote === true && (
						<div className='secondary-content'>
							<div
								style={{
									position: 'absolute',
									right: '30px'
								}}
							>
								<img
									src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603991888/Theme/Upvote_Icon_Clicked_fubsbj.png'
									alt='clickedbulb'
									width='50px'
								/>
							</div>
							<div
								className='right-align'
								style={{
									top: '1.3em',
									fontSize: '16px',
									fontWeight: '800',
									position: 'relative',
									color: 'white',
									borderBottom: '2px solid'
								}}
							>
								{upvote}
							</div>
						</div>
					)}
					{(!product.upvotesList.includes(user_id) || !token) &&
					activeupvote === false && (
						<div className='secondary-content'>
							<div
								onClick={() => addUpvote(product._id, product)}
								style={{
									position: 'absolute',
									right: '30px',
									cursor: 'pointer'
								}}
							>
								<img
									src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1604412704/Theme/Upvote_Icon_tvffmk.png'
									width='50px'
								/>
							</div>
							<div
								className='right-align'
								style={{
									top: '1.3em',
									fontSize: '16px',
									fontWeight: '800',
									position: 'relative',
									color: 'white',
									borderBottom: '2px solid'
								}}
							>
								{upvote}
							</div>
						</div>
					)}

					<h5
						style={{
							textAlign: 'left',
							padding: '20px 0',
							color: 'white'
						}}
					>
						<Link to={`products/${product._id}`}>
							<img src={product.logo} height='40px' />
						</Link>
					</h5>
				</div>

				<Typography
					variant='h5'
					component='h2'
					className='prodcard-desc right-align'
					style={{
						color: 'white',
						height: '70px',
						position: 'relative',
						top: '-2em',
						fontWeight: '600',
						fontSize: '16px',
						paddingLeft: '40%'
					}}
				>
					{product.briefDescription}
				</Typography>
			</CardContent>
			<CardActions style={{ float: 'right' }}>
				<Link to={`products/${product._id}?q=comment`}>
					<Button
						className='card-pdt'
						style={{
							backgroundColor: 'white',
							maxWidth: '50px',
							maxHeight: '35px',
							minWidth: '50px',
							minHeight: '35px'
						}}
					>
						<TextsmsOutlinedIcon style={{ color: 'black' }} />
					</Button>
				</Link>
				<a target='_blank' rel='noopener noreferrer' href={weblink}>
					<Button
						style={{
							backgroundColor: 'white',
							maxWidth: '50px',
							maxHeight: '35px',
							minWidth: '50px',
							minHeight: '35px'
						}}
					>
						<SendOutlinedIcon style={{ color: 'black' }} />
					</Button>
				</a>
			</CardActions>
		</Card>
	);
};
export default ProductCard;

// <li className='collection-item avatar'>
// 	<Link to={`products/${product._id}`}>
// 		<img className='circle pro-img' src={product.logo} alt={product.name} />
// 	</Link>

// 	<div className='product-right-container'>
// 		<Link
// 			style={{ color: 'black' }}
// 			className='product-content product-name'
// 			to={`products/${product._id}`}
// 		>
// 			{product.name}
// 		</Link>
// 		<div className='product-desc'>{product.briefDescription}</div>
// 		<div className='row product-link-container'>
// 			<div className='col l1 s3 comment-box'>
// 				<a
// 					target='_blank'
// 					rel='noopener noreferrer'
// 					href={weblink}
// 					className='waves-effect waves-light btn-small visit-btn'
// 				>
// 					{/* <span className='comment-count'>visit</span> */}
// 					<span
// 						className='material-icons chat-icon'
// 						style={{
// 							position: 'relative',
// 							padding: '0 5px',
// 							fontSize: '16px'
// 						}}
// 					>
// 						near_me
// 					</span>
// 				</a>
// 			</div>
// 			<div className='col l2 s4 comment-box'>
// 				<Link
// 					to={`products/${product._id}?q=comment`}
// 					className='waves-effect waves-light btn-small visit-btn'
// 				>
// 					<span className='comment-count'>{product.comments.length}</span>
// 					<span
// 						className='material-icons chat-icon'
// 						style={{
// 							position: 'relative',
// 							padding: '0 5px',
// 							fontSize: '16px'
// 						}}
// 					>
// 						chat
// 					</span>
// 				</Link>
// 			</div>
// 		</div>
//
// 	</div>
// </li>
