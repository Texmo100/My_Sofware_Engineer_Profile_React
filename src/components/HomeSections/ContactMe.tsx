import styles from './ContactMe.module.css';

const ContactMe = () => {
    return (
        <section className={styles.contactMeSection}>
            <h4>Get in touch</h4>
            <div className={styles.contactMeContent}>
                <ul>
                    <div className={styles.contactMeItem}>
                        <li>Email</li>
                        <li>ir.isaac1000@gmail.com</li>
                    </div>

                    <div className={styles.contactMeItem}>
                        <li>Phone</li>
                        <li>+52 6621194655</li>
                    </div>

                    <div className={styles.contactMeItem}>
                        <li>LinkedIn</li>
                        <li>Isaac Iniguez Ruiz</li>
                    </div>
                </ul>
            </div>
        </section>
    );
};

export default ContactMe;
