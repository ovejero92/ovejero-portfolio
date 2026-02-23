import { Project } from '../types/index';

// Interfaz extendida para soporte de múltiples imágenes
export interface ProjectWithImages extends Project {
  images?: string[];
  category?: string;
}

export const projects: ProjectWithImages[] = [
  {
    id: '1',
    title: 'TurnosOK - Gestión de Turnos',
    description: 'Plataforma completa para gestión de turnos con Django backend, autenticación segura, sistema de reservas en tiempo real y panel administrativo. Incluye notificaciones automáticas y calendario interactivo.',
    image: '/projects/turnosok-1.jpg',
    images: [
      '/turnosOk.png',
      '/turnosOk2.png',
      '/turnosOk3.png',
      '/turnosOk4.png',
    ],
    technologies: ['Django', 'Python', 'PostgreSQL', 'React', 'REST API'],
    liveUrl: 'https://www.turnosok.com',
    githubUrl: 'https://github.com/ovejero92/GuApiDjanjo',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: '2',
    title: 'EcommerceQG',
    description: 'Tienda online con carrito de compras, gestión de productos y panel de administración. Construida con Angular y json-server como backend mock, con arquitectura preparada para escalar a backend real.',
    image: '/projects/ecommerce-1.jpg',
    images: [
      '/ecommerce1.png',
      '/ecommerce2.png',
      '/ecommerce3.png',
    ],
    technologies: ['React', 'TypeScript', 'node.js', 'mongoose', 'express'],
    liveUrl: 'https://kiostoreok.netlify.app/', 
    githubUrl: 'https://github.com/ovejero92/EcommerceQG',
    featured: true,
    category: 'Frontend & Backend',
  },
  {
    id: '3',
    title: 'Bootcamp Platform',
    description: 'Plataforma de cursos online construida con Next.js. Incluye sistema de autenticación, gestión de usuarios con roles (admin/profesor/alumno), catálogo de cursos y panel de administración.',
    image: '/projects/bootcamp-1.jpg',
    images: [
      '/bootcamp1.png',
      '/bootcamp2.png',
      '/bootcamp3.png',
      '/bootcamp4.png',
    ],
    technologies: ['Next.js', 'TypeScript', 'Angular', 'NgRx', 'SCSS'],
    liveUrl: 'https://bootcamp-next-five.vercel.app/', 
    githubUrl: 'https://github.com/ovejero92/bootcamp-next',
    featured: true,
    category: 'Full Stack',
  },
];