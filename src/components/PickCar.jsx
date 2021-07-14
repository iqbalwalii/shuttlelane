import { Card, Grid, Typography } from '@material-ui/core';
import { Person, Work } from '@material-ui/icons';
import React, { Component } from 'react';
import pick from '../styles/Pick.module.css';
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
export default class PickCar extends Component {
	render() {
		return (
			<div style={{ marginBottom: '1rem' }}>
				<div
					style={{
						backgroundColor: '#fff',
						borderBottom: '1px solid #212121',
						padding: '.5rem 1.5rem',
					}}
				>
					<h4
						style={{
							margin: '0',
							padding: '0',
							fontFamily: 'poppins',
							textTransform: 'uppercase',
						}}
					>
						Pick Your Car
					</h4>
				</div>

				<Card className={pick.carCard}>
					<div className={pick.image}>
						<img src={`${prefix}/assets/images/eco.png`} alt='' />
					</div>
					<div className={pick.description}>
						<Typography variant='h6'>Economy</Typography>
						<div
							style={{
								background: '#f5f5f5',
								width: 'fit-content',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								padding: ' 0.1rem 0.3rem',
								transform: 'scale(.85)',
							}}
						>
							<span>
								<span
									style={{
										marginRight: '.2rem',
										display: 'inline-flex',
										alignItems: 'center',
										justifyContent: ' center',
									}}
								>
									<Person fontSize='small' />
									{2}
								</span>
								<span
									style={{
										display: 'inline-flex',
										alignItems: 'center',
									}}
								>
									<Work fontSize='small' />
									{4}
								</span>
							</span>
						</div>
						<Typography variant='body1' style={{ opacity: '.7' }}>
							Ford Focus, Ford Figo, MG550, Ford Fusion, Toyota
							Camry, Volkswagon Passat, Toyota Corolla, Hyundai
							Elentra, etc.
						</Typography>
					</div>
					<div className={pick.buttons}>
						<Typography
							variant='subtitle1'
							style={{ fontWeight: 'bolder' }}
						>
							$5469
						</Typography>
						<button
							value='Economy'
							onClick={this.props.carHandler}
							className='btnNotSelected'
							style={{
								backgroundColor:
									this.props.selectedCar === 'Economy'
										? 'orange'
										: '',
							}}
						>
							Select
						</button>
					</div>
				</Card>

				{/* Business */}

				<Card className={pick.carCard}>
					<div className={pick.image}>
						<img src={`${prefix}/assets/images/biz.png`} alt='' />
					</div>
					<div className={pick.description}>
						<Typography variant='h6'>Business</Typography>
						<div
							style={{
								background: '#f5f5f5',
								width: 'fit-content',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								padding: ' 0.1rem 0.3rem',
								transform: 'scale(.85)',
							}}
						>
							<span>
								<span
									style={{
										marginRight: '.2rem',
										display: 'inline-flex',
										alignItems: 'center',
										justifyContent: ' center',
									}}
								>
									<Person fontSize='small' />
									{4}
								</span>
								<span
									style={{
										display: 'inline-flex',
										alignItems: 'center',
									}}
								>
									<Work fontSize='small' />
									{3}
								</span>
							</span>
						</div>
						<Typography variant='body1' style={{ opacity: '.7' }}>
							Ford Escape, Hyundai IX35, Volkswagon Tigon, GAC
							GS4, Hyundai Santa, Toyota Rav 4, Honda CRV, Toyota
							Sienna, etc.
						</Typography>
					</div>
					<div className={pick.buttons}>
						<Typography
							variant='subtitle1'
							style={{ fontWeight: 'bolder' }}
						>
							$5469
						</Typography>
						<button
							value='Business'
							onClick={this.props.carHandler}
							className='btnNotSelected'
							style={{
								backgroundColor:
									this.props.selectedCar === 'Business'
										? 'orange'
										: '',
							}}
						>
							Select
						</button>
					</div>
				</Card>

				{/* Executive */}

				<Card className={pick.carCard}>
					<div className={pick.image}>
						<img
							src={`${prefix}/assets/images/executive.png`}
							alt=''
						/>
					</div>
					<div className={pick.description}>
						<Typography variant='h6'>Executive</Typography>
						<div
							style={{
								background: '#f5f5f5',
								width: 'fit-content',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								padding: ' 0.1rem 0.3rem',
								transform: 'scale(.85)',
							}}
						>
							<span>
								<span
									style={{
										marginRight: '.2rem',
										display: 'inline-flex',
										alignItems: 'center',
										justifyContent: ' center',
									}}
								>
									<Person fontSize='small' />
									{4}
								</span>
								<span
									style={{
										display: 'inline-flex',
										alignItems: 'center',
									}}
								>
									<Work fontSize='small' />
									{2}
								</span>
							</span>
						</div>
						<Typography variant='body1' style={{ opacity: '.7' }}>
							Mercedes Benz E350, BMW Grancoupe 428i, BMW 523i,
							Toyota Camry 2018, Jaguar XF, Mercedez Benz E200,
							Mercedez Benz E300, etc.
						</Typography>
					</div>
					<div className={pick.buttons}>
						<Typography
							variant='subtitle1'
							style={{ fontWeight: 'bolder' }}
						>
							$5469
						</Typography>
						<button
							value='Executive'
							onClick={this.props.carHandler}
							className='btnNotSelected'
							style={{
								backgroundColor:
									this.props.selectedCar === 'Executive'
										? 'orange'
										: '',
							}}
						>
							Select
						</button>
					</div>
				</Card>

				{/* Luxury */}

				<Card className={pick.carCard}>
					<div className={pick.image}>
						<img
							src={`${prefix}/assets/images/luxurycar.png`}
							alt=''
						/>
					</div>
					<div className={pick.description}>
						<Typography variant='h6'>Luxury</Typography>
						<div
							style={{
								background: '#f5f5f5',
								width: 'fit-content',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								padding: ' 0.1rem 0.3rem',
								transform: 'scale(.85)',
							}}
						>
							<span>
								<span
									style={{
										marginRight: '.2rem',
										display: 'inline-flex',
										alignItems: 'center',
										justifyContent: ' center',
									}}
								>
									<Person fontSize='small' />
									{4}
								</span>
								<span
									style={{
										display: 'inline-flex',
										alignItems: 'center',
									}}
								>
									<Work fontSize='small' />
									{3}
								</span>
							</span>
						</div>
						<Typography variant='body1' style={{ opacity: '.7' }}>
							Range Rover Voque, LR3, Toyota Prado, Toyota
							Landcruiser, Ford Edge, Ford Explorer, etc.
						</Typography>
					</div>
					<div className={pick.buttons}>
						<Typography
							variant='subtitle1'
							style={{ fontWeight: 'bolder' }}
						>
							$5469
						</Typography>
						<button
							value='Luxury'
							className='btnNotSelected'
							onClick={this.props.carHandler}
							style={{
								backgroundColor:
									this.props.selectedCar === 'Luxury'
										? 'orange'
										: '',
							}}
						>
							Select
						</button>
					</div>
				</Card>

				{/* Shuttle */}

				<Card className={pick.carCard}>
					<div className={pick.image}>
						<img src={`${prefix}/assets/images/shut.png`} alt='' />
					</div>
					<div className={pick.description}>
						<Typography variant='h6'>Shuttle</Typography>
						<div
							style={{
								background: '#f5f5f5',
								width: 'fit-content',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								padding: ' 0.1rem 0.3rem',
								transform: 'scale(.85)',
							}}
						>
							<span>
								<span
									style={{
										marginRight: '.2rem',
										display: 'inline-flex',
										alignItems: 'center',
										justifyContent: ' center',
									}}
								>
									<Person fontSize='small' />
									{4}
								</span>
								<span
									style={{
										display: 'inline-flex',
										alignItems: 'center',
									}}
								>
									<Work fontSize='small' />
									{3}
								</span>
							</span>
						</div>
						<Typography variant='body1' style={{ opacity: '.7' }}>
							Toyota Hiace, etc.
						</Typography>
					</div>
					<div className={pick.buttons}>
						<Typography
							variant='subtitle1'
							style={{ fontWeight: 'bolder' }}
						>
							$5469
						</Typography>
						<button
							value='Shuttle'
							className='btnNotSelected'
							onClick={this.props.carHandler}
							style={{
								backgroundColor:
									this.props.selectedCar === 'Shuttle'
										? 'orange'
										: '',
							}}
						>
							Select
						</button>
					</div>
				</Card>
			</div>
		);
	}
}
