const PROFILE = "PROFILE";
const PROFILE_POST = "PROFILE_POSt";
const PROFILE_COMMENTS = 'PROFILE_COMMENTS'

const initialState = {
  profile: [],
  profilePosts: [],
  profileComments: []
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case PROFILE_POST:
      return {
        ...state,
        profilePosts: action.payload,
      };
      case PROFILE_COMMENTS:
      return {
        ...state,
        profileComments: action.payload,
      };
    default:
      return state;
  }
};

export const setProfile = (profile) => ({ type: PROFILE, payload: profile });
export const setProfilePosts = (profilePosts) => ({ type: PROFILE_POST, payload: profilePosts });
export const setProfileComments = (profileComments) => ({ type: PROFILE_COMMENTS, payload: profileComments })


export default profileReduser;
