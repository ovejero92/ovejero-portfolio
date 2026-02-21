#!/bin/bash
# Script de Instalación - Portfolio Sin Tailwind CSS

echo "🚀 Portfolio Profesional - Instalación Completa"
echo "=================================================="
echo ""

# Paso 1: Navegar al directorio
echo "📁 Verificando directorio del proyecto..."
cd "c:\Users\soigu\OneDrive\Desktop\Proyects\portfolio-profesional" || exit 1
echo "✅ Directorio correcto"
echo ""

# Paso 2: Verificar Node.js
echo "🔍 Verificando Node.js..."
node --version
npm --version
echo "✅ Node.js está instalado"
echo ""

# Paso 3: Limpiar node_modules si existen
echo "🧹 Limpiando instalaciones anteriores..."
if [ -d "node_modules" ]; then
    echo "Removiendo node_modules antiguo..."
    rm -rf node_modules
    echo "✅ Removido node_modules"
fi

if [ -f "package-lock.json" ]; then
    echo "Removiendo package-lock.json antiguo..."
    rm package-lock.json
    echo "✅ Removido package-lock.json"
fi
echo ""

# Paso 4: Instalar dependencias
echo "📦 Instalando dependencias..."
npm install
if [ $? -eq 0 ]; then
    echo "✅ Dependencias instaladas correctamente"
else
    echo "❌ Error al instalar dependencias"
    exit 1
fi
echo ""

# Paso 5: Ejecutar en desarrollo
echo "🚀 Iniciando servidor de desarrollo..."
echo "⏳ Esto puede tomar un momento la primera vez..."
echo ""
npm run dev

# Cuando termine, mostrar instrucciones
echo ""
echo "✅ ¡Listo!"
echo "=================================================="
echo "Abre tu navegador en: http://localhost:3000"
echo "Presiona Ctrl+C para detener el servidor"
