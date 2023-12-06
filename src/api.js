const baseUrl = process.env.REACT_APP_API_BASE_URL;

// READING
export function fetchPosts() {
  return fetch(`${baseUrl}/posts?_expand=user`).then((response) => {
    return response.json();
  });
}

export function fetchPostById(postId) {
  return fetch(`${baseUrl}/posts/${postId}?_expand=user&_embed=comments`).then(
    (response) => {
      return response.json();
    }
  );
}

export function fetchProjectById(projectId) {
  return fetch(`${baseUrl}/projects/${projectId}?_expand=user`).then(
    (response) => {
      return response.json();
    }
  );
}
// export function fetchUser/usernameById(userId) {
//   return fetch(`${baseUrl}/users/${userId}`).then((response) => {
//     return response.json();
//   });
// }

// going to add onto this file for CREATING and DELETING

// this will receive the data for the comment
// use POST method
export function saveComment(data) {
  // make a post request to /comments
  return fetch(`${baseUrl}/comments/`, {
    method: "POST",
    //   content of what you're going to send to be posted
    body: JSON.stringify(data),
    headers: {
      //   telling the application that we're sending json in the fetch body
      //   api will know to parse the json and put it into this db.json file
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

// use POST method
export function savePost(data) {
  // make a post request to /posts
  return fetch(`${baseUrl}/posts/`, {
    method: "POST",
    //   content of what you're going to send to be posted
    body: JSON.stringify(data),
    headers: {
      //   telling the application that we're sending json in the fetch body
      //   api will know to parse the json and put it into this db.json file
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

// use PATCH method to edit a post
export function updatePost(postId, data) {
  // make a patch request to /posts/postid
  return fetch(`${baseUrl}/posts/${postId}`, {
    method: "PUT",
    //   content of what you're going to send to be posted
    body: JSON.stringify(data),
    headers: {
      //   telling the application that we're sending json in the fetch body
      //   api will know to parse the json and put it into this db.json file
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

//use DELETE method
export function deletePost(postId) {
  return fetch(`${baseUrl}/posts/${postId}`, { method: "DELETE" });
}
