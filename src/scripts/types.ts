export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostControllerOptions {
  baseUrl: URL;
  postsOnPage: number;
  requestButton: Element;
  postContainer: Element;
  arrayOfPosts?: Array<Post>;
  pageButtonsContainer: Element;
  numberOfPages?: number;
  lastPageClicked?: number;
}
