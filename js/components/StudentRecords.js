import React from 'react';
import Student from 'components/Student'
import 'css/StudentRecords.css'
// let style = {
// 	backgroundColor: 'yellowgreen',
// 	fontSize: '2em',
// }
const records = [
	{id: 1, name: 'Whatever', grade: 70},
	{id: 2, name: 'Hello', grade: 70},
	{id: 3, name: 'World', grade: 70},
	{id: 4, name: 'Whoever', grade: 70},
]

const StudentRecords = () => {
	return (
		<main className="students">
			<h3>Students</h3>
			<ul>{ records.map(rec => <Student key={rec.id} data={rec} />) }</ul>
		</main>
	)
}

export default StudentRecords
