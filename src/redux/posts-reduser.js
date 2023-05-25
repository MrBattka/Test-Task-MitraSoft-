
const POST = "POST";
const COMMENTS = "COMMENTS";

const initialState = {
  posts: [],
  comments: [],
};

const postsReduser = (state = initialState, action) => {
  switch (action.type) {
    case POST:
      return {
        ...state,
        posts: action.payload,
      };
    case COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export const setPosts = (posts) => ({ type: POST, payload: posts });
export const setComments = (comments) => ({ type: COMMENTS, payload: comments })

export default postsReduser;
