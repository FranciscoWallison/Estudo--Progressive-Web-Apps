const verssao = 9

//criar uma avriavel global para poder atualizar o css
let arquivos = [
"/",
"css/estilos.css",
"css/opcoesDaPagina.css",
"css/opcoesDoCartao.css",
"css/cabecalho.css",
"css/login.css",
"css/loginForm.css",
"css/loginStatus.css",
"css/cartao.css",
"css/novoCartao.css",
"css/mural.css",
"js/sw/registrar.js",
"js/lib/jquery.js",
"js/lib/eventemitter2.js",
"js/lib/KeyBoardNavigation.js",
"js/tags/Tags.js",
"js/cabecalho/mudaLayout.js",
"js/cabecalho/busca.js",
"js/filtro/Filtro.js",
"js/login/LoginUsuario_render.js",
"js/login/LoginUsuario.js",
"js/tipos/TiposCartao.js",
"js/cartao/render/Cartao_renderHelpers.js",
"js/cartao/render/CartaoOpcoes_render.js",
"js/cartao/render/CartaoConteudo_render.js",
"js/cartao/render/Cartao_render.js",
"js/cartao/Cartao.js",
"js/mural/render/Mural_render.js",
"js/mural/Mural.js",
"js/cabecalho/novoCartao.js",
"img/bin2.svg",
"img/edit.svg",
]

self.addEventListener("install", function(){
	console.log("Instalou");	
})

/*
	TO::DO
'	Validar ser tem veção nova - verificar a const
	Validar se tem conteudo novo na aplicação - 
		criar uma variavel que verifique isso e atualize so memnte o conteudo novo e fazer as validações
*/
self.addEventListener("activate", function(){
	caches.open("ceep-arquivos-" + verssao ).then(cache => {
		cache.addAll(arquivos).then(cache => {
			caches.delete("ceep-arquivos-"+ ( verssao - 1 ) )
			caches.delete("ceep-arquivos")
		})
	})
})

caches.open('ceep-arquivos').then(cache =>{
	cache.addAll(arquivos);
})

self.addEventListener('fetch', function(event){

	let pedido = event.request
	let promiseResposta = caches.match(pedido).then(respostaCache => {
		let resposta = respostaCache ? respostaCache : fetch(pedido)
		return resposta
	})

	event.respondWith(promiseResposta)
})
