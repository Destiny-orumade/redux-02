import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/add-user">Add User</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
