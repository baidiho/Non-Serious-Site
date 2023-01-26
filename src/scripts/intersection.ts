export default function onLoadObserver(): void {
	// setup
	let animationOptions = {
		threshold: [0.25]
	};

	/***************Observer for animated text************** */
	let animationsCallback = function (entries: any) {
		if (entries[0].isIntersecting) {
			entries[0].target.classList.add("topic-description-animated");
			animationObserver.unobserve(entries[0].target);
		}
	};

	const animationObserver = new IntersectionObserver(animationsCallback, animationOptions);

	/************Observer for status bar */
	let firstIntersect = false;
	let statusbarOptions = {
		threshold: [0.55]
	};
	let statusBarCallback = function (entries: any) {
		if (entries[0].isIntersecting && entries[0].intersectionRatio >= 0.55) {
			if (firstIntersect) {
				document.querySelector(".status-item-active").classList.remove("status-item-active");
			}
			document
				.querySelector(`[href="#${entries[0].target.getAttribute("id")}"] .status-item-circle`)
				.classList.add("status-item-active");
			firstIntersect = true;
		}
	};

	const statusBarObserver = new IntersectionObserver(statusBarCallback, statusbarOptions);

	const observableElement: any = document.querySelectorAll(".topic-description");
	const observableElementStatus: any = document.querySelectorAll(".topic-container");

	observableElement.forEach((element: any) => {
		animationObserver.observe(element);
	});
	observableElementStatus.forEach((element: any) => {
		statusBarObserver.observe(element);
	});
}
// window.addEventListener("load", () => onLoadObserver());
