"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./burguer.module.css";

export default function Burguer({ Links }) {
    const [show, setShow] = useState(false);
    const lastStyles = styles
    return (
        <>
        <div className={lastStyles.burguer} onClick={() => setShow(!show)}>
            <div className={show ? styles.lineOpen : styles.line}></div>
            <div className={show ? styles.lineOpen : styles.line}></div>
            <div className={show ? styles.lineOpen : styles.line}></div>
        </div>
        <div className={show ? lastStyles.ulActive : lastStyles.ul}>
            {Links.map((link) => (
                <Link onClick={() => setShow(false)} className={styles.links} key={link.route} href={link.route}>{link.label}</Link>
            ))}
        </div>
        </>
    );
    }