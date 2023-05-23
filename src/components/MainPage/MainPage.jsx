import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts, getUsers } from "../../api/api";
import { setComments, setPosts } from "../../redux/posts-reduser";
import { setUsers } from "../../redux/users-reduser";
import Preloader from "../Common/Preloader/Preloader";
import styles from "./MainPage.module.css";
import Post from "./Post/Post";

const MainPage = ({
  comments,
  users,
  posts,
  setPosts,
  setComments,
  setUsers,
}) => {

  useEffect(() => {
    const timeFunc = setTimeout(() => {
      getPosts(setPosts);
      getUsers(setUsers);
    }, 500);
    return () => clearTimeout(timeFunc);
  }, [setPosts, setUsers]);

  if (!posts.length) {
    return <Preloader />;
  }

  return (
    <div className={styles.wrapper}>
      <div>
        {posts.map((p) => (
          <Post users={users} comments={comments} setComments={setComments} post={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postsReduser.posts,
    comments: state.postsReduser.comments,
    users: state.usersReduser.users,
  };
};

export const MainPageContainer = connect(mapStateToProps, {
  setPosts,
  setComments,
  setUsers,
})(MainPage);
