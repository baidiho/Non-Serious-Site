import { Post, Comments, PostControllerData, ViewRenderData } from "./types";
import { switchPages, moveToPost } from "./posts-controller";
import { PostController } from "./post-script";

// function renderSinglePost(post: Post, parentElement: Element, callback?: Function) {
// 	let postElement = document.createElement("div");
// 	postElement.classList.add("post");
// 	let postElementDescription = document.createElement("h1");
// 	postElementDescription.textContent = `Post#${post.id} ${post.title}`;
// 	let postElementBody = document.createElement("p");
// 	postElementBody.textContent = post.body;
// 	postElement.append(postElementDescription, postElementBody);
// 	parentElement.appendChild(postElement);
// 	if (callback) {
// 		postElement.addEventListener("click", () => {
// 			callback(post);
// 		});
// 	}
// }
// export function renderPosts(
// 	posts: Array<Post> | Post,
// 	parentElement: Element,
// 	pageNumber: number,
// 	postsLimit: number,
// 	callback?: Function
// ) {
// 	parentElement.replaceChildren();
// 	let postContainer = document.createElement("div");
// 	postContainer.classList.add("posts-container");
// 	if (Array.isArray(posts)) {
// 		for (let i = (pageNumber - 1) * postsLimit; i <= pageNumber * postsLimit - 1; i++) {
// 			renderSinglePost(posts[i], postContainer, callback);
// 		}
// 		parentElement.appendChild(postContainer);
// 	} else {
// 		console.log("I am here ");

// 		renderSinglePost(posts, postContainer);
// 		parentElement.appendChild(postContainer);
// 		return postContainer;
// 	}
// }

// export function renderError(parentElement: Element) {
// 	parentElement.replaceChildren();
// 	let errorMessage = document.createElement("p");
// 	errorMessage.textContent = "Error in request. I am sorry";
// 	parentElement.appendChild(errorMessage);
// }

// export function renderPageButtons(numberOfPages: number, activePage: number = 1, parentElement: Element) {
// 	let buttonContainer = document.createElement("div");
// 	buttonContainer.classList.add("page-button-container");

// 	for (let i = 0; i < numberOfPages; i++) {
// 		let pageButton = document.createElement("div");
// 		pageButton.classList.add("page-button");
// 		if (activePage == i + 1) {
// 			pageButton.classList.add("page-button-active");
// 		}

// 		pageButton.textContent = `${i + 1}`;
// 		pageButton.dataset.indexNumber = `${i + 1}`;
// 		buttonContainer.appendChild(pageButton);
// 		pageButton.addEventListener("click", switchPages);
// 	}
// 	parentElement.appendChild(buttonContainer);
// }

// /* This is for single post page for a while */
// export function renderPostWithComments(post: Post, parentElement: Element) {
// 	parentElement.replaceChildren();
// 	let postElement = document.createElement("div");
// 	postElement.classList.add("post");
// 	let postElementDescription = document.createElement("h1");
// 	postElementDescription.textContent = `Post#${post.id} ${post.title}`;
// 	let postElementBody = document.createElement("p");
// 	postElementBody.textContent = post.body;
// 	let buttonBack = document.createElement("button");
// 	buttonBack.classList.add("back-button");
// 	buttonBack.textContent = "Back";
// 	postElement.appendChild(buttonBack);
// 	postElement.appendChild(postElementDescription);
// 	postElement.appendChild(postElementBody);
// 	parentElement.appendChild(postElement);
// }

