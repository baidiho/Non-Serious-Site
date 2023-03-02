export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface PostControllerOptions {
	mainContainer: Element;
	baseUrl: URL;
	postsOnPage: number;
	requestButton: Element;
	postContainer: Element;
	arrayOfPosts?: Array<Post>;
	pageButtonsContainer: Element;
	numberOfPages?: number;
	lastPageClicked?: number;
}
export interface PostControllerData {
	baseUrl: URL;
	mainContainer: Element;
	requestButton: Element;
	singlePost?: Post;
	arrayOfPosts?: Array<Post>;
	numberOfPostsOnPage: number;
	numberOfPages?: number;
	lastPageClicked?: number;
}
export interface Comments {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}
export interface ViewRenderData {
	mainContainer: Element;
	button: Element;
	numberOfPostsOnPerPage: number;
	numberOfPages?: number;
	lastPageClicked?: number;
	arraysOfPosts?: Array<Post>;
}
