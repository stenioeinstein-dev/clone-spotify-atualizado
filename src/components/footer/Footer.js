import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.disclaimer_premium}>
            <div className={styles.text}>
                <p className={styles.disclaimer_premium_title}>Preview of Spotify</p>
                <p className={styles.disclaimer_premium_subtitle}>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </div>
            <div className={styles.button}>
                <button type="button">Sign up free</button>
            </div>
        </footer>
    );
}