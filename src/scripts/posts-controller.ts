import { requestData } from "./posts-model";
let base = new URL("https://jsonplaceholder.typicode.com");
requestData(new URL("/posts", base));
