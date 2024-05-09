// pages/index.js

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>My Apps</title>
                <meta name="description" content="My Apps" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <hr />
                <h1>My Apps</h1>
                <hr />
            </header>

            <main>
                <Sidebar />
                <hr />
                <MainContent />
            </main>

            <footer className={styles.footer}>
                <hr />
                <p>2024 My Apps</p>
                <hr />
            </footer>
        </div>
    );
}
