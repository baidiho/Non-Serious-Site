export class PostController {
	public baseUrl = new URL("https://jsonplaceholder.typicode.com");

	async requestToServer(url?: URL, options?: Object) {
		try {
			let request = await fetch(new URL("https://jsonplaceholder.typicode.com/posts")); // Need the solution
			let response = await request.json();
			return response;
		} catch (err) {
			console.log("Error is throw");
			throw err;
		}
	}
	// async pageRequest(options: PostControllerData) {
	// 	try {
	// 		options.arrayOfPosts = await requestToServer(new URL("/posts", options.baseUrl));
	// 		options.numberOfPages = Math.ceil(options.arrayOfPosts.length / options.numberOfPostsOnPage);
	// 		options.lastPageClicked = 1;
	// 	} catch (err) {
	// 		console.log("Error in controller");
	// 		console.log(err);
	// 		// renderError(options.mainContainer);
	// 	}
	// }

	// async refreshPage(mainContainer: Element, typeOfPage: string): Promise<void> {
	// 	if (typeOfPage == "main") {
	// 		mainContainer.replaceChildren();
	// 		this.view.renderFunctionalButton(typeOfPage, this.dataForPostTopic);
	// 		this.view.renderPosts();
	// 		this.view.renderPageNumberButtons();
	// 	} else {
	// 		// this.view.renderFunctionalButton(typeOfPage);
	// 		// this.view.renderSinglePost();
	// 		// this.view.renderComments();
	// 	}
	// }
}
