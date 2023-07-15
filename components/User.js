/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

function ShowUser({ userObj }) {
  console.warn('photo log', userObj.photoURL);
  return (
    <>
      <img alt={userObj.displayName} src={userObj.photoURL} />
      <h1>{userObj.displayName}</h1>
      <p>{userObj.email}</p>
      <p>{userObj.metadata.lastSignInTime}</p>
    </>
  );
}

export default ShowUser;

ShowUser.propTypes = {
  userObj: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
    email: PropTypes.string,
    metadata: PropTypes.shape({ lastSignInTime: PropTypes.string }),
  }).isRequired,
};
