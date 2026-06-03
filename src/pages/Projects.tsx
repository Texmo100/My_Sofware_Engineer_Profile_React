import React from 'react';
import styles from './Projects.module.css';

import Footer from '../components/Footer';
import { FaGithub } from "react-icons/fa";

const Projects = ():React.ReactElement => {
    return (
        <div className={styles.projectsWrapper}>
            <div className={styles.projectsContent}>
                <a href='https://github.com/Texmo100' className={styles.projectCard}>
                    <FaGithub className={styles.projectCardIcon}/>
                    <p className={styles.projectCardText}>Checkout my work on Github</p>
                </a>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
