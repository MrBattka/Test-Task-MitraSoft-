import React from 'react'
import styles from './Comments.module.css'

const Comments = ({ comments }) => {
  return (
    <div className={styles.wrapper}>
        <p>{comments.email}</p>
        <p>{comments.body}</p>
    </div>
  )
}

export default Comments