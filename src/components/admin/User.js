import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';
import UpdateUserForm from './UpdateUserForm';
import Modal from './Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../styles/Admin.module.css';
import dashboard from '../../styles/Dashboard.module.css';

const btnRed = {
	background: 'red',
};
const btnGreen = {
	background: 'green',
};

const CreateUser = () => {
	const [users, setUsers] = useState([]);
	const [action, setAction] = useState(false);
	const [type, setType] = useState('Blogger');
	const [editMode, setEditMode] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const router = useRouter();

	useEffect(() => {
		fetch('http://shuttlelane.herokuapp.com/api/users')
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setUsers(result.data);
			})
			.catch((err) => console.log(err));
	}, [action]);

	// Update User Handler

	// Delete User Handler

	const deleteUserHandler = (id) => {
		try {
			console.log('in delete USerData');
			fetch(`http://shuttlelane.herokuapp.com/api/users/${id}`, {
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
				.then((response) => {
					console.log('recieved');
					return response.json();
				})
				.then((result) => {
					console.log(result);
					toast.success(` user ${result.data.name} Deleted`, {
						position: 'top-center',
						autoClose: 3000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: false,
						progress: undefined,
					});
					setAction((prevState) => !prevState);
				});
		} catch (error) {
			console.log('in catch', error);
			toast.error(` user ${error} Created`, {
				position: 'top-center',
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
			});
		}
	};

	// Create User Handler
	const onSubmitHandler = (e) => {
		e.preventDefault();
		let data = {};
		let response;
		data.name = nameRef.current.value;
		data.email = emailRef.current.value;
		data.password = passwordRef.current.value;
		data.role = type;

		fetch('http://shuttlelane.herokuapp.com/api/signup', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((user) => {
				response = user;
				console.log(user);
				if (user.error) {
					toast.error(`👌 ${user.error}`, {
						position: 'top-center',
						autoClose: 2000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: false,
						progress: undefined,
					});
					return;
				} else {
					toast.success(` user ${user.data.name} Created`, {
						position: 'top-center',
						autoClose: 2000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: false,
						progress: undefined,
					});
					setAction((prevState) => !prevState);
				}
			})
			.catch((error) => {
				console.log(error);
				console.log('in catch', error);
				toast.error(
					'👌 Something went wrong check internet connection or contact Admin',
					{
						position: 'top-center',
						autoClose: 2000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: false,
						progress: undefined,
					}
				);
			});
	};
	return (
		<Grid item sm={12}>
			<div className={dashboard.cardStat} style={{ width: '90vw' }}>
				<h4 style={{ margin: '1rem .8rem' }}>Existing Users</h4>
				<p className={dashboard.entry}>
					<span>No</span> <span>Name</span>
					<span>Type</span>
					<span>Update</span>
					<span>Delete</span>
				</p>
				{users?.map((user, idx) => {
					return (
						<p key={user._id} className={dashboard.entry}>
							<span>{idx + 1}</span> <span>{user.name}</span>
							<span>{user.role}</span>
							<span>
								<button
									className={styles.btn}
									style={btnGreen}
									onClick={(e) => {
										setEditMode(true);
										setSelectedUser(user);
									}}
								>
									Update
								</button>
							</span>
							<span>
								<button
									className={styles.btn}
									style={btnRed}
									onClick={(e) => deleteUserHandler(user._id)}
								>
									Delete
								</button>
							</span>
						</p>
					);
				})}
			</div>
			{editMode && (
				<Modal
					isOpen={editMode}
					onCloseHandler={() => {
						setEditMode(false);
						setSelectedUser(null);
					}}
				>
					<UpdateUserForm user={selectedUser} setAction={setAction} />
				</Modal>
			)}
			<form
				className={styles.signUp}
				onSubmit={onSubmitHandler}
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<h1 className={styles.heading}>Add New User</h1>
				<input
					type='text'
					name='name'
					id='name'
					placeholder='name'
					required
					ref={nameRef}
				/>
				<input
					type='email'
					name='email'
					id='email'
					placeholder='email'
					required
					ref={emailRef}
				/>
				<select
					id='type'
					name='type'
					value={type}
					onChange={(e) => setType(e.target.value)}
					placeholder='Select a person'
				>
					<option value='blogger'>Blogger</option>
					<option value='admin'>Admin</option>
				</select>
				<input
					type='password'
					name='password'
					id='password'
					placeholder='password'
					required
					ref={passwordRef}
				/>
				<button
					onClick={() => {
						toast();
					}}
					type='submit'
				>
					Add
				</button>
				<ToastContainer />
			</form>
		</Grid>
	);
};

export default CreateUser;
