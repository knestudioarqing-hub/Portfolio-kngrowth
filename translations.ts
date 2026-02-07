
export type Language = 'pt' | 'es' | 'en';

export const translations = {
  pt: {
    nav: { work: 'Trabalho', web: 'Ir para o Site', team: 'Equipe' },
    hero: {
      title: 'Quer se tornar um profissional {span} no mercado?',
      span: 'mais disputado',
      sub: 'Eleve sua presença digital. Crio experiências web personalizadas que unem estética e funcionalidade.',
      workBtn: 'Ver Trabalhos',
      webBtn: 'Ir para o Site'
    },
    ticker: ['Inscreva-se', 'Videomaker mobile', 'KN Growth', 'Storytelling Visual', 'Web Design'],
    features: {
      title: 'Ideal para você que:',
      items: [
        'Gosta do audiovisual e deseja fazer uma transição de carreira em semanas.',
        'Está em busca de uma nova profissão sem horários rígidos das 9h às 18h.',
        'Quer se posicionar e vender nas redes sociais com um portfólio de alta qualidade.'
      ]
    },
    projects: {
      tag: 'Trabalhos Selecionados',
      title: 'Projetos Recentes',
      viewAll: 'Ver todos os projetos'
    },
    instructor: {
      title: 'Mentores',
      filters: ['Tudo', 'Filmmaking', 'Design', 'Estratégia'],
      members: [
        { name: 'Abdallah', role: 'Lead Filmmaker', exp: '10+ anos de experiência', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' },
        { name: 'Elena Sofia', role: 'Creative Director', exp: '8 anos de experiência', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800' },
        { name: 'Marco Rossi', role: 'Motion Designer', exp: '12 anos de experiência', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800' }
      ]
    },
    footer: { rights: 'Todos os direitos reservados.', passion: 'Desenvolvido com paixão para criadores digitais.' }
  },
  es: {
    nav: { work: 'Trabajo', web: 'Ir a la Web', team: 'Equipo' },
    hero: {
      title: '¿Quieres convertirte en un profesional {span} en el mercado?',
      span: 'más solicitado',
      sub: 'Eleva tu presencia digital. Creo experiencias web personalizadas que fusionan estética y funcionalidad.',
      workBtn: 'Ver Trabajos',
      webBtn: 'Ir a la Web'
    },
    ticker: ['Regístrate', 'Videomaker móvil', 'KN Growth', 'Storytelling Visual', 'Diseño Web'],
    features: {
      title: 'Ideal para ti que:',
      items: [
        'Te gusta el audiovisual y quieres hacer una transición de carrera en semanas.',
        'Buscas una nueva profesión sin horarios rígidos de 9h a 18h.',
        'Quieres posicionarte y vender en redes sociales con un portfólio de alta calidad.'
      ]
    },
    projects: {
      tag: 'Trabajos Seleccionados',
      title: 'Proyectos Recientes',
      viewAll: 'Ver todos los proyectos'
    },
    instructor: {
      title: 'Mentores',
      filters: ['Todo', 'Filmmaking', 'Diseño', 'Estrategia'],
      members: [
        { name: 'Abdallah', role: 'Lead Filmmaker', exp: '10+ años de experiencia', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' },
        { name: 'Elena Sofia', role: 'Creative Director', exp: '8 anos de experiencia', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800' },
        { name: 'Marco Rossi', role: 'Motion Designer', exp: '12 anos de experiencia', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800' }
      ]
    },
    footer: { rights: 'Todos los derechos reservados.', passion: 'Diseñado con pasión para creadores digitales.' }
  },
  en: {
    nav: { work: 'Work', web: 'Visit Website', team: 'Team' },
    hero: {
      title: 'Want to become a {span} professional in the market?',
      span: 'more sought-after',
      sub: 'Elevate your digital presence. I craft bespoke web experiences that merge aesthetics with functionality.',
      workBtn: 'View Work',
      webBtn: 'Visit Website'
    },
    ticker: ['Sign up', 'Mobile Videomaker', 'KN Growth', 'Visual Storytelling', 'Web Design'],
    features: {
      title: 'Ideal for those who:',
      items: [
        'Love audiovisuals and want to make a career transition in weeks.',
        'Are looking for a new profession without rigid 9-to-5 schedules.',
        'Want to position themselves and sell on social media with a high-quality portfolio.'
      ]
    },
    projects: {
      tag: 'Selected Work',
      title: 'Recent Projects',
      viewAll: 'View all projects'
    },
    instructor: {
      title: 'Mentors',
      filters: ['All', 'Filmmaking', 'Design', 'Strategy'],
      members: [
        { name: 'Abdallah', role: 'Lead Filmmaker', exp: '10+ years of experience', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' },
        { name: 'Elena Sofia', role: 'Creative Director', exp: '8 years of experience', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800' },
        { name: 'Marco Rossi', role: 'Motion Designer', exp: '12 years of experience', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800' }
      ]
    },
    footer: { rights: 'All rights reserved.', passion: 'Designed with passion for digital creators.' }
  }
};
