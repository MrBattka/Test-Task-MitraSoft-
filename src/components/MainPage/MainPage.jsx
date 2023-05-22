import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getComments, getPosts } from "../../api/api";
import { setComments, setPosts } from "../../redux/posts-reduser";
import Preloader from "../Common/Preloader/Preloader";
import styles from "./MainPage.module.css";
import Post from "./Post/Post";

const MainPage = ({ comments, posts, setPosts, setComments }) => {
  useEffect(() => {
    const timeFunc = setTimeout(() => {
      getPosts(setPosts);
      getComments(setComments);
    }, 500);
    return () => clearTimeout(timeFunc);
  }, [setComments, setPosts])

  if (!posts.length) {
    return <Preloader />
  }

  return (
    <div className={styles.wrapper}>
      {posts.map((p, i) => (
        <Post comments={comments} post={p} key={i} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postsReduser.posts,
    comments: state.postsReduser.comments,
  };
};

export const MainPageContainer = connect(mapStateToProps, {
  setPosts,
  setComments,
})(MainPage);
