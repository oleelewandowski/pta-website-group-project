import Image from 'next/image';
import styles from './nav-logo.module.css';

const NavLogo = () => {
  return (
    <div className={styles.logo}>
      <Image alt='' src='/images/pta-logo/logo.jpg' width='100' height='100' />
    </div>
  );
};

export default NavLogo;
