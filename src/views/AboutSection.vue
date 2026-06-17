<template>
  <section class="space-y-12 py-6">
    <!-- Encabezado de la Sección -->
    <div class="space-y-2">
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
        <span class="text-brand-orange font-mono text-xl">01.</span> Sobre Mí
      </h2>
      <div class="h-1 w-20 bg-brand-orange rounded"></div>
    </div>

    <!-- Grid Principal: Texto + Tarjetas de Datos -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      
      <!-- Columna Izquierda: Perfil Profesional (2/3 de espacio) -->
      <div class="md:col-span-2 space-y-6 text-text-muted text-sm md:text-base leading-relaxed font-light">
        <p>
          Soy estudiante de la **Licenciatura en Ingeniería en Software en la UAEMéx (CUUT)**. Mi enfoque principal está orientado al desarrollo backend, la arquitectura de sistemas y el análisis de datos, combinando una sólida formación académica con experiencia en investigación aplicada.
        </p>
        <p>
          He tenido la oportunidad de colaborar en proyectos de alto impacto científico, participando en la optimización de algoritmos en el **Centro de Investigación en Computación (CIC-IPN)** y como coautor galardonado con el <span class="text-brand-orange font-medium">5.º lugar en la Competencia Internacional DIMEMEX 2025</span>.
        </p>
        <p>
          Además, cuento con experiencia práctica en el ciclo de vida de la Inteligencia Artificial, liderando la validación y etiquetado de más de **16,000 instancias de datos** para modelos supervisados de Machine Learning en equipos multidisciplinarios.
        </p>
      </div>

      <!-- Columna Derecha: Tarjetas Rápidas de Información (1/3 de espacio) -->
      <div class="space-y-4">
        <!-- Tarjeta de Educación -->
        <div class="p-4 bg-bg-card rounded-lg border border-white/5 space-y-2">
          <h3 class="text-xs font-mono uppercase tracking-wider text-brand-orange font-semibold">Educación</h3>
          <p class="text-sm font-bold text-white">Ingeniería en Software</p>
          <p class="text-xs text-text-muted">UAEMéx (CUUT) • 2022 - 2027</p>
        </div>

        <!-- Tarjeta de Certificaciones -->
        <div class="p-4 bg-bg-card rounded-lg border border-white/5 space-y-3">
          <h3 class="text-xs font-mono uppercase tracking-wider text-brand-orange font-semibold">Certificaciones</h3>
          <div class="space-y-2 text-xs">
            <div>
              <p class="font-semibold text-slate-200">Career Essentials in Cybersecurity</p>
              <p class="text-[10px] text-text-muted font-mono">Microsoft & LinkedIn</p>
            </div>
            <div class="border-t border-white/5 pt-2">
              <p class="font-semibold text-slate-200">Cloud Computing Foundations</p>
              <p class="text-[10px] text-text-muted font-mono">Google Cloud Skills Boost</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Sección de Habilidades Técnicas Organizadas por Categoría -->
    <div class="pt-6 space-y-4">
      <h3 class="text-sm font-mono uppercase tracking-wider text-text-muted/70">Tecnologías y Competencias con las que trabajo:</h3>
      
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <!-- Backend -->
        <div class="space-y-2">
          <h4 class="text-xs font-bold text-white border-b border-white/5 pb-1 uppercase">Backend</h4>
          <ul class="text-xs space-y-1 text-text-muted font-mono">
            <li>▪ Java</li>
            <li>▪ Spring Boot</li>
            <li>▪ PHP</li>
            <li>▪ Python</li>
          </ul>
        </div>
        <!-- Data & AI -->
        <div class="space-y-2">
          <h4 class="text-xs font-bold text-white border-b border-white/5 pb-1 uppercase">Data & IA</h4>
          <ul class="text-xs space-y-1 text-text-muted font-mono">
            <li>▪ SQL / PostgreSQL</li>
            <li>▪ Machine Learning</li>
            <li>▪ Data Warehouse</li>
            <li>▪ Data Annotation</li>
          </ul>
        </div>
        <!-- Frontend -->
        <div class="space-y-2">
          <h4 class="text-xs font-bold text-white border-b border-white/5 pb-1 uppercase">Frontend</h4>
          <ul class="text-xs space-y-1 text-text-muted font-mono">
            <li>▪ JavaScript</li>
            <li>▪ Vue.js</li>
            <li>▪ Tailwind CSS</li>
            <li>▪ HTML5 / CSS3</li>
          </ul>
        </div>
        <!-- Infraestructura -->
        <div class="space-y-2">
          <h4 class="text-xs font-bold text-white border-b border-white/5 pb-1 uppercase">Infra & Tools</h4>
          <ul class="text-xs space-y-1 text-text-muted font-mono">
            <li>▪ Git / GitHub</li>
            <li>▪ Linux (Fedora)</li>
            <li>▪ Docker Compose</li>
            <li>▪ Google Cloud</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>