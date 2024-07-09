document.querySelector('.submit').addEventListener('click', function () {
	let input1 = document.querySelector('.input-1');
	let input2 = document.querySelector('.input-2');
	let input3 = document.querySelector('.input-3');
	let input4 = document.querySelector('.input-4');
	let input5 = document.querySelector('.input-5');
	let result = document.querySelector('.result');
	result.innerHTML = 'మీరు ఎంచుకున్న సంఖ్య :';
	let sum = 0;
	if (input1.checked) {
		sum += parseInt(input1.value, 10);
	}
	if (input2.checked) {
		sum += parseInt(input2.value, 10);
	}
	if (input3.checked) {
		sum += parseInt(input3.value, 10);
	}
	if (input4.checked) {
		sum += parseInt(input4.value, 10);
	}
	if (input5.checked) {
		sum += parseInt(input5.value, 10);
	}
	if (sum == 0) result.innerHTML += ` ${32}`;
	else result.innerHTML += ` ${sum}`;
});
document.querySelector('.homepage').addEventListener('click', function () {
	window.location.replace('index.html');
});

const d = new Date();
document.querySelector('.footer').innerHTML += ` ${d.getFullYear()}`;

document.querySelector('.useful-link').addEventListener('click', function () {
	window.location.replace('useful-links.html');
});
