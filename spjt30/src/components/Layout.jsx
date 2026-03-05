import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      {/* 네비게이션 바 */}
      <header>
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
              <li style={styles.navItem}>
                <Link to="/" style={styles.navLink}>UserPage</Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/SignupForm" style={styles.navLink}># SignupForm #</Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/UserLogin" style={styles.navLink}># UserLogin #</Link>
              </li>
            </ul>
        </nav>
      </header>

      {/* 페이지 콘텐츠 */}
      <main>{children}</main>

      {/* 푸터 */}
      <footer>
        <p>&copy; 2026 My Website</p>
      </footer>
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  }
}

export default Layout;