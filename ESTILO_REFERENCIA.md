# Especificaciones de Diseño - Gustavo Ovejero Portfolio

## 🎨 PALETA DE COLORES

### Colores Primarios
- **Negro Profundo**: `#000000` (backgrounds, text principal)
- **Blanco**: `#FFFFFF` (backgrounds claros, text)
- **Gris Oscuro**: `#1A1A1A` (backgrounds alternativos)
- **Gris Medio**: `#666666` (texto secundario)
- **Gris Claro**: `#F5F5F5` (backgrounds)

### Colores de Acento
- **Azul Primario**: `#0066FF` o similar (botones, links)
- **Verde/Cyan**: `#00D9FF` (acentos, highlights)
- **Naranja/Coral**: `#FF6B35` o `#FF8C42` (acentos alternativos)
- **Púrpura**: `#A855F7` (efectos secundarios)

### Colores de Gradientes
- Gradient 1: Negro → Azul (`#000 → #0066FF`)
- Gradient 2: Azul → Cyan (`#0066FF → #00D9FF`)
- Gradient 3: Oscuro → Gris (`#1A1A1A → #333333`)

---

## 🔤 TIPOGRAFÍA

### Fuentes Utilizadas
- **Family**: Probablemente `Inter`, `Poppins` o `Playfair Display`
- **Font Stack**: 
  ```css
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
  ```

### Tamaños de Fuente

#### Headings
- **H1 (Hero Title)**: `3.5rem - 4rem` (~56px - 64px)
  - Weight: `700 - 800`
  - Line Height: `1.2`
  - Letter Spacing: `-0.02em`
  
- **H2 (Section Titles)**: `2.5rem - 3rem` (~40px - 48px)
  - Weight: `700`
  - Line Height: `1.3`
  
- **H3 (Subtitles)**: `1.5rem - 1.875rem` (~24px - 30px)
  - Weight: `600`
  - Line Height: `1.4`

- **H4 (Card Titles)**: `1.25rem` (~20px)
  - Weight: `600`

#### Body Text
- **Body Large**: `1.125rem` (~18px)
  - Weight: `400 - 500`
  - Line Height: `1.6`
  
- **Body Regular**: `1rem` (~16px)
  - Weight: `400`
  - Line Height: `1.6 - 1.8`
  
- **Body Small**: `0.875rem` (~14px)
  - Weight: `400`
  - Line Height: `1.5`

#### Special Text
- **Label/Tag**: `0.75rem - 0.875rem` (~12px - 14px)
  - Weight: `500 - 600`
  - Text Transform: `UPPERCASE`
  - Letter Spacing: `0.05em`

---

## 🎯 COMPONENTES PRINCIPALES

### 1. NAVBAR
```
Estructura:
- Background: Oscuro semitransparente o sólido (#000 o #1A1A1A)
- Backdrop Filter: `blur(10px)` - efecto glassmorphism
- Position: Fixed/Sticky
- Z-index: Alto (50-100)
- Padding: 1rem 2rem (16px 32px)
- Flexbox: space-between, center

Elementos:
- Logo: Tamaño 1.25rem, weight 700, color blanco
- Menu Items: Display flex, gap 2rem
- Links: Hover effect con color acento (#0066FF)
- Transition: 0.3s ease-in-out
- Mobile: Hamburger menu (hidden en desktop)
```

### 2. HERO SECTION
```
Estructura:
- Background: Gradient (#000 → #0066FF) o imagen con overlay
- Min Height: 100vh (viewport completo)
- Display: Flex, direccion column, centered
- Padding: 6rem 2rem (vertical)

Elementos:
- Subtítulo pequeno arriba: "Hola, mi nombre es"
  Color: Cyan (#00D9FF) con delay animation
- Main Title: "Gustavo Ovejero"
  Size: 3.5-4rem, Color: Blanco, Weight: 800
- Profesión: "y soy Frontend Developer"
  Size: 1.5-2rem, Color: Gris, Weight: 500
- Descripción: Lorem ipsum
  Size: 1.125rem, Color: Gris claro, Max-width: 550px
- Social Icons: 4-5 íconos pequeños
  Size: 2rem, Color: Blanco con hover azul
  Gap: 1.5rem
- CTA Button: "Descargar CV"
  Background: Azul (#0066FF)
  Padding: 0.75rem 2rem
  Border Radius: 0.5rem
  Hover: Efecto luz/brillo
```

### 3. ABOUT SECTION
```
Estructura:
- Background: Blanco o Gris muy claro (#F5F5F5)
- Padding: 6rem 2rem
- Grid: 2 columnas (imagen izq, texto derecha)
- Gap: 3rem

Elementos imagen:
- Border: Subtle shadow (0 4px 20px rgba(0,0,0,0.1))
- Border Radius: 1rem
- Objeto-fit: cover
- Width: 100%, Max-width: 400px

Elementos texto:
- Title: "Sobre mi" (h2)
- Profesión: "Frontend Developer" con color acento
- Body text con párrafos
- Botón "Leer más" estilo secundario
```

