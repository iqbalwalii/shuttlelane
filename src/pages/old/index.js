import fetch from 'isomorphic-unfetch';

const Index = ({ posts }) => {
	console.log('from server', posts);
	console.log('from server', Array.isArray(posts));
	if (posts) {
		return (
			<div>
				{posts.map((post) => (
					<h1 key={post._id}>{post._id}</h1>
				))}
			</div>
		);
	}
	return <div>welcome</div>;
};
export async function getServerSideProps() {
	try {
		console.log('Fetching');
		const response = await fetch(
			'https://shuttlelane.herokuapp.com/api/posts'
		);
		console.log('converting');
		const { data } = await response.json();
		if (!data) {
			console.log('Found data');
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
		return {
			props: {
				err: 'hi',
			},
		};
	}
}
export default Index;
