import fetch from 'isomorphic-unfetch';

const posts = ({ data }) => {
	if (!data) {
		return <h1>Fecth</h1>;
	}
	return (
		<div>
			{data?.map((post) => (
				<h1 key={post._id}>{post._id}</h1>
			))}
		</div>
	);
};

export async function getServerSideProps() {
	try {
		const response = await fetch(
			'https://shuttlelane.herokuapp.com/api/posts'
		);
		const { data } = await response.json();
		console.log('from server ', data);
		return {
			props: {
				data,
			},
		};
	} catch (error) {
		console.log('in catch of posts');
		return {
			props: {
				err: 'error in fetch',
			},
		};
	}
}

export default posts;
