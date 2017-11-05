// usuarios


User = function(user, password, first_name, last_name){
	this.user = user;
	this.password = password;
	this.first_name = first_name;
	this.last_name = last_name;
};


// Simulación de los datos
var datauser= [
	new User('elandres', '1234', 'Andres', 'guzman'),
	new User('banano', '1234', 'steven', 'uribe'),
	new User('elbrayan', '1234', 'brayan', 'torres'),
	new User('hubertoculos', '1234', 'humberto', 'castellanos'),
	new User('jesusmaria', '1234', 'chuma', 'uribe'),
	new User('dorisita', '1234', 'milena', 'uribe'),
];