import { call, put, takeEvery } from "redux-saga/effects";
import { getComments, getPosts, getProfile, getUsers } from "../api/api";
import { setComments, setPosts } from "../redux/posts-reduser";
import { setUsers } from "../redux/users-reduser";
import { setProfile } from "../redux/profile-reduser";

function* fetchPosts(action) {
  try {
    const posts = yield call(getPosts, action.payload);
    yield put(setPosts(posts));
  } catch (e) {
    yield put();
  }
}

function* fetchUsers(action) {
  try {
    const users = yield call(getUsers, action.payload.userId);
    yield put(setUsers(users));
  } catch (e) {
    yield put();
  }
}

function* fetchComments(action) {
  try {
    const comments = yield call(getComments, action.payload);
    yield put(setComments(comments));
  } catch (e) {
    yield put();
  }
}

function* fetchProfile(action) {
  try {
    const profile = yield call(getProfile, action.payload.userId);
    yield put(setProfile(profile));
  } catch (e) {
    yield put();
  }
}

function* mySaga() {
  yield takeEvery("POSTS_FETCH_REQUESTED", fetchPosts);
  yield takeEvery("USER_FETCH_REQUESTED", fetchUsers);
  yield takeEvery("COMMENTS_FETCH_REQUESTED", fetchComments);
  yield takeEvery("COMMENTS_FETCH_REQUESTED", fetchProfile);
}

export default mySaga;
