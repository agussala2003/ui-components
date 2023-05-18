import Image from "next/image";
import profilePic from "../../public/logo.png";
import styles from "./footer.module.css";
import Link from "next/link";

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

const Socials = [
    {
        label: "bxl-github",
        route: "https://github.com/agussala2003"
    },
    {
        label: "bxl-instagram",
        route: "https://www.instagram.com/salawebdev"
    },
    {
        label: "bxl-linkedin",
        route: "https://www.linkedin.com/in/agustin-saladino/"
    }
]

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerContainer}`}>
        <div className={`${styles.logoContainer}`}>
          <Image src={profilePic} alt="UI components Logo" width={200} />
        </div>
        <div className={`${styles.pagesContainer}`}>
          <h3 className={`${styles.h3}`}>Pages</h3>
          <div className={`${styles.firstContainer}`}>
            {
                Links.map ((item) => {
                    return <Link className={`${styles.links}`} key={item.label} href={item.route}>{item.label}</Link>
                })
            }
          </div>
        </div>
        <div className={styles.socialCopy}>
          <div>
            <h3 className={`${styles.h3} ${styles.newH3}`}>Social</h3>
            <div className={`${styles.secondContainer}`}>
              {
                  Socials.map ((item) => {
                      return <div key={item.label}><Link className={`${styles.socialLinks}`} target="_blank" href={item.route}><i className={`bx ${item.label}`}></i></Link></div>
                  })
              }
            </div>
          </div>
          <div className={`${styles.thirdContainer}`}>
          © Copyright. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
