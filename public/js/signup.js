const signupButton = document.getElementById('signup');
const container = document.getElementById('container');
const signupNote = document.getElementById('signup-note');

signupButton.addEventListener('click', (e) => {
	e.preventDefault();

	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const verifiedPassword = document.getElementById('verifiedpassword').value;
	fetch('/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},

		body: JSON.stringify({
			username,
			email,
			password,
			verifiedPassword,
		}),
	})
		.then((response) => response.json())
		.then((res) => {
			if (res.error) {
				signupNote.innerHTML = 'make sure your email and password are valid';
				signupNote.style.color = 'red';
			} else {
				console.log(res);
				if (res.message === 'email already exists') {
					signupNote.innerHTML = res.message;
					signupNote.style.color = 'red';
				} else {
					signupNote.innerHTML =
						'your account has been created successfuly. Please Log in to continue';
					signupNote.style.color = 'green';
					signupNote.style.width = '300px';
				}
			}
		})
		.catch((err) => console.log(err));
});
