import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://jsonplaceholder.typicode.com/`,
});

export const getPosts = async (dispatch) => {
  try {
    const res = instance.get(`posts`);
    res.then((response) => dispatch(response.data));
  } catch (err) {
    if (axios.AxiosError(err)) {
      console.log(err.response?.data.errText, "error");
    } else if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

export const getComments = (dispatch) => {
  try {
    const res = instance.get(`comments`);
    res.then((response) => dispatch(response.data));
  } catch (err) {
    if (axios.AxiosError(err)) {
      console.log(err.response?.data.errText, "error");
    } else if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

export const getUsers = (dispatch) => {
  try {
    const res = instance.get(`users`);
    res.then((response) => dispatch(response.data));
  } catch (err) {
    if (axios.AxiosError(err)) {
      console.log(err.response?.data.errText, "error");
    } else if (err instanceof Error) {
      console.log(err.message);
    }
  }
};
export const getProfile = (dispatch, userId) => {
    try {
        const res = instance.get(`users/${userId}`);
        res.then((response) => dispatch(response.data))
      } catch (err) {
        if (axios.AxiosError(err)) {
          console.log(err.response?.data.errText, "error");
        } else if (err instanceof Error) {
          console.log(err.message);
        }
      }
};
