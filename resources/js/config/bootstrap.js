/**
 * For Twitter Bootstrap FrameWork javascript part
 * bootstrap dependencies [popper.js , jquery]
 */
try {
	window.Popper = require('popper.js').default;
	window.$ = window.jQuery = require('jquery');

	require('bootstrap');
} catch (e) {}
