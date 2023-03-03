export async function requestToServer(url: URL, options?: Object) {
  try {
    let request = await fetch(url);
    let response = await request.json();
    return response;
  } catch (err) {
    console.log("Error is throw");
    throw err;
  }
}


