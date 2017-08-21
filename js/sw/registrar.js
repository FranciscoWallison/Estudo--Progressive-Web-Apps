if('serviceWorker' in navigator)
{
	navigator.serviceWorker.register('service-worker.js').then(function(registration) {
	    console.log('sw registrado com sucesso');
	}).catch(function(error) {
	    console.error('erro ao registrar sw');
	    console.error(error);
	});
}