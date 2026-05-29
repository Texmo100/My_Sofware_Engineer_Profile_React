import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { SiElectron } from "react-icons/si";
import { SiDjango } from "react-icons/si";

import { SiPytest } from "react-icons/si";
import { SiJest } from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";
import { SiFirebase } from "react-icons/si";

import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

import { DiScrum } from "react-icons/di";

import { FaFigma } from "react-icons/fa";

import { SiCoursera } from "react-icons/si";

export interface Skill {
    id: number,
    icon: any,
    iconLabel: string,
};

export interface Certification {
    id: number,
    icon: any,
    certificationName: string,
    instituteName: string,
    issued: string,
};

export const aboutMeInfo = `Hi, I'm Isaac I.R. a Mexican Software Engineer 
    specializing in Web Development & Artificial Intelligence.
    Passionate about technological innovation and creating digital 
    solutions that turn ideas into realities. 
    My goal is to keep elevating my technical and leadership skills to contribute to 
    challenging projects that make a difference in the industry.`;

export const careerData = [
    {
        id: 0,
        companyName: '3pillar Global Inc.',
        roleName: 'Apprentice Software Engineer',
        yearsOfExperience: '2021 - 2022'
    },
    {
        id: 1,
        companyName: '3pillar Global Inc.',
        roleName: 'Software Engineer I',
        yearsOfExperience: '2022 - 2024'
    },
];

export const languagesData: Skill[] = [
    {
        id: 0,
        icon: FaPython,
        iconLabel: 'Python' 
    },
    {
        id: 1,
        icon: IoLogoJavascript,
        iconLabel: 'JavaScript ES6+'
    },
    {
        id: 2,
        icon: ImHtmlFive,
        iconLabel: 'HTML 5'
    },
        {
        id: 3,
        icon: FaCss3,
        iconLabel: 'CSS 3'
    },
];

export const frameworksAndLibrariesData: Skill[] = [
    {
        id: 0,
        icon: FaReact,
        iconLabel: 'React'
    },
    {
        id: 1,
        icon: FaReact,
        iconLabel: 'React Native'
    },
    {
        id: 2,
        icon: SiElectron,
        iconLabel: 'Electron'
    },
    {
        id: 3,
        icon: SiDjango,
        iconLabel: 'Django'
    },
];

export const testingFrameworksAndToolsData: Skill[] = [
    {
        id: 0,
        icon: SiPytest,
        iconLabel: 'PyTest'
    },
    {
        id: 1,
        icon: SiJest,
        iconLabel: 'Jest'
    },
];

export const databasesData: Skill[] = [
    {
        id: 0,
        icon: BiLogoPostgresql,
        iconLabel: 'PostgreSQL'
    },
    {
        id: 1,
        icon: SiFirebase,
        iconLabel: 'FireBase'
    },
];

export const toolsAndPlatformsData: Skill[] = [
    {
        id: 0,
        icon: FaGitAlt,
        iconLabel: 'Git'
    },
    {
        id: 1,
        icon: FaDocker,
        iconLabel: 'Docker'
    },
        {
        id: 2,
        icon: FaAws,
        iconLabel: 'AWS'
    },
];

export const methodologiesData: Skill[] = [
    {
        id: 0,
        icon: DiScrum,
        iconLabel: 'SCRUM'
    },
];

export const designAndPrototype: Skill[] = [
    {
        id: 1,
        icon: FaFigma,
        iconLabel: 'Figma'
    },
];

export const certificationsData: Certification[] = [
    {
        id: 0,
        icon: SiCoursera,
        certificationName: 'Computational Thinking for Problem Solving',
        instituteName: 'University of Pennsylvania',
        issued: 'Issued Sep 2024',
    },
    {
        id: 1,
        icon: SiCoursera,
        certificationName: 'Mathematics for Machine Learning: Linear Algebra',
        instituteName: 'Imperial College London',
        issued: 'Issued Jan 2025',
    },
    {
        id: 2,
        icon: SiCoursera,
        certificationName: 'Mathematics for Machine Learning: Multivariate Calculus',
        instituteName: 'Imperial College London',
        issued: 'Issued Jan 2025',
    },
    {
        id: 3,
        icon: SiCoursera,
        certificationName: 'Mathematics for Machine Learning: PCA',
        instituteName: 'Imperial College London',
        issued: 'Issued Feb 2025',
    },
    {
        id: 4,
        icon: SiCoursera,
        certificationName: 'Tools for Data Science',
        instituteName: 'IBM',
        issued: 'Issued Mar 2025',
    },
    {
        id: 5,
        icon: SiCoursera,
        certificationName: 'Data Science Methodology',
        instituteName: 'IBM',
        issued: 'Issued Mar 2025',
    },
    {
        id: 6,
        icon: SiCoursera,
        certificationName: 'Python for Data Science, AI & Development',
        instituteName: 'IBM',
        issued: 'Issued Apr 2025',
    },
    {
        id: 7,
        icon: SiCoursera,
        certificationName: 'Databases and SQL for Data Science with Python',
        instituteName: 'IBM',
        issued: 'Issued Apr 2025',
    },
    {
        id: 8,
        icon: SiCoursera,
        certificationName: 'Data Analysis with Python',
        instituteName: 'IBM',
        issued: 'Issued May 2025',
    },
    {
        id: 9,
        icon: SiCoursera,
        certificationName: 'Data Visualization with Python',
        instituteName: 'IBM',
        issued: 'Issued Jun 2025',
    },
    {
        id: 10,
        icon: FaAws,
        certificationName: 'AWS Cloud Technical Essentials',
        instituteName: 'AWS',
        issued: 'Issued Aug 2025',
    },
    {
        id: 11,
        icon: SiCoursera,
        certificationName: 'Machine Learning with Python',
        instituteName: 'IBM',
        issued: 'Issued Sep 2025',
    },
];

