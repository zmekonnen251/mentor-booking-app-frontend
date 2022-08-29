import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { banMentor, removeMentor } from '../redux/actions/mentors';
import styles from './MentorsList.module.css';

const ListOfMentors = () => {
	const dispatch = useDispatch();

	const approvedMentors = useSelector((state) => state.mentors.approvedMentors);

	return (
		<>
			<div className={styles.container}>
				<h1>List of approved mentors</h1>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{approvedMentors.map((mentor) => (
							<tr key={mentor.id}>
								<td>{mentor.name}</td>
								<td>{mentor.email}</td>
								<td>
									<button onClick={() => dispatch(banMentor(mentor.id))}>
										Ban
									</button>
									<button onClick={() => dispatch(removeMentor(mentor.id))}>
										Remove
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ListOfMentors;
