import { useState } from 'react';
import ActionCard from '../../components/admin/ActionCard';
import BlogForm from '../../components/admin/BlogForm';
import Modal from '../../components/admin/Modal';
import styles from '../../styles/Blogger.module.css';

const Blogger = ({ posts, error }) => {
	const [action, setAction] = useState(null);
	const [editMode, setEditMode] = useState(null);
	const [selectedPost, setSelectedPost] = useState({});

	function onClickHandler(e) {
		e.persist();
		setAction((prevState) => {
			return e.target.id;
		});
	}
	function showProfile(e) {
		const profile = document.querySelector('#profile');
		if (profile.style.display == 'flex') {
			profile.style.display = 'none';
		} else {
			profile.style.display = 'flex';
		}
	}

	return (
		<section className={styles.blogger}>
			<aside className={styles.aside}>
				<div>
					<div className={styles.mobNav}>
						<img src='/assets/images/shuttle.png' alt='logo' />
						<div
							onClick={showProfile}
							style={{
								display: 'flex',
								flexDirection: 'column',
								zIndex: '10',
							}}
							className={styles.burger}
						>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<h2
						style={{
							opacity: '0.7',
							fontWeight: 'bold',
							color: '#613DE6',
							margin: '0',
							marginTop: '1rem',
						}}
					>
						Actions
					</h2>
					<ActionCard
						id='create'
						actionName='create post'
						onClickHandler={onClickHandler}
					/>
					<ActionCard
						id='posts'
						onClickHandler={onClickHandler}
						actionName='View posts'
					/>
				</div>
			</aside>
			<main className={styles.mainContent}>
				{action === 'create' ? (
					<div className={styles.formContainer}>
						<BlogForm />
					</div>
				) : action === 'posts' ? (
					<div className={styles.heading}>
						<h1>posts Written by you</h1>
						{error ? (
							<div
								style={{ padding: '1rem', textAlign: 'center' }}
							>
								<h4>{error}</h4>
							</div>
						) : (
							<div className={styles.postsContainer}>
								{posts?.map((post) => (
									<div
										key={post._id}
										className={styles.bloggerPosts}
									>
										<div style={{ width: '90%' }}>
											<h4>{post.heading}</h4>
											<p>
												{post.postDescription.slice(
													0,
													50
												)}
											</p>
										</div>
										<button
											onClick={() => {
												setSelectedPost({ ...post });
												setEditMode(true);
											}}
										>
											Update
										</button>
									</div>
								))}
								{editMode && (
									<Modal
										post={selectedPost}
										isOpen={editMode}
										onCloseHandler={() => {
											setEditMode(false);
											setSelectedPost(false);
										}}
									>
										<BlogForm post={selectedPost} />
									</Modal>
								)}
							</div>
						)}
					</div>
				) : (
					<div className={styles.actionCard}>Select an action</div>
				)}
			</main>
			<div className={styles.profile} id='profile'>
				<div className={styles.profileHeader}>
					<img
						src={`https://thumbs.dreamstime.com/b/woman-profile-silhouette-portrait-moon-her-head-beautiful-woman-profile-silhouette-portrait-moon-her-head-198533883.jpg`}
						alt='profile'
					/>
					<h4>irfan afzal khan</h4>
					{/* <h6>Joined On</h6> */}
				</div>
				<div className={styles.profileOverview}>
					<h3>Overview</h3>
					<div className={styles.overviewCard}>
						<h1>37</h1>
						<h4>Posts</h4>
					</div>
				</div>
			</div>
		</section>
	);
};

export async function getServerSideProps() {
	try {
		const response = await fetch(
			'http://shuttlelane.herokuapp.com/api/posts'
		);
		const { data } = await response.json();
		if (!data) {
			return {
				props: {
					error: "Can't Fetch data",
				},
			};
		}
		console.log(data);
		return {
			props: {
				posts: data,
			},
		};
	} catch (error) {
		console.log('in catch', error);
	}
}

export default Blogger;
