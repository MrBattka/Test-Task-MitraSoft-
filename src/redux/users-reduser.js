const USERS = "USERS";

const initialState = {
  users: []
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export const setUsers = (users) => ({ type: USERS, payload: users });

export default usersReduser;
