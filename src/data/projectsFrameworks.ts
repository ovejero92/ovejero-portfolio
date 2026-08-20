import { ProjectWithImages } from './projects';

export const projectsFrameworks: ProjectWithImages[] = [
  {
    id: 'fw-1',
    title: 'Auralert — Alertas inteligentes',
    titleEn: 'Auralert — Smart Alerts',
    description:
      'Sistema de alertas gratuito y de pago. Landing que explica el producto; al pagar se descarga el proyecto completo con opciones premium y deploy listo para integrar en cualquier código.',
    descriptionEn:
      'Free and paid alert system. A landing page explains the product; on purchase you get the full project with premium options and deploy ready to integrate into any codebase.',
    image: '',
    technologies: ['Node.js', 'React', 'Stripe', 'Deploy', 'Open Source'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Producto Web',
  },
  {
    id: 'fw-2',
    title: 'UI Components Library',
    titleEn: 'UI Components Library',
    description:
      'Biblioteca de componentes reutilizables estilo framework (burbujas y más variantes). Landing con documentación y deploy para copiar e implementar bloques visuales en cualquier proyecto.',
    descriptionEn:
      'Reusable component library (bubble style and more variants). Landing with docs and live deploy to copy and drop visual blocks into any project.',
    image: '',
    technologies: ['React', 'TypeScript', 'CSS', 'Storybook', 'Deploy'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Framework UI',
  },
  {
    id: 'fw-3',
    title: 'MailFlow API — Microservicio de correo',
    titleEn: 'MailFlow API — Email Microservice',
    description:
      'Microservicio backend conectado a Resend para lógica de emails, validaciones y notificaciones. Usado en TurnosOK. Incluye landing explicando integración y endpoints.',
    descriptionEn:
      'Backend microservice connected to Resend for email logic, validations and notifications. Used in TurnosOK. Includes a landing explaining integration and endpoints.',
    image: '',
    technologies: ['Node.js', 'Resend', 'REST API', 'Docker', 'JWT'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Microservicio',
  },
  {
    id: 'fw-4',
    title: 'FlagFlow — Feature Flags',
    titleEn: 'FlagFlow — Feature Flags',
    description:
      'Feature Flag Service auto-hospedado: 100% local, gratis, sin nube. Docker Compose, API en Go, SDK para React y rollout por porcentaje de usuarios.',
    descriptionEn:
      'Self-hosted Feature Flag Service: 100% local, free, no cloud. Docker Compose, Go API, React SDK and percentage-based user rollouts.',
    image: '',
    technologies: ['Go', 'PostgreSQL', 'Docker', 'React SDK', 'REST API'],
    liveUrl: 'https://ovejero92.github.io/flagflow/',
    githubUrl: 'https://github.com/ovejero92/flagflow',
    featured: true,
    category: 'Microservicio',
  },
];
