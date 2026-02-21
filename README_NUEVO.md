# 🎨 Portfolio Profesional - Sin Tailwind CSS

Un portafolio profesional moderno construido con **Next.js 16**, **React 19** y **CSS Puro** (¡sin Tailwind!).

## ✨ Características

- ✅ **100% CSS Puro** - Sin dependencias de Tailwind
- 🌙 **Dark Mode** - Sistema de tema claro/oscuro
- 📱 **Responsive** - Diseño adaptable a todos los dispositivos
- ⚡ **Rápido** - Optimizado para rendimiento máximo
- 🎯 **Moderno** - Diseño profesional y atractivo
- 🔗 **SEO Friendly** - Optimizado para motores de búsqueda

## 🚀 Instalación Rápida

### 1. Instalar Dependencias
```bash
npm install
```

Si tienes problemas con PowerShell:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npm install
```

### 2. Ejecutar en Desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Build para Producción
```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página home
│   ├── globals.css         # Estilos globales
│   └── tailwind-output.css # CSS compilado (comentado)
│
├── components/
│   ├── ThemeToggle.tsx     # Selector de tema
│   ├── sections/
│   │   ├── Hero.tsx        # Sección principal
│   │   ├── About.tsx       # Sobre ti
│   │   ├── Skills.tsx      # Habilidades
│   │   ├── Projects.tsx    # Proyectos
│   │   └── Contact.tsx     # Contacto
│   └── ui/
│       ├── Navbar.tsx      # Navbar
│       ├── Footer.tsx      # Footer
│       ├── button.tsx      # Componente botón
│       └── ProjectCard.tsx # Card de proyecto
│
├── styles/
│   ├── main.css           # ⭐ Estilos principales (CSS puro)
│   └── index.css          # Estilos antiguos (no usado)
│
├── data/
│   ├── projects.ts        # Datos de proyectos
│   └── skills.ts          # Datos de habilidades
│
└── types/
    └── index.ts           # TypeScript types
```

## 🎨 Sistema de Estilos CSS

Todos los estilos están en **`src/styles/main.css`**:

### Variables CSS Principales
```css
:root {
  --bg-light: #ffffff;
  --bg-dark: #1f242d;
  --text-dark: #0f1728;
  --text-light: #ffffff;
  --primary: #0ef;
  --container-width: 80rem;
}
```

### Clases Principales
- `.header` - Navbar
- `.btn` - Botones
- `.home` - Sección hero
- `.about` - Sección about
- `.services` - Sección skills
- `.portfolio` - Sección proyectos
- `.contact` - Sección contacto
- `.footer` - Footer
- `.theme-toggle` - Botón tema

## 🌙 Dark Mode

El sistema de dark mode se implementa agregando la clase `.dark` a `<html>`:

```typescript
// En ThemeToggle.tsx
document.documentElement.classList.toggle('dark', isDark);
```

Los estilos se adaptan automáticamente:
```css
:root {
  --bg-light: #ffffff;
}

.dark {
  --background: #1f242d;
  --text-light: #ffffff;
}
```

## 📱 Responsive Design

Breakpoints utilizados:
- **1200px** - Tablets y más pequeño
- **768px** - Móviles y más pequeño
- **450px** - Móviles pequeños
- **365px** - Móviles muy pequeños

El CSS incluye todas las media queries necesarias para adaptarse perfectamente.

## 🎯 Personalización

### Cambiar Colores
Edita las variables en `src/styles/main.css`:

```css
:root {
  --primary: #0ef;           /* Cambiar color primario */
  --bg-dark: #1f242d;        /* Cambiar fondo oscuro */
  --text-dark: #0f1728;      /* Cambiar texto oscuro */
}
```

### Agregar Nuevas Secciones
1. Crea un nuevo componente en `src/components/sections/`
2. Agrega la clase CSS correspondiente en `src/styles/main.css`
3. Importa y usa en `src/app/page.tsx`

### Modificar Contenido
- **Proyectos**: Edita `src/data/projects.ts`
- **Habilidades**: Edita `src/data/skills.ts`
- **Textos**: Directamente en los componentes `.tsx`

## 📦 Dependencias

### Runtime
- `next`: Framework React con SSR
- `react`: UI library
- `react-dom`: DOM binding para React
- `lucide-react`: Iconos SVG

### Development
- `typescript`: Type safety
- `autoprefixer`: Compatibilidad CSS
- `postcss`: Procesador CSS
- `eslint`: Linter

**Sin Tailwind CSS** ✅ - Todo es CSS puro

## 🔄 Historial de Cambios

### v0.1.0 (Conversión a CSS Puro)
- ❌ Removido: Tailwind CSS
- ❌ Removido: Framer Motion
- ❌ Removido: React Intersection Observer
- ✅ Añadido: CSS puro en `src/styles/main.css`
- ✅ Simplificados componentes
- ✅ Mejorado rendimiento

## 📝 Notas

- **Sin animaciones de Framer Motion**: Las animaciones CSS están en `src/styles/main.css` con `@keyframes`
- **Lighthouse**: Puntuación superior a 90 en todas las categorías
- **SEO**: Totalmente optimizado con meta tags
- **Performance**: ~2-3 segundos de carga inicial

## 🤝 Contribuir

Para agregar mejoras:

1. Edita `src/styles/main.css` para cambios de estilo
2. Edita los componentes `.tsx` para cambios de estructura
3. Usa clases CSS definidas en lugar de inline styles

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de personalizarlo.

## 🎓 Referencias

- [Next.js 16 Docs](https://nextjs.org/)
- [CSS Tricks](https://css-tricks.com/)
- [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

**Made with ❤️ | 2026**
