import React from 'react';
import Internshiplist from '../Components/internshiplist';
import Joblist from '../Components/Joblist';
import PeopleList from '../Components/PeopleList';

const ListProduct = () => {
	return (
		<div>
			<div className='product-job-page-container'>
				<div className='row'>
					<div className='col s12 l8'>
						<div className='job-page-head'>Trending jobs</div>
						<Joblist />
						<div className='product-page-head'>Internships</div>
						<Internshiplist />
					</div>
					<div className='col s12 l4 joblist'>
						<div className='row' style={{ margin: '0', padding: '0' }}>
							<div className='col s12 m8'>
								<div className='product-page-head left-head' style={{ paddingTop: '5px' }}>
									Trending talents
								</div>
								<h6 className='product-quote'>Open for opportunities</h6>
							</div>
							<div className='col s4'>
								<div className='right-align'>
									<a
										className='waves-effect waves-light btn-small pro-btn1 add-mobile-btn'
										href='/registerforjobs'
									>
										Add profile
									</a>
								</div>
							</div>
						</div>
						<PeopleList />
					</div>
				</div>
			</div>
		</div>
	);
};
export default ListProduct;
