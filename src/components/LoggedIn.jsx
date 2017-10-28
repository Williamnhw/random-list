import React from 'react';

const LoggedIn = (props) => {
	const handleAdd = (event) => {
	    event.preventDefault();
		const name = event.target.name.value;
		event.target.reset();
		props.add(name);
	}
	return (
		<div>
			<form onSubmit={handleAdd}>
				<input id='name' type='text' placeholder='Restaurant Name' />
				<button id='addBtn'>Add</button>
			</form>
	    	<button id='logoutBtn' onClick={props.logout}>Logout</button>
		</div>
	)
}
	

export default LoggedIn