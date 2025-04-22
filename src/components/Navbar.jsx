import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.link_list}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
        <li><span>Life</span>dev</li>
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : '')}>
        <li>Login</li>
        </NavLink>
        <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : '')}>
        <li>Register</li>
        </NavLink>
        <button className={styles.exit}>Exit</button>
        </ul>
      </nav>
    </>
  )
}

export default Navbar