### 4. SERVICES SECTION
```
Estructura:
- Background: Oscuro (#1A1A1A) o gradiente
- Color text: Blanco
- Padding: 6rem 2rem
- Title: "Sobre Servicios" (h2)

Grid de servicios:
- 3 columnas (responsive: 1 mobile, 2 tablet, 3 desktop)
- Gap: 2rem

Cada Service Card:
- Background: Más oscuro (#0a0a0a) o con border
- Padding: 2rem
- Border: 1px solid rgba(255,255,255,0.1)
- Border-radius: 1rem
- Hover: 
  - Transform: translateY(-10px)
  - Box-shadow: 0 20px 40px rgba(0,102,255,0.1)
  - Transition: 0.3s ease-out
- Icon: Tamaño 2.5rem, color acento azul
- Title: h4
- Description: body small con color gris
- Link "Read More": Azul con hover efecto subrayado
```

### 5. PROJECTS SECTION
```
Estructura:
- Background: Blanco o claro
- Padding: 6rem 2rem
- Title: "Ultimos Proyectos" (h2)

Grid de proyectos:
- 3 columnas (responsive)
- Gap: 1.5rem
- Auto-rows: minmax(300px, auto)

Cada Project Card:
- Background: Blanco
- Border: 1px solid #E0E0E0
- Border-radius: 1rem
- Overflow: hidden
- Box-shadow: 0 4px 12px rgba(0,0,0,0.08)
- Hover:
  - Box-shadow: 0 12px 24px rgba(0,0,0,0.15)
  - Transform: translateY(-5px)
  - Transition: all 0.3s ease

Estructura interna:
- Image: Aspect-ratio 16/9, object-fit cover
- Content: Padding 1.5rem
  - Badge: Pequeño, background azul claro, color azul
  - Title: h4
  - Description: body small
  - Links: Iconos o "Ver más"
```

### 6. CONTACT SECTION
```
Estructura:
- Background: Oscuro (#000 o #1A1A1A)
- Padding: 6rem 2rem
- Title: "Contact Me !" (h2), Color: Blanco
- Max-width contenedor: 600px, centered

Formulario:
- Campos: nombre, email, asunto, mensaje
- Input/Textarea:
  - Background: #222 o transparente con border
  - Border: 1px solid rgba(255,255,255,0.2)
  - Color texto: Blanco
  - Padding: 0.75rem 1rem
  - Border-radius: 0.5rem
  - Focus:
    - Border-color: #0066FF
    - Box-shadow: 0 0 0 3px rgba(0,102,255,0.1)
  - Placeholder: color: rgba(255,255,255,0.5)

Botón Submit:
- Size: Large
- Background: Gradiente azul (linear-gradient(135deg, #0066FF, #00D9FF))
- Color: Blanco
- Padding: 1rem 2.5rem
- Border-radius: 0.5rem
- Font-weight: 600
- Cursor: pointer
- Hover:
  - Opacity: 0.9
  - Transform: scale(1.02)
  - Box-shadow: 0 8px 24px rgba(0,102,255,0.3)
```

### 7. FOOTER
```
Estructura:
- Background: Casi negro (#0a0a0a)
- Padding: 2rem
- Text-align: center
- Border-top: 1px solid rgba(255,255,255,0.1)

Contenido:
- Link/Logo: Color blanco
- Copyright text: Pequeño, color gris
- Additional links: Grid o flex, gap pequeño
```

---

## ✨ EFECTOS Y ANIMACIONES

### Sombras Principales
```css
/* Sombra suave */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

/* Sombra media */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

/* Sombra fuerte */
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);

/* Sombra azul acento */
box-shadow: 0 8px 24px rgba(0, 102, 255, 0.3);

/* Glow effect */
box-shadow: 0 0 20px rgba(0, 217, 255, 0.2);

/* Inset sombra */
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
```

### Animaciones de Entrada
```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide In from Left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Slide In from Right */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Transiciones Hover
```css
/* Standard transition */
transition: all 0.3s ease-in-out;

/* Fast transition */
transition: all 0.15s ease-out;

