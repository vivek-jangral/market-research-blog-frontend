import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const PeopleList = () => {
	const [ people, setPeople ] = React.useState('');

	const loadProducts = async () => {
		try {
			const res = await fetch('https://serieux-saucisson-31787.herokuapp.com/api/jobprofiles');
			const data = await res.json();
			setPeople(data);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		loadProducts();
	}, []);

	const showPeople = people.length ? (
		people.map((user) => {
			const cookie = Cookies.get('session-id');
			if (user.user) {
				return (
					<div>
						<ul className='collection'>
							<li className='collection-item avatar'>
								<img src={user.profilePic} alt='' className='circle' />
								<Link
									style={{ color: 'black' }}
									className='title'
									to={{
										pathname: `/${user._id}`,
										state: { UserProfile: user }
									}}
								>
									<b>
										{user.user.firstname} {user.user.lastname}
									</b>
								</Link>

								<p>
									<b>Skills: </b>
									{user.skills[0]}
									<br />
									<b>Experience: </b>
									{user.experience[0]}
									<br />
									<div
										className='secondary-content'
										style={{
											marginTop: '-2%',
											padding: '0 5px',
											borderRadius: '10px'
										}}
									>
										<span
											style={{
												position: 'relative',
												padding: '2px',
												fontSize: '12px',
												color: '#ff9529'
											}}
											className='material-icons'
										>
											fiber_manual_record
										</span>
										<span style={{ fontSize: '16px', padding: '1px', fontWeight: '600' }}>
											{user.user.reputation}
										</span>
									</div>
								</p>
								<Link
									className='waves-effect waves-light btn-small hire-connect-btn'
									to={{
										pathname: `/${user._id}`,
										state: { UserProfile: user }
									}}
								>
									Hire
								</Link>

								<a
									className='waves-effect waves-light btn-small hire-connect-btn'
									style={{ float: 'right' }}
									href={user.linkedIn}
								>
									Connect
								</a>
							</li>
						</ul>
					</div>
				);
			} else return <div className='center'>Something went wrong... </div>;
		})
	) : (
		<div className='center'>Loading... </div>
	);
	return <div>{showPeople}</div>;
};

export default PeopleList;
