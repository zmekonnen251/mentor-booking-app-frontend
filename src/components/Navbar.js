import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import decode from 'jwt-decode';
import '../styles/navbar.scss';

export default function Navbar() {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

	// console.log(user.jwt);
	// console.log(decode(user.jwt));

	const logOut = () => {
		const profile = localStorage.getItem('profile');
		console.log(profile);
	};
	const signUp = () => {};
	const signIn = () => {};

	return (
		<nav className='navbar'>
			<NavLink to='/' className='navbar__logo'>
				Mentor App
			</NavLink>

			<div className='navbar__actions'>
				<button className='navbar__actions--button' onClick={signIn}>
					Sign In
				</button>

				<button className='navbar__actions--button' onClick={signUp}>
					Sign Up
				</button>

				<button className='navbar__actions--button' onClick={logOut}>
					Log out
				</button>
			</div>
		</nav>
	);
}
