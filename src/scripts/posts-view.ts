import { Post } from "./types";
import { switchPages, moveToPost } from "./posts-controller";


export function renderPosts(posts: Array<Post> | null, parentElement: Element, pageNumber: number, postsLimit: number) {
  if (posts) {
    parentElement.replaceChildren();
    for (let i = (pageNumber - 1) * postsLimit; i <= pageNumber * postsLimit - 1; i++) {
      let postElement = document.createElement("div");
      postElement.classList.add("post");
      let postElementDescription = document.createElement("h1");
      postElementDescription.textContent = `Post#${posts[i].id} ${posts[i].title}`;
      let postElementBody = document.createElement("p");
      postElementBody.textContent = posts[i].body;
      postElement.appendChild(postElementDescription);
      postElement.appendChild(postElementBody);
      parentElement.appendChild(postElement);
      postElement.addEventListener("click", ()=>{moveToPost(posts[i].id)});
    }
  }
}
export function renderError(parentElement: Element) {
  parentElement.replaceChildren();
  let errorMessage = document.createElement("p");
  errorMessage.textContent = "Error in request. I am sorry";
  parentElement.appendChild(errorMessage);
}

export function renderPageButtons(numberOfPages: number, activePage: number = 1, parentElement: Element) {
  parentElement.replaceChildren();
  for (let i = 0; i < numberOfPages; i++) {
    let pageButton = document.createElement("div");
    pageButton.classList.add("page-button");
    if (activePage == i + 1) {
      pageButton.classList.add("page-button-active");
    }
    pageButton.textContent = `${i + 1}`;
    pageButton.dataset.indexNumber = `${i + 1}`;
    parentElement.appendChild(pageButton);
    pageButton.addEventListener("click", switchPages);
  }
}
export function renderPostWithComments() {}
