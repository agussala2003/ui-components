import styles from "./components.module.css";
import Image from 'next/image';
import languajes from '../../public/languajes.png';
import css from '../../public/css.png';
import js from '../../public/js.png';

export default function ComponentsPage() {
  return (
    <div className={`${styles.componentMain}`}>
      <div className={`${styles.infoContainer}`}>
        <div>
          <h1 className={`${styles.h1}`}>Welcome to Our Component Library</h1>
          <h3 className={`${styles.h3} ${styles.h32}`}>
            Explore Our Wide Range of Components and Get Inspired with Our
            Component Gallery
          </h3>
        </div>
        <div className={`${styles.logo}`}>
        <Image
         src={languajes}
         alt='UI components Logo'
         width={300}
        />
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Navigation Templates</h3>
          <h5 className={`${styles.h5}`}>
            Navbar, breadcrumbs, tabs, menu, pagination, sidebar, footer.
          </h5>
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Form components</h3>
          <h5 className={`${styles.h5}`}>
            Input fields, select boxes, checkboxes, radio buttons, toggle
            buttons, date picker, time picker, file uploader.
          </h5>
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Card components</h3>
          <h5 className={`${styles.h5}`}>
            Basic card, image card, testimonial card, product card, pricing
            card, feature card, blog post card.
          </h5>
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Button components</h3>
          <h5 className={`${styles.h5}`}>
            Primary button, secondary button, ghost button, link button, icon
            button, disabled button, loading button.
          </h5>
        </div>
      </div>
    </div>
  );
}
