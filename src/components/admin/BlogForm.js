import { useState } from 'react';
import styles from '../../styles/BlogForm.module.css';

const initialValues = {
	heading: '',
	image: null,
	postDescription: '',
};

const createPost = async (data) => {
	console.log('sendding', data);
	fetch('http://shuttlelane.herokuapp.com/api/posts', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((res) => {
			return res;
		});
};

const BlogForm = ({ post }) => {
	const [inputValues, setInputValues] = useState(
		post ? { ...post } : initialValues
	);
	const onChangeHandler = (e) => {
		e.persist();
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = (e) => {
		let response;
		e.preventDefault();
		try {
			fetch('http://shuttlelane.herokuapp.com/api/posts', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(inputValues),
			})
				.then((res) => res.json())
				.then((res) => {
					console.log('Inside form', res);
					response = res;
				});
			console.log('returned', response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={onSubmitHandler} className={styles.form}>
			<label htmlFor='heading'>heading of post</label>
			<input
				type='text'
				placeholder='heading'
				name='heading'
				id='heading'
				required
				onChange={onChangeHandler}
				value={inputValues.heading}
			/>
			<label htmlFor='image'></label>
			<input
				type='file'
				name='image'
				id='image'
				onChange={onChangeHandler}
				// required
			/>
			<label htmlFor='postBody'></label>
			<textarea
				name='postDescription'
				id='postBody'
				cols='30'
				rows='10'
				required
				placeholder='Post Description..'
				onChange={onChangeHandler}
				value={inputValues.postDescription}
			></textarea>

			<button type='submit'>post</button>
		</form>
	);
};

export default BlogForm;
