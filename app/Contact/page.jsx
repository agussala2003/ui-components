'use client'
import Link from "next/link"
import styles from "./contact.module.css"
import { Inter_Tight } from "next/font/google";
import GenerationLink from "./msg";

const inter = Inter_Tight ({
    subsets: ["latin"],
    display: "swap",
  });

const Socials = [
    {
        label: "bxl-github",
        route: "https://github.com/agussala2003",
        user: "agussala2003"
    },
    {
        label: "bxl-instagram",
        route: "https://www.instagram.com/salawebdev",
        user: "salawebdev"
    },
    {
        label: "bxl-linkedin",
        route: "https://www.linkedin.com/in/agustin-saladino/",
        user: "Agustin Saladino"
    },
    {
        label: "bxl-paypal",
        route: "https://paypal.me/agussala2003?country.x=AR&locale.x=es_XC",
        user: "agussala2003"
    },
    {
        label: "bxl-whatsapp",
        route: `https://api.whatsapp.com/send?phone=+541123465194`,
        user: "1123465194"
    }
]
console.log(GenerationLink)

export default function ContactPage() {
    return (
        <>
            <div className={`${styles.contactMain} ${styles.noMarginPadding}`}>
                <div className={`${styles.contactContainer} ${styles.firstContainer}`}>
                    <div>
                        <h1 className={`${styles.noMarginPadding} ${styles.h1}`}>Lets Talk</h1>
                        <p className={`${styles.noMarginPadding} ${styles.p}`}>Have some big idea or brand to develop and need help? Then reach out we would love to hear about your project and provide help</p>
                    </div>
                    <div>
                        <h3 className={`${styles.noMarginPadding} ${styles.subtitles}`}>Email</h3>
                        <Link className={`${styles.links} ${styles.bbtm}`} target="_blank" href={'mailto:saladev03@gmail.com'}>saladev03@gmail.com</Link>
                    </div>
                    <div>
                        <h3 className={`${styles.noMarginPadding} ${styles.subtitles}`}>Socials</h3>
                        <div className={`${styles.socialContainers}`}>
                            {
                                Socials.map((item) => {
                                    return <li className={`${styles.noMarginPadding} ${styles.li}`} key={item.label}><i className={`bx ${item.label}`}></i><Link className={`${styles.links} ${styles.bbtm}`} target="_blank" href={item.route}>{item.user}</Link></li>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={`${styles.contactContainer} ${styles.formContainer}`}>
                    <label id="Name" htmlFor="Name">Name</label>
                    <input className={`${inter.className}`} placeholder="Name" type="text" name="Name" />
                    <label htmlFor="Email">Email</label>
                    <input className={`${inter.className}`} placeholder="Email" type="email" name="Email"/>
                    <label htmlFor="service">What service are you interested in</label>
                    <select className={`${inter.className}`} placeholder="Select service type" name="service" id="dropService">
                        <option value="Landing Page">Landing Page</option>
                        <option value="Home + 2 Pages">Home + 2 Pages</option>
                        <option value="Home + 4 Pages">Home + 4 Pages</option>
                    </select>
                    <label htmlFor="message">Message</label>
                    <input className={`${styles.textarea} ${inter.className}`} type="text" name="message" />
                    <button onClick={GenerationLink} type="submit">Sumbit</button>
                </div>
            </div>
        </>
    )
}