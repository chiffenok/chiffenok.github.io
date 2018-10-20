import React from "react";
import Home from '../../components/Home/Home';
import styles from './Layout.module.scss';

const Layout = () => {
    return (
        <div className="App">
            <header className={styles.header}>
                <div className={styles.titlesName}>
                    <h1>Anna Presnyakova</h1>
                    <h2>Web-Developer</h2>
                </div>
                <nav className={styles.navigation}>
                    <ul className={styles.navigationList}>
                        <li>Home</li>
                        <li>Resume</li>
                        <li>Projects</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
            </header>
            <main className={styles.main}>
                <Home/>
            </main>
            <footer className={styles.footer}>
                <div>footer</div>
            </footer>
        </div>
    );
};

export default Layout;
