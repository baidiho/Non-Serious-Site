export class Request {
  public baseUrl = new URL("https://jsonplaceholder.typicode.com");

  async requestToServer(modifier: string) {
    try {
      let request = await fetch(new URL(modifier, this.baseUrl));
      let response = await request.json();
      return response;
    } catch (err) {
      console.log("Error is throw");
      throw err;
    }
  }
}
