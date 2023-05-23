
export const getPosts = (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => dispatch(json));
};

export const getComments = (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((response) => response.json())
    .then((json) => dispatch(json));
}

export const getUsers = (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => dispatch(json));
}

export const getProfile = (dispatch, userId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((json) => dispatch(json));
}