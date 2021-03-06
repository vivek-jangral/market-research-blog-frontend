import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer id='footer'>
				<div className='footer-two'>
					<i className='material-icons copyright'>copyright</i>
					<a
						href='/privacy'
						style={{ letterSpacing: '0.5px' }}
						className='footer-text grey-text text-lighten-4'
					>
						2020 MarketGad. All rights reserved.
					</a>
				</div>
			</footer>
		</div>
	);
};
export default Footer;
