import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Modal from './Modal';
import CarBookingForm from './CarBookingForm';
import styles from '../../styles/Dashboard.module.css';

const CarBooking = () => {
	const [editMode, setEditMode] = useState(false);
	const onClickHandler = () => {
		setEditMode(true);
	};
	return (
		<>
			<Grid item sm={12}>
				<h2 style={{ textAlign: 'center', color: '#554986' }}>
					Car Transfer Overview
				</h2>
			</Grid>
			{editMode && (
				<Modal
					isOpen={editMode}
					onCloseHandler={() => {
						setEditMode(false);
					}}
				>
					<CarBookingForm />
				</Modal>
			)}
			<Grid item xs={12}>
				<main>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-end',
							marginBottom: '1rem',
						}}
					>
						<h3>Existing Bookings</h3>
						<button
							className={styles.button}
							onClick={onClickHandler}
						>
							Add Booking
						</button>
					</div>

					<table className={styles.table}>
						<thead style={{ backgroundColor: 'red' }}>
							<tr className={styles.theading}>
								<th>#</th>
								<th>Booking reference</th>
								<th>Pick-up</th>
								<th>Drop-off</th>
								<th>Date & Time</th>
								<th>Passenger</th>
								<th>Amount</th>
								<th>Payment Status</th>
								<th>Booking Date</th>
								<th>Service Status</th>
							</tr>
						</thead>
						<tbody className={styles.tableContent}>
							{[1, 2, 3, 4, 5].map((item) => {
								return (
									<tr>
										<td>011</td>
										<td>3456789</td>
										<td>
											<p>
												Murtala Muhammed International
												Airport
											</p>
											<p>Vehicle Class: economy</p>
											<p>Flight Number: BA200</p>
											<p>
												Transfer Type: Airport Transfer
											</p>
										</td>
										<td>22 Babatunde dabi</td>
										<td>
											20/11/2019 <br /> 12:30
										</td>
										<td>
											<p>Mr Baba Baba</p>
											<p>jtbaros@gmail.com</p>
											<p>+447733736142</p>
											<p>Passengers: 2</p>
										</td>
										<td>
											NGN <br />
											1,050.00
										</td>
										<td>successful</td>
										<td>
											12/11/2019 <br /> 09:02 pm
										</td>
										<td>Pending</td>
									</tr>
								);
							})}
						</tbody>
						<tfoot>
							<tr>
								<td>Sum</td>
								<td>$180</td>
							</tr>
						</tfoot>
					</table>
				</main>
			</Grid>
		</>
	);
};

export default CarBooking;
