import { Post, Comments, PostControllerData } from "./types";
import { switchPages, moveToPost } from "./posts-controller";

function renderSinglePost(post: Post, parentElement: Element, callback?: Function) {
  let postElement = document.createElement("div");
  postElement.classList.add("post");
  let postElementDescription = document.createElement("h1");
  postElementDescription.textContent = `Post#${post.id} ${post.title}`;
  let postElementBody = document.createElement("p");
  postElementBody.textContent = post.body;
  postElement.append(postElementDescription, postElementBody);
  parentElement.appendChild(postElement);
  if (callback) {
    postElement.addEventListener("click", () => {
      callback(post);
    });
  }
}
export function renderPosts(
  posts: Array<Post> | Post,
  parentElement: Element,
  pageNumber: number,
  postsLimit: number,
  callback?: Function
) {
  parentElement.replaceChildren();
  let postContainer = document.createElement("div");
  postContainer.classList.add("posts-container");
  if (Array.isArray(posts)) {
    for (let i = (pageNumber - 1) * postsLimit; i <= pageNumber * postsLimit - 1; i++) {
      renderSinglePost(posts[i], postContainer, callback);
    }
    parentElement.appendChild(postContainer);
  } else {
    console.log("I am here ");

    renderSinglePost(posts, postContainer);
    parentElement.appendChild(postContainer);
    return postContainer;
  }
}

export function renderError(parentElement: Element) {
  parentElement.replaceChildren();
  let errorMessage = document.createElement("p");
  errorMessage.textContent = "Error in request. I am sorry";
  parentElement.appendChild(errorMessage);
}

export function renderPageButtons(numberOfPages: number, activePage: number = 1, parentElement: Element) {
  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("page-button-container");

  for (let i = 0; i < numberOfPages; i++) {
    let pageButton = document.createElement("div");
    pageButton.classList.add("page-button");
    if (activePage == i + 1) {
      pageButton.classList.add("page-button-active");
    }

    pageButton.textContent = `${i + 1}`;
    pageButton.dataset.indexNumber = `${i + 1}`;
    buttonContainer.appendChild(pageButton);
    pageButton.addEventListener("click", switchPages);
  }
  parentElement.appendChild(buttonContainer);
}

/* This is for single post page for a while */
export function renderPostWithComments(post: Post, parentElement: Element) {
  parentElement.replaceChildren();
  let postElement = document.createElement("div");
  postElement.classList.add("post");
  let postElementDescription = document.createElement("h1");
  postElementDescription.textContent = `Post#${post.id} ${post.title}`;
  let postElementBody = document.createElement("p");
  postElementBody.textContent = post.body;
  let buttonBack = document.createElement("button");
  buttonBack.classList.add("back-button");
  buttonBack.textContent = "Back";
  postElement.appendChild(buttonBack);
  postElement.appendChild(postElementDescription);
  postElement.appendChild(postElementBody);
  parentElement.appendChild(postElement);
}

export function renderComments(comments: Array<Comments>, parentElement: Element) {
  if (comments) {
    for (let i = 0; i <= comments.length - 1; i++) {
      let commentElement = document.createElement("div");
      commentElement.classList.add("comment");
      let commentNumber = document.createElement("h1");
      commentNumber.textContent = `Comment#${i + 1}`;
      let commentatorName = document.createElement("h2");
      commentatorName.textContent = comments[i].name;
      let commentatorEmail = document.createElement("h2");
      commentatorEmail.textContent = comments[i].email;
      let commentText = document.createElement("p");
      commentText.textContent = comments[i].body;
      commentElement.appendChild(commentNumber);
      commentElement.appendChild(commentatorEmail);
      commentElement.appendChild(commentText);
      parentElement.appendChild(commentElement);
    }
  }
}
/**************************************************************************************** */
export class PostView {
  static renderFunctionalButton(typeOfPage: string, options: any) {
    const button = document.createElement("button");
    if (typeOfPage == "main") {
      button.classList.add("navigation-button", "request");
    } else {
      button.classList.add("navigation-button", "back");
    }
    options.mainContainer.appendChild(button);
  }

  static renderPosts(options: PostControllerData, callback?: Function) {
    let postContainer = document.createElement("div");
    postContainer.classList.add("posts-container");
    for (
      let i = (options.lastPageClicked - 1) * options.numberOfPostsOnPage;
      i <= options.lastPageClicked * options.numberOfPostsOnPage - 1;
      i++
    ) {
      renderSinglePost(options.arrayOfPosts[i], postContainer, callback);
    }
    options.mainContainer.appendChild(postContainer);
  }
  static renderPageNumberButtons() {}
  static renderSinglePost(post: Post, parentElement: Element, callback?: Function) {
    let postElement = document.createElement("div");
    postElement.classList.add("post");
    let postElementDescription = document.createElement("h1");
    postElementDescription.textContent = `Post#${post.id} ${post.title}`;
    let postElementBody = document.createElement("p");
    postElementBody.textContent = post.body;
    postElement.append(postElementDescription, postElementBody, postElement);
    if (callback) {
      postElement.addEventListener("click", () => {
        callback(post);
      });
    }
  }
  static renderComments() {}
  static renderError() {}
}
