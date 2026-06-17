<script setup>
import { ref } from 'vue'
const getImageUrl = (name) => {
  return new URL(`../assets/projects/${name}`, import.meta.url).href
}

const proyectos = ref([
  {
    id: 1,
    title: "Cosmic CatStudio",
    description: "Modular client-server platform designed to connect emerging musical artists with their audience. Features seamless media streaming, community interaction management, and an e-commerce ecosystem with PayPal API integration.",
    stack: ["PHP", "JavaScript", "MySQL", "PayPal API", "XAMPP", "PHPMailer"],
    github: "https://github.com/AbnerAlg/Cosmic-CatStudio",
    category: "Architecture & Backend",
    image: "cosmic-cat-preview.png"
  },
  {
    id: 2,
    title: "Ecosistema de Datos ETL & Infraestructura Docker",
    description: "Diseño y despliegue de una arquitectura de datos híbrida (NoSQL + Relacional) basada en microservicios con Docker Compose. Implementación de flujos ETL robustos empleando Apache Hop para la orquestación y migración automatizada de datos de forma eficiente.",
    stack: ["Apache Hop", "Docker", "PostgreSQL", "MongoDB", "Linux"],
    github: "https://github.com/AbnerAlg/apache-hop-etl-pipeline",
    category: "Data Engineering / DevOps",
    image: "etl-docker-preview.png"
  },
  {
    id: 3,
    title: "Computer Vision: Conteo Automatizado de Libros",
    description: "Algoritmo de visión artificial desarrollado para la auditoría automatizada de stock en estanterías. Emplea la red neuronal YOLOv8 para la detección precisa de objetos y técnicas de procesamiento morfológico con OpenCV para optimizar las métricas en escenarios reales.",
    stack: ["Python", "OpenCV", "YOLOv8", "Machine Learning"],
    github: "https://github.com/AbnerAlg/book-detection-computer-vision",
    category: "Artificial Intelligence",
    image: "vision-books-preview.png"
  },
  {
    id: 4,
    title: "Chatbot Cognitivo con Memoria Dinámica",
    description: "Agente conversacional automatizado integrado con la API de Telegram que emplea procesamiento de lenguaje natural (PLN) basado en algoritmos de similitud. Cuenta con un sistema interactivo de memoria dinámica persistente en caliente a través de estructuras JSON nativas.",
    stack: ["Python", "pyTelegramBotAPI", "NLP", "JSON", "Dotenv"],
    github: "https://github.com/AbnerAlg/telegram-nlp-chatbot",
    category: "AI / NLP",
    image: "chatbot-preview.png"
  }
])
</script>

<template>
  <section class="space-y-12 py-6">
    <!-- Encabezado de la Sección -->
    <div class="space-y-2">
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
        <span class="text-brand-orange font-mono text-xl">02.</span> Proyectos Destacados
      </h2>
      <div class="h-1 w-20 bg-brand-orange rounded"></div>
    </div>

    <!-- Grid de Tarjetas de Proyectos -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="proyecto in proyectos" 
        :key="proyecto.id"
        class="group relative flex flex-col justify-between bg-bg-card rounded-xl border border-white/5 hover:border-brand-orange/30 hover:-translate-y-1 transition-all duration-300 shadow-xl overflow-hidden"
      >
        <!-- Contenedor de la Imagen del Proyecto -->
        <div class="w-full h-48 bg-bg-main relative border-b border-white/5 overflow-hidden">
            <img 
                :src="getImageUrl(proyecto.image)" 
                alt="Vista previa del proyecto" 
                class="w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                @error="(e) => e.target.style.display = 'none'" 
            />
          <!-- Overlay degradado sutil para integrar con el fondo oscuro -->
          <div class="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent pointer-events-none"></div>
        </div>

        <!-- Cuerpo de la Tarjeta (Contenido de texto) -->
        <div class="p-6 space-y-4 flex-grow">
          <!-- Categoría e Icono -->
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-medium text-brand-orange uppercase tracking-wider">
              {{ proyecto.category }}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-text-muted group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </div>

          <!-- Título del Proyecto -->
          <h3 class="text-xl font-bold text-slate-100 group-hover:text-brand-orange transition-colors">
            {{ proyecto.title }}
          </h3>

          <!-- Descripción Técnica -->
          <p class="text-sm text-text-muted leading-relaxed font-light">
            {{ proyecto.description }}
          </p>
        </div>

        <!-- Footer de la Tarjeta: Stack + Botón -->
        <div class="px-6 pb-6 space-y-4">
          <!-- Lista de Tecnologías (Badges) -->
          <div class="flex flex-wrap gap-1.5">
            <span 
              v-for="tech in proyecto.stack" 
              :key="tech"
              class="px-2.5 py-0.5 text-[10px] font-mono bg-bg-main text-text-muted rounded border border-white/5"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Enlace de GitHub -->
          <div class="flex justify-end pt-2 border-t border-white/5">
            <a 
              :href="proyecto.github" 
              target="_blank" 
              class="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-brand-orange transition-colors"
            >
              <span>Código fuente</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>