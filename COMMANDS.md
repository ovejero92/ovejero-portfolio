# 📋 Comandos Importantes - Portfolio CSS Puro

## 🚀 Instalación y Ejecución

### Instalar dependencias
```bash
npm install
```

### Ejecutar en desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000)

### Build para producción
```bash
npm run build
```

### Iniciar servidor de producción
```bash
npm start
```

### Ejecutar linter
```bash
npm run lint
```

---

## 📁 Archivos Clave

### **src/styles/main.css** ⭐
- **Descripción**: Archivo CSS principal con todos los estilos
- **Contiene**: 
  - Variables CSS
  - Clases para todas las secciones
  - Media queries para responsive
  - Animaciones CSS (@keyframes)
  - Dark mode styles
- **Editar si**: Quieres cambiar colores, tamaños, espacios, etc.

### **src/app/layout.tsx**
- **Descripción**: Layout principal de la aplicación
- **Importa**: `src/styles/main.css`
- **Editar si**: Quieres cambiar la estructura HTML global

### **src/app/page.tsx**
- **Descripción**: Página principal del portafolio
- **Editar si**: Quieres reordenar secciones o cambiar estructura

### **src/components/**
- **Hero.tsx**: Sección principal (hero)
- **About.tsx**: Sección sobre ti
- **Skills.tsx**: Sección de habilidades
- **Projects.tsx**: Sección de proyectos
- **Contact.tsx**: Sección de contacto
- **Navbar.tsx**: Barra de navegación
- **Footer.tsx**: Pie de página
- **ThemeToggle.tsx**: Selector de tema oscuro/claro

### **src/data/**
- **projects.ts**: Define los proyectos a mostrar
- **skills.ts**: Define las habilidades a mostrar

### **package.json**
- **Descripción**: Configuración del proyecto y dependencias
- **Editar si**: Necesitas agregar nuevas dependencias

### **tailwind.config.ts** (Comentado)
- Archivo de configuración comentado
- Puedes ignorarlo (no se usa)

### **postcss.config.mjs**
- Solo contiene `autoprefixer`
- Proporciona compatibilidad con navegadores antiguos

---

## 🎨 Cambios Comunes

### Cambiar el color primario
**Archivo**: `src/styles/main.css`

```css
:root {
  --primary: #0ef;  /* Cambia este color */
}
```

### Cambiar fondo oscuro
**Archivo**: `src/styles/main.css`

```css
:root {
  --bg-dark: #1f242d;  /* Nuevo color de fondo oscuro */
}
```

### Cambiar nombre en Navbar
**Archivo**: `src/components/ui/Navbar.tsx`

```tsx
<a href="#home" className="logo">
  GO  {/* Cambia esto */}
</a>
```

### Cambiar proyectos mostradores
**Archivo**: `src/data/projects.ts`

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Mi Proyecto",  // Edita aquí
    description: "Descripción",
    // ... más propiedades
  }
];
```

### Cambiar habilidades
**Archivo**: `src/data/skills.ts`

```typescript
export const skills = [
  { name: "React", category: "frontend" },
  { name: "Node.js", category: "backend" },
  // Agrega más...
];
```

### Cambiar redes sociales
**Archivo**: `src/components/sections/Hero.tsx`

```tsx
<div className="social-media">
  <a href="https://github.com/tu-usuario" ...>🐙</a>
  <a href="https://linkedin.com/in/tu-perfil" ...>💼</a>
  <a href="mailto:tu-email@example.com" ...>✉️</a>
</div>
```

---

## 🔧 Configuración Avanzada

### Agregar un nuevo breakpoint
**Archivo**: `src/styles/main.css`

```css
@media (max-width: 1400px) {
  /* Estilos para pantallas de 1400px o menos */
  html {
    font-size: 58%;
  }
}
```

### Cambiar tipografía
**Archivo**: `src/styles/main.css`

```css
html {
  font-family: 'Nueva Fuente', sans-serif;
}
```

### Agregar más animaciones
**Archivo**: `src/styles/main.css`

```css
@keyframes miAnimacion {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.miClase {
  animation: miAnimacion 0.6s ease-out;
}
```

---

## 🐛 Solución de Problemas

### Error: "npm es no se reconoce como comando externo"
**Solución**: Habilita la ejecución de scripts en PowerShell
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Los cambios en CSS no se reflejan
**Solución**: 
1. Asegúrate de estar editando `src/styles/main.css`
2. Recarga la página en el navegador (Ctrl+F5)
3. Si usas dev mode, debería auto-actualizar

### El sitio se ve diferente en móvil
**Solución**: Verifica los media queries en `src/styles/main.css`
- Busca `@media (max-width: 768px)`
- Verifica que los estilos sean correctos

### Las secciones se solapan
**Solución**: Verifica los valores de `padding` y `margin` en `src/styles/main.css`
```css
section {
  padding: 10rem 9% 2rem;  /* Ajusta estos valores */
}
```

---

## 📊 Estructura de Carpetas Explicada

```
portfolio-profesional/
├── src/
│   ├── app/
│   │   ├── globals.css         ← Estilos globales
│   │   ├── layout.tsx          ← Layout principal
│   │   └── page.tsx            ← Página home
│   │
│   ├── components/
│   │   ├── ThemeToggle.tsx     ← Botón tema oscuro/claro
│   │   ├── sections/           ← Secciones principales
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/                 ← Componentes UI
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       ├── button.tsx
│   │       └── ProjectCard.tsx
│   │
│   ├── styles/
│   │   ├── main.css            ← ⭐ CSS PRINCIPAL (EDITA AQUÍ)
│   │   └── index.css           ← Estilos antiguos (no usado)
│   │
│   ├── data/
│   │   ├── projects.ts         ← Datos de proyectos
│   │   └── skills.ts           ← Datos de habilidades
│   │
│   └── types/
│       └── index.ts            ← Type definitions
│
├── public/                      ← Assets estáticos
├── package.json                 ← Dependencias
├── tailwind.config.ts           ← Config comentada
├── tsconfig.json                ← Config TypeScript
├── next.config.ts               ← Config Next.js
├── postcss.config.mjs           ← Config PostCSS
├── eslint.config.mjs            ← Config ESLint
├── CONVERSION_LOG.md            ← Historial de cambios
├── README_NUEVO.md              ← README actualizado
└── COMMANDS.md                  ← Este archivo
```

---

## 📞 Soporte

Si tienes problemas:
1. Revisa este archivo
2. Mira `CONVERSION_LOG.md`
3. Verifica `src/styles/main.css` por los estilos
4. Abre la consola (F12) para ver errores

---

**Última actualización**: Febrero 19, 2026
