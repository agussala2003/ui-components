import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.bannerHome}>
        <div className={styles.bannerInfoContainer}>
          <h1 className={`${styles.bannerInfo} ${styles.h1}`}>The Ultimate Frontend Component Library</h1>
          <p className={`${styles.bannerInfo} ${styles.p}`}>This website is dedicated to providing a comprehensive selection of components for frontend development. From navigation menus to form inputs and everything in between, our collection of components has been carefully curated to meet the needs of modern web development. Our goal is to help developers create beautiful, functional, and user-friendly interfaces with ease. Each component comes with clear documentation and code examples to make integration into your project as simple as possible. Whether you are building a website from scratch or looking to enhance an existing project, our website has the components you need to take your frontend development to the next level.</p>
          <Link className={styles.link} href='/Components'><i className='bx bxs-book-open' ></i>See the components</Link>
        </div>
      </div>
    </div>
  );
}
