import Image from 'next/image';
import profilePic from '../../public/logo.png';
import Burguer from "./Burguer/Burguer";
import styles from "./nav.module.css";

const Links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Components",
    route: "/Components",
  },
  {
    label: "Contact",
    route: "/Contact",
  },
];
export default function NavBar() {
  return (
    <>
      <nav className={`${styles.nav}`}>
        <div className={styles.navContainer}>
        <Image
         src={profilePic}
         alt='UI components Logo'
         width={200}/>
        <div>
          <Burguer Links={Links} />
        </div>
        </div>
      </nav>
    </>
  );
}
