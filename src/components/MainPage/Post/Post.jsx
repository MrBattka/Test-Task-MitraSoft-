import React, { useState } from 'react'
import avaPost from '../../../assets/ava_posts.jpg'
import Comments from './Comments/Comments'
import styles from './Posts.module.css'

const Post = ({ post, comments }) => {
    const [showComments, setShowComments] = useState(false)
    
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperAvaPost}>
        <img className={styles.avaPost} src={avaPost} alt="Not Found." />
      </div>
      <div className={styles.post}>
        <h3 className={styles.title}>{post.title}</h3>
        <p>{post.body}</p>
        <div className={styles.comments}>
            <span onClick={() => setShowComments(!showComments)}>comments</span>
            {showComments && comments.map((c, i) => <Comments comments={c} key={i} />)}
        </div>
      </div>
    </div>
  )
}

export default Post