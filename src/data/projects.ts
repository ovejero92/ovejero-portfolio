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
    technologies: ['Django', 'Python', 'PostgreSQL', 'React', 'REST API'],
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
    category: 'Frontend & Backend',
  },
  {
  id: '3',
  title: 'Calia Carteras - Ecommerce',
  titleEn: 'Calia Handbags - Ecommerce',
  description: 'Tienda online de carteras con sistema completo de gestión de pedidos. Incluye una interfaz pública para clientes donde pueden explorar productos y realizar pedidos, y un panel administrativo para la propietaria construido con Node.js y Handlebars para gestionar productos y pedidos.',
  descriptionEn: 'Handbag ecommerce with a complete order management system. Includes a public storefront where customers can browse products and place orders, and an admin panel built with Node.js and Handlebars for the store owner to manage products and orders.',
  image: '/projects/calia-1.jpg',
  images: [
    '/calia1.png',
    '/calia2.png',
    '/calia3.png',
    '/calia4.png',
  ],
  technologies: ['Node.js', 'Express', 'Handlebars', 'Firebase','Cloudinary', 'JavaScript', 'React'],
  liveUrl: 'https://calia-carteras.vercel.app/',
  githubUrl: 'https://github.com/ovejero92/Calia-carteras',
  featured: true,
  category: 'Full Stack',
  },
  {
    id: '4',
    title: 'Bootcamp Platform',
    titleEn: 'Bootcamp Platform',
    description: 'Plataforma de cursos online construida con Next.js. Incluye sistema de autenticación, gestión de usuarios con roles (admin/profesor/alumno), catálogo de cursos y panel de administración.',
    descriptionEn: 'Online course platform built with Next.js. Includes authentication system, user management with roles (admin/teacher/student), course catalog and administration panel.',
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