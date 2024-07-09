setTimeout(function () {
	document.querySelector('.welcome').classList.add('toggling');
	document.querySelector('.home').classList.remove('toggling');
}, 1000);
document.querySelector('.btn-1').addEventListener('click', function () {
	window.location.replace('game.html');
});