// export function renderComments(comments: Array<Comments>, parentElement: Element) {
// 	if (comments) {
// 		for (let i = 0; i <= comments.length - 1; i++) {
// 			let commentElement = document.createElement("div");
// 			commentElement.classList.add("comment");
// 			let commentNumber = document.createElement("h1");
// 			commentNumber.textContent = `Comment#${i + 1}`;
// 			let commentatorName = document.createElement("h2");
// 			commentatorName.textContent = comments[i].name;
// 			let commentatorEmail = document.createElement("h2");
// 			commentatorEmail.textContent = comments[i].email;
// 			let commentText = document.createElement("p");
// 			commentText.textContent = comments[i].body;
// 			commentElement.appendChild(commentNumber);
// 			commentElement.appendChild(commentatorEmail);
// 			commentElement.appendChild(commentText);
// 			parentElement.appendChild(commentElement);
// 		}
// 	}
// }
/**************************************************************************************** */
export class PostView {
	public controller: PostController;
	constructor() {
		this.controller = new PostController();
	}
	public renderData: ViewRenderData = {
		mainContainer: document.querySelector(".topic-content-async"),
		numberOfPostsOnPerPage: 5,
		button: document.querySelector(".request"),
		lastPageClicked: 1
	};

	async loadDataFromServer() {
		this.renderData.arraysOfPosts = await this.controller.requestToServer();
		this.renderData.numberOfPages = Math.ceil(
			this.renderData.arraysOfPosts.length / this.renderData.numberOfPostsOnPerPage
		);
		this.renderMainPage(this.renderData);
	}
	renderMainPage(options: ViewRenderData) {
		options.mainContainer.replaceChildren();
		this.renderFunctionalButton("main", this.renderData.mainContainer);
		this.renderPosts(options, this.renderPostWithComments);
		this.renderPageNumberButtons(options);
	}
	renderFunctionalButton(typeOfPage: string, container: Element, callback?: EventListener) {
		const button = document.createElement("button");
		if (typeOfPage == "main") {
			button.classList.add("navigation-button", "request");
			button.textContent = "Load posts";
		} else {
			button.classList.add("navigation-button", "back");
			button.textContent = "Return";
		}
		container.appendChild(button);
		if (callback) {
			button.addEventListener("click", callback, { once: true });
		}
	}

	renderPosts(options: ViewRenderData, callback?: Function) {
		let postContainer = document.createElement("div");
		postContainer.classList.add("posts-container");
		for (
			let i = (options.lastPageClicked - 1) * options.numberOfPostsOnPerPage;
			i <= options.lastPageClicked * options.numberOfPostsOnPerPage - 1;
			i++
		) {
			this.renderSinglePost(options.arraysOfPosts[i], postContainer, callback);
		}
		options.mainContainer.appendChild(postContainer);
	}
	renderPageNumberButtons(options: ViewRenderData) {
		let buttonContainer = document.createElement("div");
		buttonContainer.classList.add("page-button-container");
		console.log("I ma render buttomn");
		console.log(options.numberOfPages);
		for (let i = 0; i < options.numberOfPages; i++) {
			console.log("Some text in cycle");

			let pageButton = document.createElement("div");
			pageButton.classList.add("page-button");
			if (options.lastPageClicked == i + 1) {
				pageButton.classList.add("page-button-active");
			}
			pageButton.textContent = `${i + 1}`;
			pageButton.dataset.indexNumber = `${i + 1}`;
			buttonContainer.appendChild(pageButton);
			pageButton.addEventListener("click", this.switchPage);
		}
		options.mainContainer.appendChild(buttonContainer);
	}
	switchPage(e: Event) {
		if ((e.target as Element).classList.contains("page-button-active")) {
			return;
		}
		this.renderData.lastPageClicked = Number((e.target as HTMLElement).dataset.indexNumber);
		this.renderMainPage(this.renderData);
	}
	renderPostWithComments() {}

	renderSinglePost(post: Post, container: Element, callback?: Function) {
		let postElement = document.createElement("div");
		postElement.classList.add("post");
		let postElementDescription = document.createElement("h1");
		postElementDescription.textContent = `Post#${post.id} ${post.title}`;
		let postElementBody = document.createElement("p");
		postElementBody.textContent = post.body;
		postElement.append(postElementDescription, postElementBody);
		if (callback) {
			postElement.addEventListener(
				"click",
				() => {
					callback(post);
				},
				{ once: true }
			);
		}
		container.appendChild(postElement);
	}
	static renderComments() {}
	static renderError() {}
}
const instance = new PostView();
instance.loadDataFromServer();
