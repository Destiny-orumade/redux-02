import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const UserDetails = () => {
  const { id } = useParams();
  const user = useSelector((state: RootState) =>
    state.users.users.find(user => user.id === Number(id))
  );

  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
