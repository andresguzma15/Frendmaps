
window.onload = login_form;


	function inicializar (){

		login_form = document.getElementById('login_form');
		login_form.addEventListener("submit, authenticate, false");
	}


	function authenticate (event){
		event.preventDefault();

		var user = event.target.email.value;
		var password = event.target.password.value;


		firebase.auth().signInWithEmailAndPassword(user, password)
			.then(function(result){
				window.alert("authenticate successful");
			})
			// Handle Errors here.
			.catch(function(error) {
			window.alert("authenticate error");
		});
	}