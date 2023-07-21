/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { booksOnSale, getBooks } from '../api/bookData';
import { useAuth } from '../utils/context/authContext';
import BookCard from '../components/BookCard';

function Home() {
  // TODO: Set a state for books
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState();

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  const handleToggle = (e) => {
    setFilter(e);
  };

  // TODO: create a function that makes the API call to get all the books
  const getAllTheBooks = () => {
    getBooks(user.uid).then(setBooks);
  };

  const getBooksOnSale = () => {
    booksOnSale(user.uid).then(setBooks);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    if (filter === 2) {
      getBooksOnSale();
    } else {
      getAllTheBooks();
    }
    getAllTheBooks();
  }, [filter]);

  return (
    <div className="text-center my-4">
      <div style={{ margin: '10px' }}>
        <Link href="/book/new" passHref>
          <Button>Add A Book</Button>
        </Link>
      </div>

      <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={handleToggle}>
        <ToggleButton id="tbg-radio-1" value={1}>
          All Books
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Books on sale
        </ToggleButton>
      </ToggleButtonGroup>

      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {books.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAllTheBooks} />
        ))}
      </div>

    </div>
  );
}

export default Home;
