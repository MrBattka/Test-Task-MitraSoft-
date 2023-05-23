import React from 'react'
import styles from './ProfileComments.module.css'

const ProfileComments = ({ profileComments }) => {
  return (
    <div className={styles.wrapper}>
        <p><b>{profileComments.email}</b></p>
        <p>{profileComments.body}</p>
    </div>
  )
}

export default ProfileComments