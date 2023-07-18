/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

function ShowUser({ userObj }) {
  console.warn('photo log', userObj.photoURL);
  return (
    <>
      <img alt={userObj.displayName} src={userObj.photoURL} />
      <h1>{userObj.displayName}</h1>
      <p>{userObj.email}</p>
      <p>{userObj.metadata.lastSignInTime}</p>
      <Button type="button" onClick={signOut}>Log Out</Button>
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
