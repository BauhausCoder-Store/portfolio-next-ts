import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export const Navbar = () => {
    
    return (
            <nav className={styles.mynavbar}>
                    <ul>

                        {/* Home */}
                        <li className={styles.nav_item_home}>
                            <Link href="/" className={`${styles.navbar_link}`} >Home</Link>
                        </li>
                        
                        {/* Projects */}
                        <li className={styles.dropdown}>
                            <div className={`${styles.navbar_link} ${styles.dropbtn}`} >Projects</div>
                                <div className={styles.dropdown_content}>
                                    <Link  className={`${styles.navbar_link} ${styles.nav_item_projects_dropdown_li_1}`} href="/project_top">&quotThe Odin Project&quot</Link>
                                    <Link className={`${styles.navbar_link} ${styles.nav_item_projects_dropdown_li_2}`} href="/projects_react_nextjs">react/next.js-Projects</Link>
                                </div>
                        </li>

                        {/* About */}
                        <li className={styles.nav_item_about}>
                            <Link href="/about" className={`${styles.navbar_link}`} >About</Link>
                        </li>

                        {/* Contact */}
                        <li className={styles.nav_item_contact}>
                            <Link href="/contact" className={`${styles.navbar_link}`} >Contact</Link>
                        </li>

                        {/* Settings */}
                        <li className={styles.nav_item_settings}>
                            <Link href="/settings" className={`${styles.navbar_link}`} >Settings</Link>
                        </li>

                    </ul>
            </nav>
    )
} 
