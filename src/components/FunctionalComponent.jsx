import React from 'react';
import NavBar from './NavBar/index';
import Footer from './Footer/index';

export default function MyInfo() {
	return (
		<div>
			<NavBar />
			<h1>Ashish Kumar Singh</h1>
			<p>Hello There, I am a software Engineer at Samsung.</p>
			<ul>
				<li>Spain</li>
				<li>Paris</li>
				<li>Hanoi</li>
			</ul>
			<Footer />
		</div>
	);
}
