document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('button').addEventListener('click', (e) => {
		e.preventDefault();
		let content = document.getElementById('content').value;
		console.log(content);
		content = content.replaceAll(/\n/g, ' ');
		console.log(content);
		document.getElementById('result').value = content;
	});
});
