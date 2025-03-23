import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/userSlide';
import { RootState, AppDispatch } from '../store/store';
import UserCard from './UserCard';

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => { dispatch(fetchUsers()); }, [dispatch]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
};

export default UserList;
