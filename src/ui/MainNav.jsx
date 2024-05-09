import styles from "./MainNav.module.css";
import { Link } from 'react-scroll';
import { FaHome, FaMicrophoneAlt   } from 'react-icons/fa';

function MainNav() {
  const iconSize = 40;
  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.menu__button}>
        <Link to="home" 
            spy={true}
            smooth={true} 
            duration={100} 
            offset={-100}> 
          <FaHome style={{marginRight: "5px"}} size={iconSize} />
          <p className={styles.menu__text}>{('Home')} </p>
      </Link>
        </li>


        <li className={styles.menu__button}>
        <Link to="speak" 
            spy={true}
            smooth={true} 
            duration={100} 
            offset={-100}> 
          <FaMicrophoneAlt style={{marginRight: "5px"}} size={iconSize} />
          <p className={styles.menu__text}>{('Speak')} </p>
      </Link>
        </li>

        {/* Add other sections as needed */}
      </ul>
    </nav>
  );
}

export default MainNav;