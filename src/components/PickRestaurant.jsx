import React from 'react';

const PickRestaurant = (props) => {
	return (
		<div>
			<h3>{props.restaurant}</h3>
			<button onClick={props.pick}>Pick</button>
			<div>&nbsp;</div>
		</div>
	)
}

export default PickRestaurant;