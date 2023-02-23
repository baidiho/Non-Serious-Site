import { requestToServer } from "./posts-model";
import { renderError, renderPageButtons, renderPosts } from "./posts-view";

import { PostControllerOptions } from "./types";

/*Variables for for controller work */
let options: PostControllerOptions = {
  baseUrl: new URL("https://jsonplaceholder.typicode.com"),
  postsOnPage: 5,
  requestButton: document.querySelector(".request"),
  postContainer: document.querySelector(".posts-container"),
  pageButtonsContainer: document.querySelector(".page-button-container"),
};
/*first request to server*/
options.requestButton.addEventListener("click", startRequest);

async function startRequest() {
  try {
    options.arrayOfPosts = await requestToServer(new URL("/posts", options.baseUrl));
    options.numberOfPages = Math.ceil(options.arrayOfPosts.length / options.postsOnPage);
    renderPosts(options.arrayOfPosts, options.postContainer, 1, options.postsOnPage);
    renderPageButtons(options.numberOfPages, 1, options.pageButtonsContainer);
  } catch (err) {
    console.log("Error in controller");
    console.log(err);
    renderError(options.postContainer);
  }
}
/*Switch pages */
export function switchPages(e: Event) {
  if ((e.target as Element).classList.contains("page-button-active")) {
    return;
  }
  options.lastPageClicked = Number((e.target as HTMLElement).dataset.indexNumber);
  renderPosts(options.arrayOfPosts, options.postContainer, options.lastPageClicked, options.postsOnPage);
  renderPageButtons(options.numberOfPages, options.lastPageClicked, options.pageButtonsContainer);
}

export function moveToPost(postId: number) {
  let url = new URL(`posts/${postId}/comments`, options.baseUrl);
  let response = requestToServer(url);
  console.log(response);
}
