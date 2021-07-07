import { useState } from 'react';
import form from '../styles/Carform.module.css';
import Link from 'next/link';

let intialPickupValues = {
	pickupAirport: '',
	dropoffAddress: '',
	dropoffDate: '',
	passengers: 0,
};
let intialDropoffValues = {
	DropoffAirport: '',
	pickupAddress: '',
	pickupDate: '',
	passengers: 0,
};

const AirportForm = () => {
	let [formType, setFormType] = useState('Airport-Pickup');
	let [airportPickupValues, setAirportPickupValues] =
		useState(intialPickupValues);
	let [airportDropoffValues, setAirportDropoffValues] =
		useState(intialDropoffValues);

	function onChangeHandler(e) {
		e.persist();
		console.log(e.target);
		formType === 'Airport-Pickup'
			? setAirportPickupValues({
					...airportPickupValues,
					[e.target.id]: e.target.value,
			  })
			: setAirportDropoffValues({
					...airportDropoffValues,
					[e.target.id]: e.target.value,
			  });
		console.log('airportPickupValues:', airportPickupValues);
		console.log('airportDropoffValues:', airportDropoffValues);
	}
	function onSubmitHandler(e) {
		e.preventDefault();
		console.log(e.target);
		// formType === "Airport-Pickup"? airportPickupValues={...airportPickupValues, [e.target.id]:  e.target.value}:airportDropoffValues={...airportDropoffValues, [e.target.id]:e.target.value}
		console.log('airportPickupValues:', airportPickupValues);
		console.log('airportDropoffValues:', airportDropoffValues);
	}

	return (
		<div className={form.new}>
			<div className={form.radios} style={{ paddingTop: '1rem' }}>
				<label
					htmlFor='Airport-Pickup'
					style={{
						color: '#fff',
						paddingLeft: '1rem',
						fontSize: '.9rem',
					}}
				>
					Airport Pickup
				</label>
				<input
					onClick={(e) => {
						console.log('Pickup');
						setFormType('Airport-Pickup');

						setAirportDropoffValues({ ...intialDropoffValues });
						setAirportPickupValues({ ...intialPickupValues });
					}}
					type='radio'
					name='Pickup'
					id='Airport-Pickup'
					value='Airport-Pickup'
					checked = {formType=='Airport-Pickup' ? true : false}
				/>
				<label
					htmlFor='Airport-Dropoff'
					style={{
						color: '#fff',
						paddingLeft: '1rem',
						fontSize: '.9rem',
					}}
				>
					Airport Dropoff
				</label>
				<input
					onClick={(e) => {
						console.log('Dropoff');
						setFormType('Airport-Dropoff');
						setAirportDropoffValues({ ...intialDropoffValues });
						setAirportPickupValues({ ...intialPickupValues });
					}}
					type='radio'
					name='Pickup'
					id='Airport-Dropoff'
					value='Airport-Dropoff'
					checked = {formType=='Airport-Dropoff' ? true : false}

				/>
			</div>

			{formType === 'Airport-Dropoff' ? (
				<form onSubmit={onSubmitHandler} className={form.formMain}>
					<div className={form.form}>
						<input
							type='text'
							onChange={onChangeHandler}
							name='pickupAddress'
							id='pickupAddress'
							placeholder='Pick-up Address'
						/>
						<select
							name='airport'
							onChange={onChangeHandler}
							id='dropoffAirport'
						>
							<option selected disabled value='null' id='null'>
								Select Dropoff Airport
							</option>
							<option value='Murtala Muhammed International Airport'>
								Murtala Muhammed International Airport
							</option>
							<option value='Murtala Muhammed Domestic Airport'>
								Murtala Muhammed Domestic Airport
							</option>
							<option value='Port Harcourt International Airport'>
								Port Harcourt International Airport
							</option>
							<option value='Nnamdi Azikwe International Airport'>
								Nnamdi Azikwe International Airport
							</option>
							<option value='Kotoka International Airport'>
								Kotoka International Airport
							</option>
							<option value='Kumasi Airport'>
								Kumasi Airport
							</option>
							<option value='London Heathrow Airport'>
								London Heathrow Airport
							</option>
							<option value='Gatwick Airport'>
								Gatwick Airport
							</option>
							<option value='London City Airport'>
								London City Airport
							</option>
						</select>
						<input
							required
							type='text'
							onChange={onChangeHandler}
							id='pickupDate'
							placeholder='Pick-up Date'
							onFocus={(e) => {
								e.target.type = 'date';
							}}
						/>
						<input
							type='number'
							name='passengers'
							onChange={onChangeHandler}
							id='passengers'
							placeholder='Number of Passengers'
							min='1'
							max='10'
						/>
						<Link href='/booking'>
							<a className="btnGrad">Make Booking</a>
						</Link>
					</div>
				</form>
			) : (
				<div className={form.formMain}>
					<form
						onSubmit={onSubmitHandler}
						className={form.form}
						id='airport'
					>
						<select
							required
							onChange={onChangeHandler}
							name='pickupAirport'
							id='pickupAirport'
						>
							<option selected disabled value=''>
								Select Pickup Airport
							</option>
							<option value='Murtala Muhammed International Airport'>
								Murtala Muhammed International Airport
							</option>
							<option value='Murtala Muhammed Domestic Airport'>
								Murtala Muhammed Domestic Airport
							</option>
							<option value='Port Harcourt International Airport'>
								Port Harcourt International Airport
							</option>
							<option value='Nnamdi Azikwe International Airport'>
								Nnamdi Azikwe International Airport
							</option>
							<option value='Kotoka International Airport'>
								Kotoka International Airport
							</option>
							<option value='Kumasi Airport'>
								Kumasi Airport
							</option>
							<option value='London Heathrow Airport'>
								London Heathrow Airport
							</option>
							<option value='Gatwick Airport'>
								Gatwick Airport
							</option>
							<option value='London City Airport'>
								London City Airport
							</option>
						</select>
						<input
							required
							type='text'
							name='dropAddress'
							placeholder='Drop-off Address'
							id='dropoffAddress'
							onChange={onChangeHandler}
							value={airportPickupValues.dropoffAddress}
						/>
						<input
							required
							type='text'
							placeholder='Arrival Date'
							onFocus={(e) => {
								e.target.type = 'date';
							}}
							id='dropoffDate'
							onChange={onChangeHandler}
							value={airportPickupValues.dropoffDate}
						/>
						<input
							required
							type='number'
							name='passengers'
							onChange={onChangeHandler}
							value={airportPickupValues.passengers}
							id='passengers'
							placeholder='Number of Passengers'
						/>
						<Link href='/booking'>
							<a className="btnGrad">Make Booking</a>
						</Link>
					</form>
				</div>
			)}
		</div>
	);
};

export default AirportForm;
