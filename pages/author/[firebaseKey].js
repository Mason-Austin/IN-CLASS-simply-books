import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetials, setAuthorDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  const getAuthorDetails = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  useEffect(() => {
    getAuthorDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseKey]);

  console.warn('authordetials', authorDetials);
  console.warn('books', authorDetials.books);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <h2>{authorDetials.first_name} {authorDetials.last_name}</h2>
        <h3>{authorDetials.email}</h3>
      </div>
      <div className="text-white ms-5 details">
        {authorDetials.books?.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAuthorDetails} />
        ))}
      </div>
    </div>
  );
}