/* Slow transition */
transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
```

### Efectos de Hover Específicos

**Botones:**
```css
hover: {
  background: Más oscuro/saturado
  transform: scale(1.02) o translateY(-2px)
  box-shadow: Incrementar
  transition: 0.3s ease-out
}
```

**Cards:**
```css
hover: {
  transform: translateY(-8px)
  box-shadow: 0 12px 40px rgba(0,0,0,0.2)
  background: Imperceptible cambio color
  transition: all 0.3s ease-out
}
```

**Links:**
```css
color: transition 0.2s
text-decoration: underline con animation
hover: color más brillante/saturado
```

---

## 📐 ESPACIADOS

### Sistema de Spacing (rem = 16px)
```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 2.5rem (40px)
3xl: 3rem (48px)
4xl: 4rem (64px)
5xl: 6rem (96px)
```

### Padding Típicos
- Secciones: `6rem 2rem` (vertical/horizontal)
- Cards: `1.5rem - 2rem` (todas direcciones)
- Botones: `0.75rem 2rem` (vertical/horizontal)
- Inputs: `0.75rem 1rem`
- Navbar: `1rem 2rem`

### Margin Típicos
- Entre secciones: `4rem - 6rem` (vertical)
- Entre items en grid: `1.5rem - 2rem`
- Entre párrafos: `1rem - 1.5rem`
- Botones con texto: `1rem` (arriba)

### Gap en Flexbox/Grid
- Navbar links: `2rem`
- Social icons: `1.5rem`
- Service cards grid: `2rem`
- Project cards grid: `1.5rem`
- Form fields: `1rem - 1.5rem`

---

## 🎨 BORDES Y BORDER-RADIUS

### Border Radius
```
Small: 0.25rem - 0.375rem (4px - 6px)
Regular: 0.5rem - 0.75rem (8px - 12px)
Large: 1rem (16px)
Extra Large: 1.5rem (24px)
Full circle: 50% o 9999px
```

### Bordes
```
Color típico: rgba(0, 0, 0, 0.1) o rgba(255, 255, 255, 0.1)
Ancho: 1px - 2px
Style: solid (generalmente)
```

---

## 🎬 ANIMACIONES AVANZADAS

### Scroll Animations
- Elementos entran cuando scrollean a viewport
- Fade in + translate Y (20-40px)
- Duration: 0.6s
- Delay escalonado: 0s, 0.1s, 0.2s, etc.

### Parallax Efectos
- Hero background: Movimento leve con scroll
- Rate: 0.5x velocidad scroll

### Micro-animations
- Botones: Pulse o glow on hover
- Icons: Rotate, scale, o bounce
- Links: Underline animation

---

## 🔧 ESTRUCTURA RESPONSIVE

### Breakpoints
```
Mobile: 0px - 639px
Tablet: 640px - 1023px
Desktop: 1024px+
```

### Adjustments por Breakpoint

**Mobile:**
- Padding secciones: `3rem 1rem`
- Font tamaños: -10-15%
- Gap grids: `1rem`
- Navbar: Hamburger menu
- Columnas grid: 1

**Tablet:**
- Padding secciones: `4rem 1.5rem`
- Grid columnas: 2
- Navbar: Visible (si dropdown)

**Desktop:**
- Padding secciones: `6rem 2rem`
- Grid columnas: 3
- Full width layouts

---

## 🌟 ELEMENTOS ESPECIALES

### Glassmorphism (si aplica)
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Gradient Text
```css
background: linear-gradient(135deg, #0066FF, #00D9FF);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Skeleton/Loading States
- Background: Animated gradient
- Color: #E0E0E0 con animación de pulse

### Focus States
```css
outline: 2px solid #0066FF;
outline-offset: 2px;
```

---

## 📋 CHECKLIST PARA IMPLEMENTAR EN TAILWIND

- [ ] Config colores en `tailwind.config.ts`
- [ ] Setup fuentes en `globals.css`
- [ ] Crear componentes de botones reutilizables
- [ ] Crear componentes de cards
- [ ] Setup animaciones custom
- [ ] Hacer responsive first approach
- [ ] Agregar transiciones suaves
- [ ] Implementar dark mode (si necesario)
- [ ] Performance: Lazy loading de imágenes
- [ ] Accesibilidad: Contraste, focus states, ARIA labels

---

## 💾 EJEMPLO DE CONFIG TAILWIND

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        secondary: '#00D9FF',
        dark: {
          DEFAULT: '#000000',
          50: '#1A1A1A',
          100: '#0a0a0a',
        },
      },
      fontSize: {
        'xs': ['0.75rem', '1.5rem'],
        'sm': ['0.875rem', '1.5rem'],
        'base': ['1rem', '1.6rem'],
        'lg': ['1.125rem', '1.6rem'],
        'xl': ['1.25rem', '1.4rem'],
        '2xl': ['1.5rem', '1.4rem'],
        '3xl': ['2.5rem', '1.3rem'],
        '4xl': ['3.5rem', '1.2rem'],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '6rem',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
};
```

---

**Fecha de extracción:** 15 de Febrero de 2026
**Sitio referencia:** https://gustavo-ovejero-cv.netlify.app/
