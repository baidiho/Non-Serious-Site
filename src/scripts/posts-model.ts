import Post from "./types";
let base = new URL("https://jsonplaceholder.typicode.com");
let responsePosts: Array<Post>;
export async function requestData(url: URL, headers?: Object) {
  try {
    let request = await fetch(url);
    let response = await request.json();
    return request.ok;
  } catch (err) {
    console.log("Handling-erorrr");
  }
  await console.log("Error is gone");
}
// async function postRequest(url: URL, headers?: Object) {
//   try {
//     let request = await fetch(url, headers);
//     responsePosts = await request.json();
//     console.log(responsePosts);
//     responsePosts.forEach((post) => {
//       renderPost(post);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }
// postRequest(new URL("/posts", base));
// if (responsePosts) {
//   console.log(responsePosts);
// } else {
//   console.log("Nothing to show");
// }
