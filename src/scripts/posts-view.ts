import { Post, Comments, PostControllerData, ViewRenderData } from "./types";

import { PostController } from "./post-script";

export class PostView {
  public controller: PostController;
  public this: Object;
  constructor() {
    this.controller = new PostController();
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
    this.renderMainPage = this.renderMainPage.bind(this);
    this.renderFunctionalButton = this.renderFunctionalButton.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
    this.renderPageNumberButtons = this.renderPageNumberButtons.bind(this);
    this.switchPage = this.switchPage.bind(this);
    this.renderPostWithComments = this.renderPostWithComments.bind(this);
    this.renderPostWithComments = this.renderPostWithComments.bind(this);
    this.renderSinglePost = this.renderSinglePost.bind(this);
  }

  public renderData: ViewRenderData = {
    mainContainer: document.querySelector(".topic-content-async"),
    numberOfPostsOnPerPage: 5,
    button: document.querySelector(".request"),
    lastPageClicked: 1,
  };

  async loadDataFromServer() {
    try {
      this.renderData.arraysOfPosts = await this.controller.requestToServer("/posts");
      this.renderData.numberOfPages = Math.ceil(
        this.renderData.arraysOfPosts.length / this.renderData.numberOfPostsOnPerPage
      );
      this.renderMainPage(this.renderData);
    } catch (err) {
      this.renderError(this.renderData);
    }
  }
  /*Main page with all posts */
  renderMainPage(options: ViewRenderData) {
    options.mainContainer.replaceChildren();
    this.renderFunctionalButton("main", this.renderData.mainContainer, this.loadDataFromServer);
    this.renderPosts(options, this.renderPostWithComments);
    this.renderPageNumberButtons(options);
  }
  renderFunctionalButton(typeOfPage: string, container: Element, callback?: EventListener) {
    const button = document.createElement("button");
    if (typeOfPage == "main") {
      button.classList.add("navigation-button", "request");
      button.textContent = "Load ";
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
      this.renderSinglePost(options.arraysOfPosts[i], postContainer, () => {
        this.renderPostWithComments(options.arraysOfPosts[i], options);
      });
    }
    options.mainContainer.appendChild(postContainer);
  }
  renderPageNumberButtons(options: ViewRenderData) {
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("page-button-container");
    for (let i = 0; i < options.numberOfPages; i++) {
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

  /*Post page with comments********************************************************************************* */
  async loadComments(post: Post) {
    try {
      this.renderData.arraysOfComments = await this.controller.requestToServer(`/posts/${post.id}/comments`);
      console.log(this.renderData.arraysOfComments.length);
    } catch (err) {
      console.log("Error with load comments");
      console.log(err);
    }
  }
  async renderPostWithComments(post: Post, options: ViewRenderData) {
    await this.loadComments(post);
    options.mainContainer.replaceChildren();
    this.renderFunctionalButton("", this.renderData.mainContainer, () => {
      this.renderMainPage(options);
    });
    /*Creating a personal container */
    const containerPostAndComments = document.createElement("div");
    containerPostAndComments.classList.add("post-comments-container");
    options.mainContainer.append(containerPostAndComments);
    this.renderSinglePost(post, containerPostAndComments);
    this.renderComments(options.arraysOfComments, containerPostAndComments);
  }
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
    return postElement;
  }
  renderComments(comments: Array<Comments>, container: Element) {
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
        commentElement.append(commentNumber, commentatorEmail, commentText);
        container.appendChild(commentElement);
      }
    }
  }

  renderError(options: ViewRenderData) {
    options.mainContainer.replaceChildren();
    this.renderFunctionalButton("main", options.mainContainer, this.loadDataFromServer);
    let errorMessage = document.createElement("p");
    errorMessage.textContent = "Error in request. I am sorry";
    options.mainContainer.appendChild(errorMessage);
  }
}
const instance = new PostView();
document.querySelector(".request").addEventListener("click", instance.loadDataFromServer);
