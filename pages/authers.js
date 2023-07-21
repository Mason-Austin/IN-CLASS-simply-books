/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { favoriteAuthors, getAuthors } from '../api/authorData';
import { useAuth } from '../utils/context/authContext';
import AuthorCard from '../components/AuthorCard';

function AuthorHome() {
  // TODO: Set a state for books
  const [authors, setAuthors] = useState([]);
  const [filter, setFilter] = useState();

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  const getAllFavAuthors = () => {
    favoriteAuthors(user.uid).then(setAuthors);
  };

  const handleToggle = (e) => {
    setFilter(e);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    if (filter === 2) {
      getAllFavAuthors();
    } else {
      getAllTheAuthors();
    }
  }, [filter]);

  return (
    <div className="text-center my-4">
      <div style={{ margin: '10px' }}>
        <Link href="/author/new" passHref>
          <Button>Add A Author</Button>
        </Link>
      </div>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={handleToggle}>
        <ToggleButton id="tbg-radio-1" value={1}>
          All Authors
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Favorite Authors
        </ToggleButton>
      </ToggleButtonGroup>

      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllTheAuthors} />
        ))}
      </div>

    </div>
  );
}

export default AuthorHome;
