import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import styles from "./Layout.module.css";

import Home from '../pages/Home';
import VoiceRecord from '../pages/VoiceRecord';

import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true); 
    } else if (!inView && isVisible) {
      const timeoutId = setTimeout(() => {
        setIsVisible(false); 
      }, 500); 
      return () => clearTimeout(timeoutId);
    }
  }, [inView, isVisible]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};
function Layout() {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.pageRender}>
          <FadeInSection><section id="home"><Home /></section></FadeInSection>
          <FadeInSection><section id="speak"><VoiceRecord /></section></FadeInSection>
        </div>
      </div>
      <Footer />
    </div>
  );
}

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;