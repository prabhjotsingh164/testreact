import React from 'react';
import 'css/Student.css'

// "Hooks"

const Student = ({data}) => {

	const helloWorld = () => {
		console.log(`Are you sure you want to update ${data.name}'s record?`)
	}

	return (
		<li onClick={helloWorld}>
			<span>{data.name}</span>
			<span className="right">{data.grade} %</span>
		</li>
	)
}

export default Student;
