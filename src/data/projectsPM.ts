import { Project } from '../types/index';

// Interfaz extendida para soporte de múltiples imágenes
export interface ProjectWithImages extends Project {
  images?: string[];
  category?: string;
}

export const projectsPM: ProjectWithImages[] = [
  {
    id: '1',
    title: 'Mate+ - APP web aprendisaje de matematica',
    titleEn: 'TurnosOK - Appointment Management',
    description: 'Plataforma completa para gestión de turnos con Django backend, autenticación segura, sistema de reservas en tiempo real y panel administrativo. Incluye notificaciones automáticas y calendario interactivo.',
    descriptionEn: 'Complete appointment management platform with Django backend, secure authentication, real-time booking system and administrative panel. Includes automatic notifications and interactive calendar.',
    image: '/projects/turnosok-1.jpg',
    images: [
      '/turnosOk.png',
      '/turnosOk2.png',
      '/turnosOk3.png',
      '/turnosOk4.png',
    ],
    technologies: ['Data analitics', '', 'PostgreSQL', 'React', 'REST API'],
    liveUrl: 'https://www.turnosok.com',
    githubUrl: 'https://github.com/ovejero92/GuApiDjanjo',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: '2',
    title: 'EcommerceQG',
    titleEn: 'EcommerceQG',
    description: 'Tienda online con carrito de compras, gestión de productos y panel de administración. Construida con Angular y json-server como backend mock, con arquitectura preparada para escalar a backend real.',
    descriptionEn: 'Online store with shopping cart, product management and administration panel. Built with Angular and json-server as a mock backend, with an architecture prepared to scale to a real backend.',
    image: '/projects/ecommerce-1.jpg',
    images: [
      '/ecommerce1.png',
      '/ecommerce2.png',
      '/ecommerce3.png',
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://kiostoreok.netlify.app/',
    githubUrl: 'https://github.com/ovejero92/EcommerceQG',
    featured: true,
    category: 'Full Stack',
  }
];