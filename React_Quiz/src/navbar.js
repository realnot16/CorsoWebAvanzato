import { useState } from 'react'
import  styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }
  return (
    <>
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}

          <a href='#home' className={`${styles.logo}`}>Dev. </a>
          <ul className={`${styles.navMenu}`}>
            <li onClick={removeActive}>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li onClick={removeActive}>
            <Link to="/quiz">Quiz</Link>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>


    </div>
    </>
  );
}
export default Navbar;
;