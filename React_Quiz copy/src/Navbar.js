import { Link } from 'react-router-dom';

export default function Navbar() {
  return <>
  <p>LA MIA NAVBAR</p>
  <ul>
    <li>
      <Link to="/quiz">quiz</Link>
    </li>
    <li>
      <Link to="/dashboard">dashboard</Link>
    </li>
  </ul>
  
  </>
}