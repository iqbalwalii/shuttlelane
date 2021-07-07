import React from 'react';
import { Card, Grid, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
const useStyles = makeStyles({
	card: {
		padding: '0.5rem',
	},
	weightLight: {
		fontWeight: 300,
	},
});
const Choose = () => {
	const classes = useStyles();

	return (
		<section
			style={{
				padding: '1rem',
				width: '96%',
				margin: 'auto',
				marginBottom: '1rem',
			}}
		>
			<Grid container spacing={5} justify='center' alignItems='center'>
				<Grid item xs={12}>
					<Typography align='center' variant='h4' gutterBottom>
						Why Choose Us
					</Typography>
					<Typography
						variant='body1'
						align='center'
						paragraph
						style={{ fontSize: '1.1rem' }}
					>
						We strive to provide quality service and great customer
						satisfaction.
					</Typography>
				</Grid>
				<Grid item xs={10} sm={3}>
					<Card
						className={classes.card}
						data-aos='fade-right'
						data-aos-delay='200'
					>
						<CardContent align='center'>
							<QueryBuilderIcon
								style={{ fontSize: '60px' }}
								color='secondary'
								align='center'
							/>
							<Typography
								gutterBottom
								variant='h6'
								align='center'
								color='secondary'
							>
								ALWAYS ON TIME
							</Typography>
							<Typography
								gutterBottom
								align='center'
								variant='body1'
								paragraph
								style={{ fontSize: '1.1rem' }}
							>
								Punctuality is one of our strength. We strictly
								keep to schedule as we don't want to keep our
								clients waiting.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={10} sm={3}>
					<Card
						className={classes.card}
						data-aos='zoom-in'
						data-aos-delay='300'
					>
						<CardContent align='center'>
							<LocalAtmIcon
								style={{ fontSize: '60px' }}
								color='secondary'
								align='center'
							/>
							<Typography
								gutterBottom
								variant='h6'
								align='center'
								color='secondary'
							>
								GREAT VALUE
							</Typography>
							<Typography
								gutterBottom
								align='center'
								variant='body1'
								style={{ fontSize: '1.1rem' }}
							>
								Despite the quality of the service we render to
								our clients, our rates are one of the most
								affordable in the industry.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={10} sm={3}>
					<Card
						className={classes.card}
						data-aos='fade-left'
						data-aos-delay='200'
					>
						<CardContent align='center'>
							<VerifiedUserIcon
								style={{ fontSize: '50px' }}
								color='secondary'
								align='center'
							/>
							<Typography
								gutterBottom
								color='secondary'
								variant='h6'
								align='center'
							>
								SECURE AND RELIABLE
							</Typography>
							<Typography
								gutterBottom
								align='center'
								variant='body1'
								style={{ fontSize: '1.1rem' }}
							>
								Our client's safety and satisfaction is our
								priority and as such, we prioritize their
								security and comfort.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</section>
	);
};
export default Choose;
