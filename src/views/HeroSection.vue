<template>
  <section class="min-h-[75vh] flex flex-col justify-center items-start space-y-8 pt-8">
    
    <!-- Tag de estado de disponibilidad -->
    <!-- Tag de estado de disponibilidad actualizado -->
    <div class="inline-flex items-center space-x-2.5 px-3 py-1.5 text-xs font-mono text-brand-orange bg-brand-orange/5 rounded-full border border-brand-orange/10">
        <span class="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse"></span>
        <span>Buscando Oportunidades como Becario en TI</span>
    </div>

    <!-- Contenedor de títulos estructurado -->
    <div class="space-y-3 max-w-3xl">
      <h1 class="text-xs font-mono text-brand-orange tracking-widest uppercase">Ingeniero de Software</h1>
      <h2 class="text-5xl md:text-7xl font-bold text-white tracking-tight">
        Abner García<span class="text-brand-orange">.</span>
      </h2>
      <p class="text-xl md:text-2xl font-medium text-text-muted leading-relaxed">
        Especializado en lógica de backend, arquitectura de datos y optimización de sistemas.
      </p>
    </div>

    <!-- Descripción refinada sin bloques masivos -->
    <p class="text-sm md:text-base text-text-muted/80 max-w-xl leading-relaxed font-light">
        Estudiante de 8.º semestre en la UAEMEX (CUUT). Busco incorporarme al campo laboral como **Becario en TI** para adquirir experiencia sólida en entornos reales, con la meta clara de especializarme y enfocar mi futuro en la **Ciberseguridad**.
    </p>

    <!-- Botones de Acción bien definidos -->
    <div class="flex items-center gap-4 pt-2">
      <a 
        href="#proyectos" 
        class="px-6 py-3 text-xs tracking-wider uppercase font-semibold text-white bg-brand-orange hover:bg-brand-orange/90 transition-all rounded shadow-md"
      >
        Ver Proyectos
      </a>
      <a 
        href="#contacto" 
        class="px-6 py-3 text-xs tracking-wider uppercase font-semibold text-text-muted border border-white/10 rounded hover:bg-white/5 hover:text-white transition-all"
      >
        Contacto
      </a>
    </div>

  </section>
</template>