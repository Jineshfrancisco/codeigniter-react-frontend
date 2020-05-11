// navbar Active class
let url = window.location.pathname + window.location.search;
if (url === '/home') {
	document.querySelector('.home').classList.add('active');
} else if (url === '/contact') {
	document.querySelector('.contact').classList.add('active');
} else if (url === '/services') {
	document.querySelector('.services').classList.add('active');
} else if (url === '/about') {
	document.querySelector('.about').classList.add('active');
} else {
	// for "if(url === /')"
	document.querySelector('.home').classList.add('active');
}
