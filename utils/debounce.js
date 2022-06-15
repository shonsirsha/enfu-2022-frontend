export default function debounce(callback, wait) {
	let timerId = null;
	return function debounced(...args) {
		if (timerId) {
			clearTimeout(timerId);
		}
		timerId = setTimeout(() => {
			callback(...args);
		}, wait);
	};
}
