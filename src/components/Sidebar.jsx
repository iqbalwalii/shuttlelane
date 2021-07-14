import Link from 'next/link';
import { useRouter } from 'next/router';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import sidebar from '../styles/Sidebar.module.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
	paper: {
		boxShadow: '0 0 0 #fff',
		borderRadius: 0,
		paddingTop: '10px',
	},
});
const Sidebar = ({ heading, routes }) => {
	const classes = useStyles();

	const router = useRouter();
	return (
		<aside className={sidebar.aside}>
			<Paper
				className={classes.paper}
				style={{
					backgroundColor: '#F5F5F5',
					borderLeft: '4px solid #262471',
				}}
			>
				<Typography
					variant='h5'
					className={sidebar.heading}
					color='secondary'
				>
					{heading}
				</Typography>
				<MenuList>
					{routes &&
						Object.entries(routes).map((entry) => {
							return (
								<MenuItem
									key={entry[0]}
									style={{
										marginBottom: '0',
										transition: 'all 0.3s linear',
										backgroundColor:
											router.route == entry[1]
												? '#262471'
												: '',
									}}
								>
									<Link href={entry[1]}>
										<a
											style={{
												color:
													router.route == entry[1]
														? '#f2f2f2'
														: '',
												width: '100%',
											}}
										>
											{entry[0]}
										</a>
									</Link>
								</MenuItem>
							);
						})}
				</MenuList>
			</Paper>
		</aside>
	);
};

export default Sidebar;
