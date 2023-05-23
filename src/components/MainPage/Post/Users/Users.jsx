import React from "react";
import { NavLink } from "react-router-dom";
import avaPost from "../../../../assets/ava_posts.jpg";
import styles from "./Users.module.css";

const Users = ({ post }) => {
  return (
    <div>
      <NavLink to={`/profile/${post.userId}`}><img className={styles.avaPost} src={avaPost} alt="Not Found." /></NavLink>
    </div>
  );
};

export default Users;
