import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../store/userSlide';
import { AppDispatch } from '../store/store';

// Define the User type properly
interface User {
  id: number;
  name: string;
  email: string;
}

interface UserProps {
  user: User;
}

const UserCard: React.FC<UserProps> = ({ user }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <Link to={`/users/${user.id}`}>View Details</Link>
      <Link to={`/edit-user/${user.id}`}>Edit</Link>
      <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
    </div>
  );
};

export default UserCard;
