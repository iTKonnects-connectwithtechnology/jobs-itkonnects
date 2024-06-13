import React, { useState } from 'react';
import styles from './Nav.module.css';

const Navbar = () => {

  const [clicked, setclicked] = useState(false);

  return (
    <div className='bg-dark'>

      <div className={`container ${styles.navbar}`}>
        <nav>
          <div className={styles.navdiv}>
            <div className={styles.logo}>
              <a href="your-url-here" className="text-warning">Jobio</a>
            </div>
            
            <ul className={`${styles.menu}`}>
              <li><a href="">Home</a></li>
              <li><a href="">Apply</a></li>
              <li><a href="">Status</a></li>
              <li><a href="">About</a></li>
              <button className='btn btn-sm btn-success'>Join us</button>
            </ul>

          </div>
        </nav>
      </div>

    </div>
  );
};

export default Navbar;
