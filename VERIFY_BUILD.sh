#!/bin/bash
# Verificación de Conversión - Portfolio Sin Tailwind CSS

echo "🔍 Verificando Conversión a CSS Puro"
echo "======================================"
echo ""

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contador de verificaciones
PASS=0
FAIL=0

# Función para verificar archivo
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} Existe: $1"
        ((PASS++))
    else
        echo -e "${RED}✗${NC} Falta: $1"
        ((FAIL++))
    fi
}

# Función para verificar contenido
check_content() {
    if grep -q "$2" "$1" 2>/dev/null; then
        echo -e "${GREEN}✓${NC} Contiene '$2' en $1"
        ((PASS++))
    else
        echo -e "${YELLOW}⚠${NC} No contiene '$2' en $1"
        ((FAIL++))
    fi
}

# Función para verificar que NO contenga
check_not_content() {
    if ! grep -q "$2" "$1" 2>/dev/null; then
        echo -e "${GREEN}✓${NC} No contiene '$2' en $1"
        ((PASS++))
    else
        echo -e "${RED}✗${NC} Aún contiene '$2' en $1"
        ((FAIL++))
    fi
}

echo "📁 Verificando Estructura de Archivos"
echo "─────────────────────────────────────"
check_file "src/styles/main.css"
check_file "src/app/globals.css"
check_file "src/app/layout.tsx"
check_file "src/app/page.tsx"
check_file "src/components/ui/Navbar.tsx"
check_file "src/components/ui/Footer.tsx"
check_file "src/components/ui/button.tsx"
check_file "src/components/ThemeToggle.tsx"
check_file "package.json"
check_file "tailwind.config.ts"
check_file "postcss.config.mjs"
echo ""

echo "📦 Verificando package.json"
echo "────────────────────────────"
check_not_content "package.json" "tailwindcss"
check_not_content "package.json" "framer-motion"
check_not_content "package.json" "react-intersection-observer"
check_content "package.json" "next"
check_content "package.json" "react"
check_content "package.json" "lucide-react"
echo ""

echo "🎨 Verificando main.css"
echo "──────────────────────"
check_content "src/styles/main.css" ".header"
check_content "src/styles/main.css" ".btn"
check_content "src/styles/main.css" ".home"
check_content "src/styles/main.css" ".about"
check_content "src/styles/main.css" ".services"
check_content "src/styles/main.css" ".portfolio"
check_content "src/styles/main.css" ".contact"
check_content "src/styles/main.css" ".footer"
check_content "src/styles/main.css" ".dark"
check_content "src/styles/main.css" "@keyframes"
echo ""

echo "💻 Verificando Componentes"
echo "──────────────────────────"
check_not_content "src/components/ui/Navbar.tsx" "framer-motion"
check_not_content "src/components/ThemeToggle.tsx" "motion.button"
check_not_content "src/components/sections/Hero.tsx" "motion.div"
check_content "src/components/ui/Navbar.tsx" "className=\"header"
echo ""

echo "⚠️  Verificando Tailwind Removido"
echo "──────────────────────────────────"
check_not_content "src/app/globals.css" "@tailwind base"
check_not_content "src/app/layout.tsx" "index.css"
check_content "src/app/layout.tsx" "main.css"
echo ""

echo "📊 RESUMEN"
echo "════════════════════════════════════"
echo -e "${GREEN}✓ Pasadas: $PASS${NC}"
echo -e "${RED}✗ Fallidas: $FAIL${NC}"
echo ""

if [ $FAIL -eq 0 ]; then
    echo -e "${GREEN}✅ ¡Conversión Completada Exitosamente!${NC}"
    echo ""
    echo "Próximos pasos:"
    echo "  1. npm install"
    echo "  2. npm run dev"
    echo "  3. Abre http://localhost:3000"
    exit 0
else
    echo -e "${RED}⚠️  Hay algunos items que revisar${NC}"
    exit 1
fi
