import { Card, Grid, CardContent, Typography } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const Reviews = () => {
	return (
		<section>
			<Grid
				container
				spacing={2}
				justify='center'
				alignItems='center'
				direction='column'
			>
				<Typography
					variant='h4'
					data-aos='zoom-in'
					align='center'
					xs={10}
					style={{
						marginTop: '1.1rem',
						padding: '0 1.4rem',
						paddingTop: '1rem',
					}}
				>
					What our Clients are saying
				</Typography>
				<Grid item>
					<Typography
						variant='body1'
						data-aos='zoom-in'
						align='center'
						paragraph
						xs={10}
						style={{ fontSize: '1.1rem', padding: '0 1.4rem' }}
					>
						Our clients are saying great things about us. Here are a
						few:
					</Typography>
				</Grid>
				<Grid
					item
					container
					justify='center'
					spacing={2}
					style={{ width: '85%' }}
				>
					<Grid item xs={10} sm={4}>
						<Card
							data-aos='fade-left'
							className=''
							style={{
								background: '#212121',
								padding: '1rem 1.8rem',
								color: '#fff',
								position: 'relative',
							}}
						>
							<Typography
								variant='body2'
								paragraph
								style={{ color: '#fff' }}
							>
								<FormatQuoteIcon
									style={{
										transform: 'rotate(180deg)',
										marginLeft: '-25px',
									}}
								/>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Et sapiente esse est veniam ea
								natus hic deserunt explicabo cumque soluta?
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Et sapiente esse est veniam ea
								natus hic deserunt explicabo cumque soluta?
								{/* <FormatQuoteIcon style={{ color: "#fff" }} /> */}
							</Typography>
							<Typography variant='subtitle2' color='primary'>
								Jaan Wick
							</Typography>
							<Typography
								variant='caption'
								style={{ color: '#fff' }}
							>
								Lagos, Nigeria
							</Typography>
						</Card>
					</Grid>
					<Grid item xs={10} sm={4}>
						<Card
							data-aos='fade-left'
							className=''
							style={{
								background: '#212121',
								padding: '1rem 1.8rem',
								color: '#fff',
								position: 'relative',
							}}
						>
							<Typography
								variant='body2'
								paragraph
								style={{ color: '#fff' }}
							>
								<FormatQuoteIcon
									style={{
										transform: 'rotate(180deg)',
										marginLeft: '-25px',
									}}
								/>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Et sapiente esse est veniam ea
								natus hic deserunt explicabo cumque soluta?
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Et sapiente esse est veniam ea
								natus hic deserunt explicabo cumque soluta?
								{/* <FormatQuoteIcon style={{ color: "#fff" }} /> */}
							</Typography>
							<Typography variant='subtitle2' color='primary'>
								Jaan Wick
							</Typography>
							<Typography
								variant='caption'
								style={{ color: '#fff' }}
							>
								Lagos, Nigeria
							</Typography>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
};

export default Reviews;
