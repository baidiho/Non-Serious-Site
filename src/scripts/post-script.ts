import { requestToServer } from "./posts-model";
import { PostView } from "./posts-view";
import { Post, PostControllerData } from "./types";


class PostController  {
  private const view
  constructor() {
    this.view = PostView;
  }
  public dataForPostTopic: PostControllerData = {
    mainContainer: document.querySelector('topic-content-async');
    baseUrl: new URL("https://jsonplaceholder.typicode.com"),
    numberOfPostsOnPage: 5,
    requestButton: document.querySelector(".request"),
    
  };
async firstRequest (options: PostControllerData) {
  try {
    options.arrayOfPosts = await requestToServer(new URL("/posts", options.baseUrl));
    options.numberOfPages = Math.ceil(options.arrayOfPosts.length / options.numberOfPostsOnPage);
    options.lastPageClicked = 1;
    this.view.renderPosts(options); //NEED TO ADD CALLBACK
    this.view.renderPageNumberButtons(options.numberOfPages, 1, options.mainContainer);
  } catch (err) {
    console.log("Error in controller");
    console.log(err);
    renderError(options.mainContainer);
  }
}

  async refreshPage(mainContainer: Element,typeOfPage: string): Promise<void> {
    if (typeOfPage == "main") {
      mainContainer.replaceChildren();
      this.view.renderFunctionalButton(typeOfPage, this.dataForPostTopic);
      this.view.renderPosts();
      this.view.renderPageNumberButtons();
    } else {
      // this.view.renderFunctionalButton(typeOfPage);
      // this.view.renderSinglePost();
      // this.view.renderComments();
    }
  }
}
