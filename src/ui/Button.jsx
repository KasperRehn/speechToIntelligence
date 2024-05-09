import styles from './Button.module.css';
import PropTypes from 'prop-types'; 

const Button = ({ children, size, variation }) => {
  const sizeClass = `button${size.charAt(0).toUpperCase() + size.slice(1)}`; // Capitalizes the size prop
  const variationClass = `button${variation.charAt(0).toUpperCase() + variation.slice(1)}`; // Capitalizes the variation prop
  const className = `${styles[sizeClass]} ${styles[variationClass]}`;

  return (
    <button className={className}>
      {children}
    </button>
  );
};

// Define PropTypes
Button.propTypes = {
  children: PropTypes.node.isRequired, // React node covers anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']).isRequired, // Ensures size is one of the specified strings and is required.
  variation: PropTypes.oneOf(['exit', 'primary', 'secondary', 'danger', 'success']).isRequired, // Ensures variation is one of the specified strings and is required.
};



export default Button;
