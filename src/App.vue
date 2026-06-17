<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './views/HeroSection.vue'
import AboutSection from './views/AboutSection.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
</script>

<template>
  <div class="min-h-screen bg-darkBg text-slate-100 antialiased">
    <!-- Barra de Navegación Fija -->
    <Navbar />

    <!-- Contenedor Principal con Inferencia de Componentes Reales -->
    <main class="container mx-auto px-6 py-12 space-y-32 max-w-5xl">
      
      <!-- Aquí llamamos a los archivos reales de la carpeta views/ -->
      <HeroSection id="inicio" />
      
      <AboutSection id="sobre-mi" />
      
      <Projects id="proyectos" />
      
      <Contact id="contacto" />

    </main>

    <!-- Footer -->
    <footer class="text-center py-8 text-sm text-slate-500 border-t border-slate-900 mt-20">
      <p>© 2026 Abner Alain Gil García. Desarrollado con Vue 3 & Tailwind CSS.</p>
    </footer>
  </div>
</template>