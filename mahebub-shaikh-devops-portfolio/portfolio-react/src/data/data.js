import {
  FaDocker,
  FaAws,
  FaLinux,
  FaUbuntu,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPhp,
  FaPython,
  FaJsSquare,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  SiMysql,
  SiMongodb,
  SiNginx,
  SiApache,
  SiGnubash,
} from 'react-icons/si'
import { MdSecurity, MdOutlineLoop, MdOutlineBalance } from 'react-icons/md'
import { HiOutlineServerStack, HiOutlineServer, HiOutlineArchiveBoxArrowDown } from 'react-icons/hi2'

export const socials = [
  { name: 'GitHub', href: 'https://github.com/', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/', icon: FaLinkedin },
  { name: 'Twitter', href: 'https://twitter.com/', icon: FaTwitter },
]

export const contactInfo = {
  email: 'shaikhmahebub160@gmail.com',
  phone: '+91 8767175780',
  location: 'Pune, Maharashtra, India',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const skillCategories = [
  {
    title: 'DevOps',
    icon: MdOutlineLoop,
    skills: [
      { name: 'Docker', icon: FaDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Terraform', icon: SiTerraform },
      { name: 'Ansible', icon: SiAnsible },
    ],
  },
  {
    title: 'Cloud',
    icon: FaAws,
    skills: [
      { name: 'EC2', icon: HiOutlineServer },
      { name: 'S3', icon: HiOutlineArchiveBoxArrowDown },
      { name: 'IAM', icon: MdSecurity },
      { name: 'VPC', icon: HiOutlineServerStack },
      { name: 'Load Balancer', icon: MdOutlineBalance },
    ],
  },
  {
    title: 'Programming',
    icon: FaJsSquare,
    skills: [
      { name: 'PHP', icon: FaPhp },
      { name: 'JavaScript', icon: FaJsSquare },
      { name: 'Bash', icon: SiGnubash },
      { name: 'Python', icon: FaPython },
    ],
  },
  {
    title: 'Operating Systems',
    icon: FaLinux,
    skills: [
      { name: 'Linux', icon: FaLinux },
      { name: 'Ubuntu', icon: FaUbuntu },
    ],
  },
  {
    title: 'Version Control',
    icon: FaGitAlt,
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
    ],
  },
  {
    title: 'Database',
    icon: FaDatabase,
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'Web Servers',
    icon: HiOutlineServerStack,
    skills: [
      { name: 'Nginx', icon: SiNginx },
      { name: 'Apache', icon: SiApache },
    ],
  },
]

export const projects = [
  {
    title: 'Full Stack Chat Application Deployment',
    description:
      'Containerized a MERN stack chat application using Docker and deployed it on Kubernetes with Ingress, Services, Persistent Volumes, and ConfigMaps.',
    tech: ['Docker', 'Kubernetes', 'MongoDB', 'Node.js', 'React', 'Nginx'],
    links: { github: 'https://github.com/', demo: '' },
  },
  {
    title: 'LAMP Stack Deployment',
    description:
      'Configured Apache, PHP, and MySQL on Ubuntu Linux and deployed a PHP application with phpMyAdmin.',
    tech: ['Linux', 'Apache', 'PHP', 'MySQL', 'phpMyAdmin'],
    links: { github: 'https://github.com/', demo: '' },
  },
  {
    title: 'Dockerized PHP Application',
    description:
      'Built Docker images for legacy PHP applications, configured Nginx reverse proxy, and automated deployment using Docker Compose.',
    tech: ['Docker', 'Docker Compose', 'PHP', 'Nginx'],
    links: { github: 'https://github.com/', demo: '' },
  },
]

export const experience = [
  {
    role: 'Cloud Intern',
    company: 'Cravita Technology, Pune',
    duration: 'Jan 2026 – Jun 2026',
    points: [
      'Provisioned and managed AWS cloud resources including EC2, IAM, S3, and VPC',
      'Monitored cloud infrastructure and supported routine maintenance activities',
      'Automated application deployment using Jenkins',
      'Built and managed Docker containers for deployment and testing',
      'Supported Linux-based server administration and troubleshooting',
    ],
  },
]

export const certifications = [
  {
    title: "Master's in Cloud Architecture (AWS)",
    issuer: 'Fortune Cloud Technologies',
    date: 'Jan 2025',
  },
  {
    title: 'Kubernetes Fundamentals',
    issuer: 'In progress',
    date: '—',
  },
  {
    title: 'Docker Essentials',
    issuer: 'In progress',
    date: '—',
  },
  {
    title: 'Linux System Administration',
    issuer: 'In progress',
    date: '—',
  },
]

export const heroTypingStrings = [
  'Docker & Kubernetes',
  'AWS Cloud Infrastructure',
  'CI/CD Automation',
  'Linux Administration',
]
