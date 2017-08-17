let logado = JSON.parse( localStorage.getItem("logado") );
let nameUser = localStorage.getItem("nomeUsuario");
let login = new EventEmitter2()

LoginUsuario_render({ 
	logado: logado,
	usuario: localStorage.getItem("nomeUsuario"),
	onLogin: (nomeUsuario) => {
		logado = true
		localStorage.setItem("logado", true)
		localStorage.setItem("nomeUsuario", nomeUsuario )
		nameUser = nomeUsuario;
		login.emit("login");

	},
	onLogout: () => {
		logado = false
		localStorage.setItem("logado", false)
		localStorage.setItem("nomeUsuario", undefined )
		login.emit("logout");

	}
})