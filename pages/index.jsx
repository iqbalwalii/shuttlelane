import { useState } from 'react';
import { Grid, Typography, Modal, Card } from '@material-ui/core';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Slider from '../components/Slider';
import Choose from '../components/Choose';
import Works from '../components/Works';
import Partners from '../components/Partners';
import AirportForm from '../components/AirportForm';
import PriorityPass from '../components/Priority';
import Carhire from '../components/Carhire';
import styles from '../styles/Home.module.css';
import form from '../styles/Form.module.css';


const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
	let [baseForm, setBaseForm] = useState('Airport Transfer');
	function onClickHandler(e) {
		console.log('clicked');
		let targetValue = e.target.innerText.trim();
		setBaseForm(targetValue);
		console.log(e.target.innerText.trim());
	}

	return (
		<>
			<Grid
				id='header'
				container
				justify='center'
				className={form.formBg}
				style={{
					height: '70vh',
					background: `url('${prefix}/assets/images/car.jpg')`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			>
				<Grid item xs={11} sm={8} className={form.formContainer}>
					<div className={form.tabs}>
						<h4
							className={form.heading}
							onClick={onClickHandler}
							style={{
								backgroundColor:
									baseForm === 'Airport Transfer'
										? '#E3B646cc'
										: '',
							}}
						>
							Airport Transfer
						</h4>
						<h4
							className={form.heading}
							onClick={onClickHandler}
							style={{
								backgroundColor:
									baseForm === 'Car Hire' ? '#E3B646cc' : '',
							}}
						>
							Car Hire
						</h4>
						<h4
							className={form.heading}
							onClick={onClickHandler}
							style={{
								backgroundColor:
									baseForm === 'Priority Pass'
										? '#E3B646cc'
										: '',
							}}
						>
							Priority Pass
						</h4>
					</div>
					{baseForm === 'Airport Transfer' ? (
						<AirportForm />
					) : baseForm === 'Car Hire' ? (
						<Carhire />
					) : (
						<PriorityPass />
					)}
				</Grid>
			</Grid>
			<section className={styles.fleet} id='fleet'>
				<Grid
					container
					spacing={2}
					justify='center'
					direction='column'
					alignItems='center'
				>
					
					<Grid item>
						<Typography
							variant='h4'
							align='center'
							color='textPrimary'
						>
							Our Fleet
						</Typography>
					</Grid>
					<Grid
						item
						variant='body1'
						paragraph
						style={{ fontSize: '1.1rem' }}
					>
						Shuttlelane offers a variety of service class you can
						choose from depending on your needs.
					</Grid>
					<Grid item xs={12}>
						<Slider />
					</Grid>
				</Grid>
			</section>

			<section className={styles.works} id='how-it-works'>
				<Works />
			</section>
			<section className={styles.choose}>
				<Choose />
			</section>
			<section className={styles.reviews}>
				<Reviews />
				<Grid
					container
					spacing={3}
					justify='center'
					alignItems='center'
					style={{ width: '70vw', margin: ' 5rem auto' }}
				>
					<Grid item xs={8} sm={4}>
						<Card className={styles.reviewCard}>
							<a
								target='_blank'
								href='https://www.trustpilot.com/review/shuttlelane.com'
							>
								<img
									src={`${prefix}/assets/images/trustpilott.png`}
									alt='trustpilot logo'
									style={{ width: '150px' }}
								/>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										marginLeft: '2rem',
									}}
								>
									<img
										src={`${prefix}/assets/images/star.png`}
										style={{ width: '20px' }}
										alt='rating star'
									/>
									<span style={{ color: 'Green' }}>
										4.3
										<span
											style={{
												color: 'black',
												fontSize: '.7rem',
											}}
										>
											/5
										</span>
									</span>
								</div>
							</a>
						</Card>
					</Grid>
					<Grid item xs={8} sm={4}>
						<Card className={styles.reviewCard}>
							<a
								target='_blank'
								href={`https://www.google.com/search?q=google+shuttlelane+review&sxsrf=
              ALeKk03nngNGPkFxjmokthABTb56bA1aWA%3A1624185657820&ei=ORvPYNnAMZWO4-EPk6iEyA4&oq=google+s
              huttlelane+review&gs_lcp=Cgdnd3Mtd2l6EANQhxFY7iNg1yVoAHAAeACAAZoRiAGiG5IBCzAuNC4xLjEuOS0xmA
              EAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz&ved=0ahUKEwiZwbuJg6bxAhUVxzgGHRMUAekQ4dUDCBI&uact=5#
              lrd=0x103b8c448e2f97c3:0xc95f24c00955aecc,1`}
							>
								<img
									src={`${prefix}/assets/images/google.png`}
									alt='google logo'
									style={{ width: '150px' }}
								/>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										marginLeft: '2rem',
									}}
								>
									<img
										src={`${prefix}/assets/images/star.png`}
										style={{ width: '20px' }}
										alt='rating star'
									/>
									<span style={{ color: 'Green' }}>
										5
										<span
											style={{
												color: 'black',
												fontSize: '.7rem',
											}}
										>
											/5
										</span>
									</span>
								</div>
							</a>
						</Card>
					</Grid>
					<Grid item xs={8} sm={4}>
						<Card className={styles.reviewCard}>
							<a
								target='_blank'
								href='https://www.tripadvisor.in/Attraction_Review-g304026-d17527097-Reviews-Shuttlelane-Lagos_Lagos_State.html'
							>
								<img
									src={`${prefix}/assets/images/tripadvisor.png`}
									alt='tripadvisor logo'
									style={{ width: '150px' }}
								/>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										marginLeft: '2rem',
									}}
								>
									<img
										src={`${prefix}/assets/images/star.png`}
										style={{ width: '20px' }}
										alt='rating star'
									/>
									<span style={{ color: 'Green' }}>
										4.9
										<span
											style={{
												color: 'black',
												fontSize: '.7rem',
											}}
										>
											/5
										</span>
									</span>
								</div>
							</a>
						</Card>
					</Grid>
				</Grid>
			</section>
			<section className={styles.partner}>
				<Contact />
				<Partners />
			</section>
		</>
	);
}
