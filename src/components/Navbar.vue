<template>
  <nav class="sticky top-0 z-50 backdrop-blur-md bg-bg-main/70 border-b border-white/5">
    <div class="container mx-auto px-6 h-20 flex items-center justify-between max-w-5xl">
      
      <!-- Logo Minimalista -->
      <a href="#inicio" class="text-lg font-semibold tracking-widest text-white hover:text-brand-orange transition-colors">
        Portafolio Web<span class="text-brand-orange">.</span>
      </a>

      <!-- Navegación Limpia e Iconos Sutiles -->
      <div class="flex items-center space-x-8 text-xs font-medium tracking-wider uppercase">
        <a href="#sobre-mi" class="text-text-muted hover:text-white transition-colors">Sobre mí</a>
        <a href="#proyectos" class="text-text-muted hover:text-white transition-colors">Proyectos</a>
        <a href="#contacto" class="text-text-muted hover:text-white transition-colors">Contacto</a>
        
        <!-- Botón CV con la identidad de la paleta -->
        <a 
          href="/Abner_Alain_CV.pdf" 
          target="_blank" 
          class="px-4 py-2 border border-brand-orange/30 text-brand-orange rounded hover:bg-brand-orange hover:text-white transition-all duration-300"
        >
          CV
        </a>
      </div>

    </div>
  </nav>
</template>