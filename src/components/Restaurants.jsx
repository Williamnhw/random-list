import React from 'react';

const Restaurants = (props) => {
	let restaurants = props.restaurants ? props.restaurants : [];
	restaurants = restaurants.map((elem,index) => <li key={index}>{elem}</li> );
	return (
		<div>
			<h3>Restaurants: </h3>
			<ul>
				{restaurants}
			</ul>
		</div>
	)
}

export default Restaurants;