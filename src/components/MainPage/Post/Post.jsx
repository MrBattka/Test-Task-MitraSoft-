import React, { useEffect, useState } from "react";
import { getComments } from "../../../api/api";
import downArrow from "../../../assets/downArrow.png";
import upArrow from "../../../assets/upArrow.png";
import Comments from "./Comments/Comments";
import styles from "./Posts.module.css";
import Users from "./Users/Users";

const Post = ({ post, comments, users, key, setComments }) => {
  const [showComments, setShowComments] = useState(false)

  useEffect(() => {
    const timeFunc = setTimeout(() => {
      getComments(setComments);
    }, 500);
    return () => clearTimeout(timeFunc);
  }, [setComments])

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperAvaPost}>
            <Users users={users} post={post} key={key} />
      </div>
      <div className={styles.post}>
        <h3 className={styles.title}>{post.title}</h3>
        <p>{post.body}</p>
        <div className={styles.wrapperComments}>
          <span
            className={styles.titleComments}
            onClick={() => setShowComments(!showComments)}
          >
            comments
            {showComments ? (
              <img className={styles.arrow} src={downArrow} alt="Not Found" />
            ) : (
              <img className={styles.arrow} src={upArrow} alt="Not Found" />
            )}
          </span>
          <div className={styles.comments}>
            {showComments &&
              comments.map((c, i) => <Comments comments={c} key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
