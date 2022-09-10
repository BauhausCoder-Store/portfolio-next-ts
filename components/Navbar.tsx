import styles from '../styles/Navbar.module.css'

export const Navbar = () => {
    
    return (
            <nav className={styles.mynavbar}>
                    <ul>

                        {/* Home */}
                        <li className={styles.nav_item_home}>
                            <a href="/">Home</a>
                        </li>
                        
                        {/* Projects */}
                        <li className={styles.dropdown}>
                            <a className={styles.dropbtn} href="/" >Projects</a>
                                <div className={styles.dropdown_content}>
                                    <a  className={styles.nav_item_projects_dropdown_li_1} href="/project_top">"The Odin Project"</a>
                                    <a className={styles.nav_item_projects_dropdown_li_2} href="/projects_react_nextjs">react/next.js-Projects</a>
                                </div>
                        </li>

                        {/* About */}
                        <li className={styles.nav_item_about}>
                            <a href="/about">About</a>
                        </li>

                        {/* Contact */}
                        <li className={styles.nav_item_contact}>
                            <a href="/contact">Contact</a>
                        </li>

                        {/* Settings */}
                        <li className={styles.nav_item_settings}>
                            <a href="/settings">Settings</a>
                        </li>

                    </ul>
            </nav>
    )
} 
