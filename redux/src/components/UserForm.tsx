import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from '../store/userSlide';
import { AppDispatch, RootState } from '../store/store';
import { useNavigate, useParams } from 'react-router-dom';

const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) =>
    state.users.users.find(user => user.id === Number(id))
  );

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      dispatch(updateUser({ id: user.id, name, email }));
    } else {
      dispatch(addUser({ id: Date.now(), name, email }));
    }
    navigate('/users');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{user ? 'Edit User' : 'Add User'}</h3>
      <label htmlFor="name">Name:</label>
      <input 
      id="name"
      type="text" 
      value={name} 
      placeholder="Enter your name"
      onChange={(e) => setName(e.target.value)} 
      required />

      <label htmlFor="email">Email:</label>
      <input 
        id="email" 
        type="email" 
        value={email} 
        placeholder="Enter your email" 
        onChange={(e) => setEmail(e.target.value)} 
        required />
      
      <button type="submit">{user ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
