import { useRouter } from 'next/router';

export default function EditAuthor() {
// inside component use

  const router = useRouter();

  const { firebaseKey } = router.query;
  return <h1>{firebaseKey}</h1>;
}
