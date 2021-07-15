import fetch from 'isomorphic-unfetch';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../styles/Admin.module.css';

const Signin = () => {
	let emailRef = useRef();
	let passwordRef = useRef();
	const router = useRouter();
	async function onSubmitHandler(e) {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		try {
			const response = await fetch(
				'http://shuttlelane.herokuapp.com/api/signin',
				{
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				}
			);
			const user = await response.json();
			console.log(user);
			if (user.error) {
				toast.error(`👌 ${user.error}`, {
					position: 'top-center',
					autoClose: 4000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: false,
					progress: undefined,
				});
				return;
			} else {
				toast.success(`Please wait logging you in.`, {
					position: 'top-center',
					autoClose: 4000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: false,
					progress: undefined,
				});
				setTimeout(() => {
					router.push('/admin/blogger');
				}, 5000);
			}
		} catch (error) {
			console.log('in catch', error);
			toast.error(
				'👌 Something went wrong check internet connection or contact Admin',
				{
					position: 'top-center',
					autoClose: 4000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: false,
					progress: undefined,
				}
			);
		}
		return;
	}
	return (
		<section className={styles.admin}>
			<img src='/assets/images/shuttle.png' alt='' />

			<div className={styles.formContainer}>
				<form onSubmit={onSubmitHandler} className={styles.signIn}>
					<h1 className={styles.heading}>Sign in</h1>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Enter email'
						required
						ref={emailRef}
					/>
					<input
						type='password'
						name='email'
						id='email'
						placeholder='Enter Password'
						required
						ref={passwordRef}
					/>
					<button
						onClick={(e) => {
							toast();
						}}
						type='submit'
					>
						Sign in
					</button>
					<ToastContainer />
				</form>
			</div>
		</section>
	);
};

export default Signin;
