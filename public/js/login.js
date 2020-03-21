const loginButton = document.getElementById('login_btn');
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const loginNote = document.getElementById('login-note');

loginButton.addEventListener('click', (e) => {
	e.preventDefault();

	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	fetch('/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify({
			email,
			password,
		}),
	})
		.then((response) => response.json())
		.then((res) => {
			if (res.message === 'your email or password is incorrect') {
				loginNote.innerHTML = 'your email or password is incorrect';
				loginNote.style.color = 'red';
			} else {
				if (res.message === 'logged in successfully') {
					window.location = '/username';
				}
			}
		})
		.catch((err) => console.log(err));
});
