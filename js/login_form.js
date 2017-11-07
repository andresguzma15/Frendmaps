
				var db = firebase.database();


                 $('#login_form').on('submit', function(e){
                e.preventDefault();

                var username = jQuery('#username').val().trim();
                var password = jQuery('#password').val().trim();

                if(!username) {
                    alert('Por favor ingrese un nombre de usuario');
                    return false;
                }

                if(!password) {
                    alert('Por favor ingrese una contraseña');
                    return false;
                }

                var dataUsuario= db.ref("users-sub/user");
                
                var queryRef = dataUsuario.orderByChild("username_sign").equalTo(username).on('child_added', function(snapshot) {
                	//console.log(snapshot);
                	db.ref("users-sub/user/" + snapshot.key).on('child_added', function(data) {
                		//console.log(data.key, data.val());
                		if(data.key === 'password_sign'){
                			if(data.val() === password) {
                				alert('Bienvenido a la aplicacion!');
                				window.location = 'mapa.html';
                			} else {
                				alert('El usuario o la contrasena es incorrecto, revise');
                			}
                		}
                	});
                });

               



        });