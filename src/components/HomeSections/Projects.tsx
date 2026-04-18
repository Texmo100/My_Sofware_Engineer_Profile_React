import styles from './Projects.module.css';

const Projects = () => {
    return (
        <section className={styles.projectsSection}>
            <div className={styles.projectsContent}>
                <h3>Get a glance of my work</h3>
                <button>Projects</button>
            </div>
            <div className={styles.notchWrapperProjects}>
                <div className={styles.notchProjects}></div>
            </div>
        </section>
    );
};

export default Projects;
