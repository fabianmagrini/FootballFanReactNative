const url = `https://afternoon-gorge-60512.herokuapp.com/api/posts?take=100`;

export async function getTopPosts() {
	let result = await fetch(url).then(response => response.json());

	return result;
}