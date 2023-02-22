import Post from "./types";
export default function renderPost(post: Post) {
  if (post) {
    let postElement = document.createElement("div");
    postElement.classList.add("post");
    let postElementDescription = document.createElement("h1");
    postElementDescription.textContent = post.title;
    let postElementBody = document.createElement("p");
    postElementBody.textContent = post.body;
    postElement.appendChild(postElementDescription);
    postElement.appendChild(postElementBody);
    document.querySelector(".topic-content-async").appendChild(postElement);
  }
}
