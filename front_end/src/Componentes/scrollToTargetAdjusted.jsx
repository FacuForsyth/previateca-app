export default function scrollToTargetAdjusted(id) {
	var element = document.getElementById(id);
	var headerOffset = 72;
	var elementPosition = element.getBoundingClientRect().top;
	var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth',
	});
}
