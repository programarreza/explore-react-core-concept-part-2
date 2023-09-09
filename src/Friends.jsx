import { useEffect, useState } from 'react';
import Friend from './Friend';
import './Friends.css';

export default function Friends(){
	const [Friends, setFriends] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => setFriends(data))
	}, [])

	return (
		<div className='Box'>
			<h3>Friends: {Friends.length}</h3>
			{
				Friends.map(friend => <Friend friend={friend}></Friend>)
			}
		</div>
	)
}

/**
 * 1. state to hold data
 * 2.use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
 */