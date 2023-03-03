export default function onLoadObserver(): void {
	/***************Observer for animated text************** */
	let animationOptions = {
		threshold: [0.25]
	};
	let animationsCallback = function (entries: any) {
		if (entries[0].isIntersecting) {
			entries[0].target.classList.add("topic-description-animated");
			animationObserver.unobserve(entries[0].target);
		}
	};

	const animationObserver = new IntersectionObserver(animationsCallback, animationOptions);
	const observableElement: any = document.querySelectorAll(".topic-description");
	observableElement.forEach((element: any) => {
		animationObserver.observe(element);
	});

	/************Observer for status bar */
	let firstIntersect = false;
	let statusbarOptions = {
		threshold: [0.55]
	};
	let statusBarCallback = function (entries: any) {
		if (entries[0].isIntersecting && entries[0].intersectionRatio >= 0.55) {
			if (document.querySelector(".status-item-active")) {
				document.querySelector(".status-item-active").classList.remove("status-item-active");
			}
			document
				.querySelector(`[href="#${entries[0].target.getAttribute("id")}"] .status-item-circle`)
				.classList.add("status-item-active");

			firstIntersect = true;
		}
	};

	const statusBarObserver = new IntersectionObserver(statusBarCallback, statusbarOptions);
	const observableElementStatus: any = document.querySelectorAll(".topic-container");
	observableElementStatus.forEach((element: any) => {
		statusBarObserver.observe(element);
	});

	/*Observer for the greeting section */
	let optionForDisabledStatusBar = {
		threshold: [0.55]
	};
	let callbackForDisabledStatusBar = function (entries: any) {
		if (entries[0].isIntersecting) {
			document.querySelector(".status-bar").classList.add("status-bar-hide");
			document.querySelector(".up-button").classList.add("up-button-hide");
		} else {
			document.querySelector(".status-bar").classList.remove("status-bar-hide");
			document.querySelector(".up-button").classList.remove("up-button-hide");
		}
	};
	let observerForDisabledStatusBar = new IntersectionObserver(callbackForDisabledStatusBar, optionForDisabledStatusBar);
	observerForDisabledStatusBar.observe(document.getElementById("greeting"));
}
