import { useAuth } from '../utils/context/authContext';
import ShowUser from '../components/User';

export default function Profile() {
  const { user } = useAuth();
  return <ShowUser userObj={user} />;
}
