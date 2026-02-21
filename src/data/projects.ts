import { Project } from '../types/index';

export const projects: Project[] = [
  {
    id: '1',
    title: 'TurnosOK - Sistema de Gestión de Turnos',
    description: 'Plataforma completa para gestión de turnos con Django backend, autenticación segura, sistema de reservas en tiempo real y panel administrativo. Incluye notificaciones automáticas y calendario interactivo.',
    image: '/projects/turnosok.jpg', 
    technologies: ['Django', 'Python', 'PostgreSQL', 'React', 'REST API'],
    liveUrl: 'https://www.turnosok.com',
    githubUrl: 'https://github.com/ovejero92/turnosok', 
    featured: true,
  },
  {
    id: '2',
    title: 'Metsys - Aplicación Empresarial',
    description: 'Solución full stack para gestión de recursos empresariales. Backend robusto en Spring Boot con arquitectura escalable, frontend móvil con Ionic y versión web con React. Sistema de autenticación JWT y roles de usuario.',
    image: '/projects/metsys.jpg',
    technologies: ['Spring Boot', 'Java', 'Ionic', 'React', 'MySQL'],
    githubUrl: 'https://github.com/ovejero92/Metsys',
    featured: true,
  },
  {
    id: '3',
    title: 'E-commerce Full Stack',
    description: 'Tienda online completa con carrito de compras, pasarela de pagos, gestión de inventario y panel de administración. Implementa búsqueda avanzada y sistema de reseñas.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Stripe'],
    githubUrl: 'https://github.com/ovejero92/Backend-Coder',
    featured: true,
  },
  {
    id: '4',
    title: 'Sistema de Login CGR',
    description: 'Sistema de autenticación seguro con recuperación de contraseña, verificación de email y protección contra ataques de fuerza bruta. Incluye logging de actividad y sesiones.',
    image: '/projects/login-cgr.jpg',
    technologies: ['Python', 'Django', 'JWT', 'PostgreSQL'],
    githubUrl: 'https://github.com/ovejero92',
    featured: false,
  },
];