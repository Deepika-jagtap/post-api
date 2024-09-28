async function postdata(blogPost) {
  try {
    // Create the headers
    const headers = {
      "Content-Type": "application/json",
    };

    // Create the POST body
    const body = JSON.stringify({
      title: blogPost.title,
      body: blogPost.body,
      userId: blogPost.userId,
    });

    // Send the POST request
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: headers,
      body: body,
    });
    // Parse the JSON response
    const data = await response.json();
    console.log("Success:", data);
  } catch (error) {
    //  errors
    console.error("Error:", error);
  }
}

postdata({
  title: "the new post api example",
  body: "this is the new post test example",
  userId: 1,
});
