import styles from "./sidebar.module.css";
import MainNav from './MainNav';
//import Footer from './Footer';
import { useState } from "react";
import { BsChevronLeft, BsChevronRight  } from "react-icons/bs";


const Sidebar = () => {
  const [expandSideBar, setExpandSideBar] = useState(false); 

  const handleExpand = () => {
    setExpandSideBar(!expandSideBar);
  };

  // Toggle sidebar class based on expandSideBar state
  const sidebarClass = expandSideBar ? `${styles.sidebar} ${styles.expanded}` : styles.sidebar;

  return (
    <div className={sidebarClass}>
      <p onClick={handleExpand} className={styles.Expandbutton}>
        {expandSideBar ? <BsChevronLeft size={30} /> : <BsChevronRight size={30} />}
      </p>

      {expandSideBar && 
      <div className={styles.imgcontainer}>
        <img className={styles.photo} src="src/assets/NovonesisLogoWordmark.png" alt="Novonesis Logo" />
      </div> 
      }
      <MainNav expandSidebar={expandSideBar} /> 
    </div>
  );
}

export default Sidebar;