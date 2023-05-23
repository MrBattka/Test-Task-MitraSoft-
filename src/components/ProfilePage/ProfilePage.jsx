import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getComments, getPosts, getProfile } from "../../api/api";
import {
  setProfile,
  setProfileComments,
  setProfilePosts,
} from "../../redux/profile-reduser";
import Preloader from "../Common/Preloader/Preloader";
import styles from "./ProfilePage.module.css";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import downArrow from "../../assets/downArrow.png";
import upArrow from "../../assets/upArrow.png";

const ProfilePage = ({
  profile,
  setProfile,
  profilePosts,
  profileComments,
  setProfilePosts,
  setProfileComments,
}) => {
  const [showAddress, setShowAddress] = useState(false);
  const [showGeo, setShowGeo] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    const timeFunc = setTimeout(() => {
      getProfile(setProfile, userId);
      getPosts(setProfilePosts);
      getComments(setProfileComments);
    }, 500);
    return () => clearTimeout(timeFunc);
  }, [userId, setProfile, setProfilePosts, setProfileComments]);

  if (profile.length === 0) {
    return <Preloader />;
  }
  const prfilePost = profilePosts.map((p) => p.userId);
  if (prfilePost === userId) {
    return profilePosts;
  }

  return (
    <>
    <p className={styles.wrapperBackBtn}><NavLink to='/main'>Назад</NavLink></p>
    <div className={styles.wrapper}>
        
      <div className={styles.addInfo}>
        <p>
          <b>Name:</b> {profile.name}
        </p>
        <p>
          <b>Email:</b> {profile.email}
        </p>
        <div>
          <p>
            <b>Address:</b>
            <span
              className={styles.wrapperArrow}
              onClick={() => setShowAddress(!showAddress)}
            >
              {showAddress ? (
                <img className={styles.arrow} src={downArrow} alt="Not Found" />
              ) : (
                <img className={styles.arrow} src={upArrow} alt="Not Found" />
              )}
            </span>
          </p>
          {showAddress && (
            <div className={styles.address}>
              <p>
                <b>Street:</b> {profile.address.street}
              </p>
              <p>
                <b>Suite:</b> {profile.address.suite}
              </p>
              <p>
                <b>City:</b> {profile.address.city}
              </p>
              <p>
                <b>Zipcode:</b> {profile.address.zipcode}
              </p>
              <p>
                <b>Geo:</b>
                <span
                  className={styles.wrapperArrow}
                  onClick={() => setShowGeo(!showGeo)}
                >
                  {showGeo ? (
                    <img
                      className={styles.arrow}
                      src={downArrow}
                      alt="Not Found"
                    />
                  ) : (
                    <img
                      className={styles.arrow}
                      src={upArrow}
                      alt="Not Found"
                    />
                  )}
                </span>
              </p>
              {showGeo && (
                <div>
                  {Object.keys(profile.address.geo).map((key) => {
                    return (
                      <div>
                        <Geo
                          key={key}
                          geoTitle={key}
                          geoValue={profile.address.geo[key]}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
        <div>
          <p>
            <b>Company:</b>
            <span
              className={styles.wrapperArrow}
              onClick={() => setShowCompany(!showCompany)}
            >
              {showCompany ? (
                <img className={styles.arrow} src={downArrow} alt="Not Found" />
              ) : (
                <img className={styles.arrow} src={upArrow} alt="Not Found" />
              )}
            </span>
          </p>
          {showCompany && (
            <div>
              {Object.keys(profile.company).map((key) => {
                return (
                  <Company
                    key={key}
                    companyTitle={key}
                    companyValue={profile.company[key]}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className={styles.profilePosts}>
        <h2>My Posts:</h2>
        {profilePosts.map((p) => (
          <div>
            {p.userId == userId && (
              <ProfilePosts
                userId={userId}
                profileComments={profileComments}
                profilePosts={p}
              />
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

const Geo = ({ geoTitle, geoValue }) => {
  return (
    <div className={styles.geo}>
      <p>
        <b>{geoTitle}:</b> {geoValue}
      </p>
    </div>
  );
};

const Company = ({ companyTitle, companyValue }) => {
  return (
    <div className={styles.company}>
      <p>
        <b>{companyTitle}:</b> {companyValue}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profileReduser.profile,
    profilePosts: state.profileReduser.profilePosts,
    profileComments: state.profileReduser.profileComments,
  };
};

export const ProfilePageContainer = connect(mapStateToProps, {
  setProfile,
  setProfilePosts,
  setProfileComments,
})(ProfilePage);
