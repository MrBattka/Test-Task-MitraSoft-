import React, { useState } from "react";
import styles from "./ProfilePosts.module.css";
import ProfileComments from "../ProfileComments/ProfileComments";
import downArrow from "../../../assets/downArrow.png";
import upArrow from "../../../assets/upArrow.png";

const ProfilePosts = ({ profilePosts, profileComments }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className={styles.wrapper}>
      <p>
        <b>{profilePosts.title}</b>
      </p>
      <p>{profilePosts.body}</p>
      <div>
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
        {showComments && (
          <div className={styles.comments}>
            {profileComments.map((c) => (
              <div>
                {c.postId === profilePosts.id && (
                  <ProfileComments profileComments={c} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePosts;
