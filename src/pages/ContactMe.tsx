import React from 'react';
import styles from './ContactMe.module.css';
import Footer from '../components/Footer';

const ContactMe = ():React.ReactElement => {
    return (
        <div className={styles.contactMeWrapper}>
            <div className={styles.contactMeContent}>
                <h1>Get in touch</h1>
                <div className={styles.contactMeCard}>
                    <ul>
                        <div className={styles.contactMeCardItem}>
                            <li>Email</li>
                            <li>ir.isaac1000@gmail.com</li>
                        </div>

                        <div className={styles.contactMeCardItem}>
                            <li>Phone</li>
                            <li>+52 6621194655</li>
                        </div>

                        <div className={styles.contactMeCardItem}>
                            <li>LinkedIn</li>
                            <li>Isaac Iniguez Ruiz</li>
                        </div>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactMe;
